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

module.exports = router;
