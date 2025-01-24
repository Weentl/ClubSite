const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite manejar las solicitudes con cuerpo JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Rutas
app.use('/auth', authRoutes); // Ruta para autenticación

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


