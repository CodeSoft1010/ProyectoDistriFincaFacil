import express from 'express';
import Myroutes from '../routes/routes.mjs';

const app = new express();
//inicializar el puerto
const PORT = 8080;

app.use(express.json());

//unir con las rutas
app.use('/', Myroutes);

//inicializar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});