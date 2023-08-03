var express = require('express');
var router = express.Router();
const novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const novedades = await novedadesModel.getNovedades();

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
    if (
      req.body.titulo !== '' &&
      req.body.subtitulo !== '' &&
      req.body.cuerpo !== ''
    ) {
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: '¡Todos los campos son requeridos!',
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
      const obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
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
