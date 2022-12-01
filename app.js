require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PUERTO;

app.use(cors());
app.use(express.json());

app.get('/obtener-informacion', (req, res) => {
  res.send({
    message: 'Felicidades, obtuviste la información'
  });
})

app.post('/enviar-formulario', (req, res) => {
  const { name, email, message } = req.body;
  if(!name || !email || !message) {
    res.send({
      status: 404,
      message: 'Uno de los campos es invalido, por favor intente nuevamente.'
    })
  }
  res.send({
    status: 200,
    message: 'Formulario recibido con exito, vuelva pronto'
  })
})

app.listen(port, () => {
  console.log(`Estamos trabajando en el siguiente link: http://localhost:${port}`)
})
