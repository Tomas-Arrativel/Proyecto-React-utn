const express = require('express');
const router = express.Router();
const novedadesModel = require('./../models/novedadesModel');
const cloudinary = require('cloudinary');
const nodemailer = require('nodemailer');

router.get('/novedades', async (req, res, next) => {
  let novedades = await novedadesModel.getNovedades();

  novedades = novedades.map((novedades) => {
    if (novedades.img_id) {
      const imagen = cloudinary.url(novedades.img_id, {
        height: 300,
        crop: 'fill',
      });
      return {
        ...novedades,
        imagen,
      };
    } else {
      return {
        ...novedades,
        imagen: '',
      };
    }
  });

  res.json(novedades);
});

// NodeMailer
router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'arrativeltomas@gmail.com',
    subject: 'Mensaje desde CryptoWeb',
    html: `${req.body.nombre} se contacto a traves de la web con el correo de: ${req.body.email}
    <br> Ademas, comentó lo siguiente: ${req.body.mensaje}. <br> Su numero de telefono es: ${req.body.telefono}`,
  };

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado',
  });
});

module.exports = router;
