const express = require('express');
const router = express.Router();
const novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {
  let novedades = await novedadesModel.getNovedades();

  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 70,
        height: 70,
        crop: 'fill',
      });
      return {
        ...novedad,
        imagen,
      };
    } else return { ...novedad, imagen: '' };
  });

  res.render('admin/novedades', {
    layout: 'admin/layout',
    user: req.session.nombre,
    novedades,
  });
});

router.get('/nuevo', (req, res, send) => {
  res.render('admin/nuevo', {
    layout: 'admin/layout',
  });
});

router.post('/nuevo', async (req, res, send) => {
  try {
    let img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (
      req.body.titulo !== '' &&
      req.body.subtitulo !== '' &&
      req.body.cuerpo !== ''
    ) {
      await novedadesModel.insertNovedad({ ...req.body, img_id });
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: '¡Los campos marcados son requeridos!',
      });
    }
  } catch (err) {
    console.log(err);
    res.render('admin/nuevo', {
      layout: 'admin/layout',
      error: true,
      message: 'Hubo un error cargando la novedad',
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;

  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await destroy(novedad.img_id);
  }

  await novedadesModel.deleteNovedades(id);
  res.redirect('/admin/novedades');
});

router.get('/edit/:id', async (req, res, next) => {
  const id = req.params.id;
  const novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/edit', {
    layout: 'admin/layout',
    novedad,
  });
});

router.post('/edit', async (req, res, next) => {
  try {
    if (
      req.body.titulo !== '' &&
      req.body.subtitulo !== '' &&
      req.body.cuerpo !== ''
    ) {
      let img_id = req.body.img_original;
      let borrarImgVieja = false;
      if (req.body.img_delete === '1') {
        img_id = null;
        borrarImgVieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrarImgVieja = true;
        }
      }
      if (borrarImgVieja && req.body.img_original) {
        await destroy(req.body.img_original);
      }

      const obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
        img_id,
      };
      await novedadesModel.editNovedadesById(obj, req.body.id);
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/edit', {
        layout: 'admin/layout',
        error: true,
        message: '¡Hay campos vacios!',
      });
    }
  } catch (err) {
    console.log(err);
    res.render('admin/edit', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad',
    });
  }
});

module.exports = router;
