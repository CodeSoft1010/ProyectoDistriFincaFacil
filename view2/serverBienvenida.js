// serverBienvenida.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8081;

// Servir la carpeta view2 donde estará bienvenida.html
//app.use(express.static(path.join(__dirname, 'view2')));
app.use(express.static(path.join(__dirname)));


console.log('Ruta absoluta a view2:', path.join(__dirname));


app.listen(PORT, () => {
  console.log(`🚀 Servidor de bienvenida corriendo en http://localhost:${PORT}`);
});
