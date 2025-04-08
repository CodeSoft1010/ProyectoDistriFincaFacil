// serverReproduccion.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8083;

// Servir la carpeta view4 donde estará reproduccion.html
app.use(express.static(path.join(__dirname)));

console.log('Ruta absoluta a view4:', path.join(__dirname));

app.listen(PORT, () => {
  console.log(`🚀 Servidor de reproducción corriendo en http://localhost:${PORT}`);
});