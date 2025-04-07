import express from 'express';
import Myroutes from '../routes/routes.mjs';
import AuthRoutes from '../routes/authroute.mjs';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../view')));

app.use(express.json());

// Unir rutas
app.use('/', Myroutes);

app.use('/api', AuthRoutes); // ruta de login

mongoose.connect('mongodb://127.0.0.1:27017/fincaFacil') 
  .then(() => {
    console.log('✅ Conexión a MongoDB exitosa');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  });

