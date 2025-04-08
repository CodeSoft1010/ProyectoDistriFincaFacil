// gestionAnimal.js

const chivos = [
  { nombre: 'Copo de Nieve', codigo: 'CHV001', sexo: 'hembra', raza: 'Alpina', peso: 45, fechaNacimiento: '2022-03-15T00:00:00.000+00:00', fechaIngreso: '2022-06-01T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'vacía', observaciones: 'Chivo saludable y activo.' },
  { nombre: 'Trueno', codigo: 'CHV002', sexo: 'macho', raza: 'Boer', peso: 60, fechaNacimiento: '2021-11-20T00:00:00.000+00:00', fechaIngreso: '2022-01-10T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'desconocido', observaciones: 'Buen reproductor, comportamiento dominante.' },
  { nombre: 'Luna', codigo: 'CHV003', sexo: 'hembra', raza: 'Saanen', peso: 38, fechaNacimiento: '2023-01-05T00:00:00.000+00:00', fechaIngreso: '2023-03-12T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'vacía', observaciones: 'En tratamiento por parásitos.' },
  { nombre: 'Rayo', codigo: 'CHV004', sexo: 'macho', raza: 'Criolla', peso: 67, fechaNacimiento: '2020-09-30T00:00:00.000+00:00', fechaIngreso: '2021-02-15T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'desconocido', observaciones: 'Ágil y fuerte, ideal para trabajo.' },
  { nombre: 'Estrella', codigo: 'CHV005', sexo: 'hembra', raza: 'Alpina', peso: 42, fechaNacimiento: '2022-05-10T00:00:00.000+00:00', fechaIngreso: '2022-08-25T00:00:00.000+00:00', salud: 'optimo', gestante: true, estadoReproductivo: 'preñada', observaciones: 'Segunda gestación confirmada.', estado: 'Embarazada' },
  { nombre: 'Niebla', codigo: 'CHV006', sexo: 'hembra', raza: 'Saanen', peso: 0, fechaNacimiento: '2021-07-07T00:00:00.000+00:00', fechaIngreso: '2021-10-01T00:00:00.000+00:00', salud: 'muerto', gestante: false, estadoReproductivo: 'vacía', observaciones: 'Murió por complicaciones post-parto.' },
  { nombre: 'Sol', codigo: 'CHV007', sexo: 'hembra', raza: 'Boer', peso: 36, fechaNacimiento: '2023-06-01T00:00:00.000+00:00', fechaIngreso: '2023-08-15T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'vacía', observaciones: 'Chivita joven, aún no se ha preñado.' },
  { nombre: 'Relámpago', codigo: 'CHV008', sexo: 'macho', raza: 'Criolla', peso: 55, fechaNacimiento: '2022-08-17T00:00:00.000+00:00', fechaIngreso: '2022-11-01T00:00:00.000+00:00', salud: 'optimo', gestante: false, estadoReproductivo: 'desconocido', observaciones: 'Tratamiento en curso por tos persistente.' },
  { nombre: 'Brisa', codigo: 'CHV009', sexo: 'hembra', raza: 'Alpina', peso: 40, fechaNacimiento: '2022-09-21T00:00:00.000+00:00', fechaIngreso: '2022-12-01T00:00:00.000+00:00', salud: 'sano', gestante: false, estadoReproductivo: 'vacía', observaciones: 'Comportamiento tranquilo.' },
  { nombre: 'Tormenta', codigo: 'CHV010', sexo: 'hembra', raza: 'Boer', peso: 50, fechaNacimiento: '2021-12-12T00:00:00.000+00:00', fechaIngreso: '2022-03-01T00:00:00.000+00:00', salud: 'sano', gestante: true, estadoReproductivo: 'preñada', observaciones: 'Gestación avanzada, se espera parto en 2 semanas.', estado: 'Embarazada' },

  // Nuevos registros con salud "enfermo" y enfermedades asignadas
  { nombre: 'Chivo Enfermo 1', codigo: 'CHV011', sexo: 'macho', raza: 'Criolla', peso: 50, fechaNacimiento: '2021-01-01', fechaIngreso: '2021-03-01', salud: 'enfermo', enfermedad: 'Enterotoxemia', observaciones: 'Diarrea severa, tratamiento en curso.' },
  { nombre: 'Chivo Enfermo 2', codigo: 'CHV012', sexo: 'hembra', raza: 'Saanen', peso: 45, fechaNacimiento: '2020-05-15', fechaIngreso: '2020-07-01', salud: 'enfermo', enfermedad: 'Brucelosis', observaciones: 'Abortos recurrentes, bajo control veterinario.' },
  { nombre: 'Chivo Enfermo 3', codigo: 'CHV013', sexo: 'macho', raza: 'Boer', peso: 60, fechaNacimiento: '2022-02-20', fechaIngreso: '2022-04-01', salud: 'enfermo', enfermedad: 'Carbunco Sintomático', observaciones: 'Inflamación muscular, tratamiento con antibióticos.' },
  { nombre: 'Chivo Enfermo 4', codigo: 'CHV014', sexo: 'hembra', raza: 'Alpina', peso: 40, fechaNacimiento: '2023-03-10', fechaIngreso: '2023-05-01', salud: 'enfermo', enfermedad: 'Pasteurelosis', observaciones: 'Dificultad respiratoria, bajo tratamiento.' },
  { nombre: 'Chivo Enfermo 5', codigo: 'CHV015', sexo: 'hembra', raza: 'Criolla', peso: 38, fechaNacimiento: '2021-06-25', fechaIngreso: '2021-08-01', salud: 'enfermo', enfermedad: 'Ectima Contagioso', observaciones: 'Lesiones cutáneas, tratamiento tópico en curso.' },
  { nombre: 'Chivo Enfermo 6', codigo: 'CHV016', sexo: 'macho', raza: 'Boer', peso: 55, fechaNacimiento: '2020-09-15', fechaIngreso: '2020-11-01', salud: 'enfermo', enfermedad: 'Lengua Azul', observaciones: 'Fiebre alta, tratamiento sintomático.' },
  { nombre: 'Chivo Enfermo 7', codigo: 'CHV017', sexo: 'hembra', raza: 'Saanen', peso: 42, fechaNacimiento: '2022-12-01', fechaIngreso: '2023-02-01', salud: 'enfermo', enfermedad: 'Rabia', observaciones: 'Aislamiento por comportamiento agresivo.' },
  { nombre: 'Chivo Enfermo 8', codigo: 'CHV018', sexo: 'macho', raza: 'Criolla', peso: 48, fechaNacimiento: '2021-11-10', fechaIngreso: '2022-01-01', salud: 'enfermo', enfermedad: 'Leptospirosis', observaciones: 'Ictericia, tratamiento con antibióticos.' },
  { nombre: 'Chivo Enfermo 9', codigo: 'CHV019', sexo: 'hembra', raza: 'Alpina', peso: 37, fechaNacimiento: '2023-04-15', fechaIngreso: '2023-06-01', salud: 'enfermo', enfermedad: 'Paratuberculosis', observaciones: 'Diarrea crónica, bajo control veterinario.' },
  { nombre: 'Chivo Enfermo 10', codigo: 'CHV020', sexo: 'macho', raza: 'Boer', peso: 65, fechaNacimiento: '2020-08-20', fechaIngreso: '2020-10-01', salud: 'enfermo', enfermedad: 'Antrax', observaciones: 'Hemorragias, tratamiento de emergencia.' }
];

// Función para cargar los datos de los chivos en el formulario
function cargarChivos() {
  const selectChivos = document.getElementById('selectChivos');
  chivos.forEach((chivo, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${chivo.nombre} - ${chivo.raza} - ${chivo.peso} kg - ${chivo.salud}`;
    selectChivos.appendChild(option);
  });
}

// Función para redirigir a saludAnimal.html
function redirigirSaludAnimal() {
  window.location.href = 'http://localhost:8082/saludAnimal.html';
}

// Función para redirigir a reproduccion.html
function redirigirReproduccion() {
  window.location.href = 'http://localhost:8083/reproduccion.html';
}

// Cargar los datos al cargar la página
document.addEventListener('DOMContentLoaded', cargarChivos);