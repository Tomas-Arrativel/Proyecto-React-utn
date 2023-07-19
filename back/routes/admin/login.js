var express = require('express');
var router = express.Router();
const usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

router.post('/', async (req, res, next) => {
  try {
    const usuario = req.body.user;
    const password = req.body.password;

    const data = await usuariosModel.getUserByUsernameAndPassword(
      usuario,
      password,
    );

    if (data) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.user;

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
