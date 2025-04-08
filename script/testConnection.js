// testConnection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // 👈 Carga el archivo .env

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ No se encontró la variable MONGODB_URI en .env");
  process.exit(1);
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conexión exitosa a MongoDB Atlas"))
.catch(err => console.error("❌ Error al conectar:", err));
