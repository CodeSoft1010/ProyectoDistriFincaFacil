import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8084;

// Servir la carpeta view5 donde estará estadisticas.html
app.use(express.static(path.join(__dirname)));

console.log('Ruta absoluta a view5:', path.join(__dirname));

app.listen(PORT, () => {
  console.log(`🚀 Servidor de estadísticas corriendo en http://localhost:${PORT}`);
});