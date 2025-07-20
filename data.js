const courseStructure = [
  {
    year: 1,
    cycle: 1,
    courses: [
      { id: "biologia", name: "Biología General", prerequisites: [] },
      { id: "matematicas_basicas", name: "Matemáticas básicas", prerequisites: [] },
      { id: "intro_psicologia", name: "Introducción a la psicología", prerequisites: [] },
      { id: "historia_sistemas", name: "Historia y sistemas psicológicos", prerequisites: ["intro_psicologia"] },
      { id: "psicologia_experimental", name: "Psicología experimental", prerequisites: ["intro_psicologia"] },
      { id: "emocion_motivacion", name: "Emoción y motivación", prerequisites: ["intro_psicologia"] },
      { id: "desarrollo_personal", name: "Desarrollo personal y autonomía", prerequisites: [] },
      { id: "filosofia_etica", name: "Filosofía y ética", prerequisites: [] },
      { id: "comunicacion1", name: "Comunicación y redacción 1", prerequisites: [] },
      { id: "actividad1", name: "Actividad complementaria 1", prerequisites: [] }
    ]
  },
  {
    year: 1,
    cycle: 2,
    courses: [
      { id: "cultura_ambiental", name: "Cultura ambiental y desarrollo sostenible", prerequisites: [] },
      { id: "ciencias_sociales", name: "Ciencias sociales en el contexto actual", prerequisites: [] },
      { id: "taller_creatividad", name: "Taller de creatividad y emprendimiento", prerequisites: [] },
      { id: "pensamiento_cientifico", name: "Pensamiento científico e investigación", prerequisites: [] },
      { id: "comunicacion2", name: "Comunicación y redacción 2", prerequisites: ["comunicacion1"] },
      { id: "actividad2", name: "Actividad complementaria 2", prerequisites: [] }
    ]
  },
  {
    year: 2,
    cycle: 3,
    courses: [
      { id: "bases_biologicas", name: "Bases biológicas del comportamiento", prerequisites: ["biologia"] },
      { id: "estadistica1", name: "Estadística aplicada a la psicología 1", prerequisites: ["matematicas_basicas"] },
      { id: "psico_cognitiva1", name: "Psicología cognitiva 1", prerequisites: ["intro_psicologia"] },
      { id: "desarrollo1", name: "Psicología del desarrollo humano 1", prerequisites: ["bases_biologicas"] },
      { id: "personalidad", name: "Psicología de la personalidad", prerequisites: ["historia_sistemas"] },
      { id: "clinica_salud", name: "Psicología clínica y de la salud", prerequisites: ["historia_sistemas"] },
      { id: "educacional", name: "Psicología educacional", prerequisites: ["historia_sistemas"] },
      { id: "organizacional", name: "Psicología organizacional", prerequisites: ["historia_sistemas"] },
      { id: "social", name: "Psicología social-comunitaria", prerequisites: ["historia_sistemas"] },
      { id: "metodos", name: "Métodos de investigación", prerequisites: ["psicologia_experimental"] },
      { id: "entrevista", name: "Entrevista y observación en psicología", prerequisites: ["emocion_motivacion"] },
      { id: "actividad3", name: "Actividad complementaria 3", prerequisites: [] }
    ]
  },
  {
    year: 2,
    cycle: 4,
    courses: [
      { id: "neuropsicologia", name: "Neuropsicología", prerequisites: ["bases_biologicas"] },
      { id: "psicopatologia", name: "Psicopatología", prerequisites: ["bases_biologicas"] },
      { id: "estadistica2", name: "Estadística aplicada a la psicología 2", prerequisites: ["estadistica1"] },
      { id: "psico_cognitiva2", name: "Psicología cognitiva 2", prerequisites: ["psico_cognitiva1"] },
      { id: "desarrollo2", name: "Psicología del desarrollo humano 2", prerequisites: ["desarrollo1"] },
      { id: "informe", name: "Diseño y redacción de informe psicológico", prerequisites: ["desarrollo2"] },
      { id: "terapias", name: "Terapias psicológicas", prerequisites: ["personalidad"] },
      { id: "test", name: "Teoría y construcción de test", prerequisites: ["estadistica1"] },
      { id: "tesis1", name: "Taller de tesis 1", prerequisites: ["metodos"] },
      { id: "evaluacion_cualitativa", name: "Evaluación cualitativa", prerequisites: ["entrevista"] },
      { id: "actividad4", name: "Actividad complementaria 4", prerequisites: [] }
    ]
  },
  {
    year: 3,
    cycle: 5,
    courses: [
      { id: "management", name: "Management & entrepreneurship", prerequisites: ["organizacional"] },
      { id: "evaluacion_psicometrica", name: "Evaluación psicométrica aplicada", prerequisites: ["test", "estadistica2"] },
      { id: "programas_emocionales", name: "Programas preventivo-emocionales", prerequisites: ["entrevista"] },
      { id: "electivo1", name: "Electivo 1", prerequisites: [] }
    ]
  },
  {
    year: 3,
    cycle: 6,
    courses: [
      { id: "afectivo_sexual", name: "Desarrollo afectivo sexual", prerequisites: ["neuropsicologia"] },
      { id: "intervencion_cognitivo", name: "Intervención cognitivo conductual", prerequisites: ["evaluacion_psicometrica"] },
      { id: "epistemologia", name: "Epistemología de la psicología", prerequisites: ["filosofia_etica"] },
      { id: "liderazgo", name: "Liderazgo y emprendimiento", prerequisites: ["taller_creatividad"] },
      { id: "especialidad1", name: "Especialidad 1", prerequisites: [] },
      { id: "especialidad2", name: "Especialidad 2", prerequisites: [] },
      { id: "electivo2", name: "Electivo 2", prerequisites: [] }
    ]
  },
  {
    year: 4,
    cycle: 7,
    courses: [
      { id: "promocionales", name: "Programas preventivo-promocionales", prerequisites: ["evaluacion_psicometrica"] },
      { id: "tesis2", name: "Taller de tesis 2", prerequisites: ["tesis1"] },
      { id: "etica_deontologia", name: "Ética y deontología", prerequisites: ["epistemologia"] },
      { id: "orientacion", name: "Orientación y consejería psicológica", prerequisites: ["entrevista"] },
      { id: "electivo3", name: "Electivo 3", prerequisites: [] }
    ]
  },
  {
    year: 4,
    cycle: 8,
    courses: [
      { id: "emergencias", name: "Intervención en emergencias y desastres", prerequisites: ["psicopatologia"] },
      { id: "tesis3", name: "Taller de tesis 3", prerequisites: ["tesis2"] },
      { id: "especialidad3", name: "Especialidad 3", prerequisites: [] },
      { id: "especialidad4", name: "Especialidad 4", prerequisites: [] },
      { id: "especialidad5", name: "Especialidad 5", prerequisites: [] },
      { id: "electivo4", name: "Electivo 4", prerequisites: [] },
      { id: "electivo5", name: "Electivo 5", prerequisites: [] }
    ]
  },
  {
    year: 5,
    cycle: 9,
    courses: [
      { id: "desarrollo_comp1", name: "Desarrollo de competencias profesionales 1", prerequisites: ["tesis2"] },
      { id: "desarrollo_comp2", name: "Desarrollo de competencias profesionales 2", prerequisites: ["desarrollo_comp1"] },
      { id: "investigacion", name: "Trabajo de investigación", prerequisites: ["tesis3"] }
    ]
  },
  {
    year: 5,
    cycle: 10,
    courses: [
      { id: "finalizacion", name: "Finalización académica", prerequisites: ["desarrollo_comp2", "investigacion"] }
    ]
  }
];
