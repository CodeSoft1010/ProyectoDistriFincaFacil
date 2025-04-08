// serverSaludAnimal.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8082;

// Servir la carpeta view3 donde estará saludAnimal.html
app.use(express.static(path.join(__dirname)));

console.log('Ruta absoluta a view3:', path.join(__dirname));

app.listen(PORT, () => {
  console.log(`🚀 Servidor de salud animal corriendo en http://localhost:${PORT}`);
});