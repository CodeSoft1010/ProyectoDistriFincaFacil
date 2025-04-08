// reproduccion.js

const reproduccionChivos = {
  tiempoEmbarazo: 'El tiempo de gestación promedio de una cabra es de 150 días (aproximadamente 5 meses).',
  recomendaciones: [
    'Proporcionar un ambiente limpio y tranquilo para la cabra preñada.',
    'Evitar el estrés y manejar a la cabra con cuidado durante el embarazo.',
    'Realizar chequeos veterinarios regulares para monitorear la salud de la madre y los fetos.'
  ],
  alimentos: [
    'Forraje de buena calidad (alfalfa, heno).',
    'Concentrados ricos en proteínas y energía.',
    'Suplementos minerales y vitamínicos específicos para cabras preñadas.',
    'Agua limpia y fresca en todo momento.'
  ],
  cuidados: [
    'Asegurarse de que la cabra tenga suficiente espacio para moverse cómodamente.',
    'Mantener un calendario de vacunación y desparasitación actualizado.',
    'Observar signos de parto inminente, como inquietud, hinchazón de la vulva y secreción.',
    'Preparar un área limpia y seca para el parto.'
  ],
  registroNacimiento: function (machos, hembras) {
    return {
      totalNacidos: machos + hembras,
      machos,
      hembras
    };
  }
};

// Ejemplo de uso para registrar nacimientos
const nacimientos = reproduccionChivos.registroNacimiento(3, 2); // 3 machos y 2 hembras
console.log(`Total de chivos nacidos: ${nacimientos.totalNacidos}`);
console.log(`Machos: ${nacimientos.machos}, Hembras: ${nacimientos.hembras}`);

export default reproduccionChivos;