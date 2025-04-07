// createUsers.js
import '../data/user-db.js'; // Asegura que se conecte a MongoDB
import User from '../models/User.mjs';


async function crearUsuarios() {
  await User.deleteMany(); // Limpia todo por ahora (solo para pruebas)

  const usuarios = [
    { nombre: 'Juan', usuario: 'admin', contraseña: 'admin', rol: 'dueño' },
    { nombre: 'Samuel', usuario: 'sam1', contraseña: 'abcd', rol: 'veterinario' },
    { nombre: 'Carlos', usuario: 'carl1', contraseña: '1234', rol: 'encargado' }
  ];

  try {
    await User.insertMany(usuarios);
    console.log('✅ Usuarios creados exitosamente');
  } catch (err) {
    console.error('❌ Error al crear usuarios:', err);
  } finally {
    process.exit();
  }
}

crearUsuarios();
