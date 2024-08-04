const express = require('express');
const router = express.Router();
const sendMail = require('../utils/nodemailer');


router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    const mailOptions = {

      to: 'alberdiclaudia370@gmail.com', // prueba
      subject: `Nuevo mensaje de ${name}`,
      text: `De: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    };

    await sendMail(mailOptions.to, mailOptions.subject, mailOptions.text);
    res.status(200).json({ success: 'Mensaje enviado con éxito' });

  } catch (error) {

    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

module.exports = router;
