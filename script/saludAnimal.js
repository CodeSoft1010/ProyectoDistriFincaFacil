// saludAnimal.js

const vacunasChivos = [
  {
    nombre: 'Vacuna Clostridial',
    dosis: '2 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene enfermedades clostridiales como el tétanos y enterotoxemia.'
  },
  {
    nombre: 'Vacuna contra Brucelosis',
    dosis: '2 ml',
    frecuencia: 'Una vez en la vida (hembras jóvenes)',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene la brucelosis caprina.'
  },
  {
    nombre: 'Vacuna contra Carbunco Sintomático',
    dosis: '5 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Protege contra el carbunco sintomático.'
  },
  {
    nombre: 'Vacuna contra Pasteurelosis',
    dosis: '2 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene infecciones respiratorias causadas por Pasteurella.'
  },
  {
    nombre: 'Vacuna contra Ectima Contagioso',
    dosis: '1 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Intramuscular',
    eficacia: 'Protege contra lesiones cutáneas por ectima contagioso.'
  },
  {
    nombre: 'Vacuna contra Lengua Azul',
    dosis: '2 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene la fiebre catarral ovina.'
  },
  {
    nombre: 'Vacuna contra Rabia',
    dosis: '1 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Intramuscular',
    eficacia: 'Protege contra la rabia.'
  },
  {
    nombre: 'Vacuna contra Leptospirosis',
    dosis: '2 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene infecciones por Leptospira.'
  },
  {
    nombre: 'Vacuna contra Paratuberculosis',
    dosis: '1 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Reduce la incidencia de paratuberculosis.'
  },
  {
    nombre: 'Vacuna contra Antrax',
    dosis: '1 ml',
    frecuencia: 'Anual',
    viaAdministracion: 'Subcutánea',
    eficacia: 'Previene infecciones por Bacillus anthracis.'
  }
];

const enfermedadesChivos = [
  {
    nombre: 'Enterotoxemia',
    agenteCausal: 'Clostridium perfringens',
    sintomasClinicos: 'Diarrea, letargo, muerte súbita.',
    modoTransmision: 'Ingestión de alimentos contaminados.',
    impactoProduccion: 'Alta mortalidad en animales jóvenes.',
    prevencion: 'Vacunación y manejo adecuado de la alimentación.',
    tratamiento: 'Antibióticos y fluidoterapia.'
  },
  {
    nombre: 'Brucelosis',
    agenteCausal: 'Brucella melitensis',
    sintomasClinicos: 'Abortos, infertilidad, fiebre.',
    modoTransmision: 'Contacto con fluidos infectados.',
    impactoProduccion: 'Pérdidas reproductivas.',
    prevencion: 'Vacunación y control sanitario.',
    tratamiento: 'No tiene tratamiento efectivo en animales.'
  },
  {
    nombre: 'Carbunco Sintomático',
    agenteCausal: 'Clostridium chauvoei',
    sintomasClinicos: 'Inflamación muscular, fiebre, muerte súbita.',
    modoTransmision: 'Ingestión de esporas en el suelo.',
    impactoProduccion: 'Alta mortalidad.',
    prevencion: 'Vacunación anual.',
    tratamiento: 'Antibióticos en etapas tempranas.'
  },
  {
    nombre: 'Pasteurelosis',
    agenteCausal: 'Pasteurella multocida',
    sintomasClinicos: 'Fiebre, tos, dificultad respiratoria.',
    modoTransmision: 'Contacto directo o aerosoles.',
    impactoProduccion: 'Pérdidas por mortalidad y bajo rendimiento.',
    prevencion: 'Vacunación y manejo adecuado.',
    tratamiento: 'Antibióticos específicos.'
  },
  {
    nombre: 'Ectima Contagioso',
    agenteCausal: 'Virus del ectima contagioso',
    sintomasClinicos: 'Lesiones en labios, boca y patas.',
    modoTransmision: 'Contacto directo con animales infectados.',
    impactoProduccion: 'Reducción en el crecimiento y producción.',
    prevencion: 'Vacunación y aislamiento de infectados.',
    tratamiento: 'Tratamiento tópico y soporte.'
  },
  {
    nombre: 'Lengua Azul',
    agenteCausal: 'Virus de la lengua azul',
    sintomasClinicos: 'Fiebre, inflamación de la lengua, cojera.',
    modoTransmision: 'Picaduras de insectos (Culicoides).',
    impactoProduccion: 'Pérdidas reproductivas y de peso.',
    prevencion: 'Vacunación y control de vectores.',
    tratamiento: 'No tiene tratamiento específico.'
  },
  {
    nombre: 'Rabia',
    agenteCausal: 'Virus de la rabia',
    sintomasClinicos: 'Cambios de comportamiento, salivación excesiva, parálisis.',
    modoTransmision: 'Mordeduras de animales infectados.',
    impactoProduccion: 'Mortalidad total en animales infectados.',
    prevencion: 'Vacunación anual.',
    tratamiento: 'No tiene tratamiento efectivo.'
  },
  {
    nombre: 'Leptospirosis',
    agenteCausal: 'Leptospira spp.',
    sintomasClinicos: 'Fiebre, aborto, ictericia.',
    modoTransmision: 'Contacto con agua o alimentos contaminados.',
    impactoProduccion: 'Abortos y reducción en la producción.',
    prevencion: 'Vacunación y manejo higiénico.',
    tratamiento: 'Antibióticos específicos.'
  },
  {
    nombre: 'Paratuberculosis',
    agenteCausal: 'Mycobacterium avium subsp. paratuberculosis',
    sintomasClinicos: 'Diarrea crónica, pérdida de peso.',
    modoTransmision: 'Ingestión de alimentos contaminados.',
    impactoProduccion: 'Reducción en la producción de leche y carne.',
    prevencion: 'Vacunación y manejo adecuado.',
    tratamiento: 'No tiene tratamiento efectivo.'
  },
  {
    nombre: 'Antrax',
    agenteCausal: 'Bacillus anthracis',
    sintomasClinicos: 'Fiebre alta, hemorragias, muerte súbita.',
    modoTransmision: 'Ingestión o inhalación de esporas.',
    impactoProduccion: 'Alta mortalidad.',
    prevencion: 'Vacunación anual.',
    tratamiento: 'Antibióticos en etapas tempranas.'
  }
];

export { vacunasChivos, enfermedadesChivos };