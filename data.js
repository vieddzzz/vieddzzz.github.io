const courseStructure = [
  {
    year: 1,
    cycle: 1,
    courses: [
      { id: "biologia", name: "Biología General", prerequisites: [] },
      { id: "matematicas", name: "Matemáticas básicas", prerequisites: [] },
      { id: "introduccion", name: "Introducción a la psicología", prerequisites: [] },
      { id: "desarrollo_personal", name: "Desarrollo personal y autonomía", prerequisites: [] },
      { id: "etica", name: "Filosofía y ética", prerequisites: [] },
      { id: "comunicacion1", name: "Comunicación y redacción 1", prerequisites: [] },
      { id: "actividad1", name: "Actividad complementaria 1", prerequisites: [] }
    ]
  },
  {
    year: 1,
    cycle: 2,
    courses: [
      { id: "bases_biologicas", name: "Bases biológicas del comportamiento", prerequisites: ["biologia"] },
      { id: "cultura", name: "Cultura ambiental y desarrollo sostenible", prerequisites: [] },
      { id: "ciencias_sociales", name: "Ciencias sociales en el contexto actual", prerequisites: [] },
      { id: "taller_creatividad", name: "Taller de creatividad y emprendimiento", prerequisites: [] },
      { id: "pensamiento", name: "Pensamiento científico e investigación", prerequisites: [] },
      { id: "comunicacion2", name: "Comunicación y redacción 2", prerequisites: ["comunicacion1"] },
      { id: "actividad2", name: "Actividad complementaria 2", prerequisites: [] }
    ]
  },
  {
    year: 2,
    cycle: 3,
    courses: [
      { id: "neuropsicologia", name: "Neuropsicología", prerequisites: ["bases_biologicas"] },
      { id: "estadistica1", name: "Estadística aplicada a la psicología 1", prerequisites: ["matematicas"] },
      { id: "cognitiva1", name: "Psicología cognitiva 1", prerequisites: ["introduccion"] },
      { id: "desarrollo1", name: "Psicología del desarrollo humano 1", prerequisites: ["bases_biologicas"] },
      { id: "historia", name: "Historia y sistemas psicológicos", prerequisites: ["introduccion"] },
      { id: "experimental", name: "Psicología experimental", prerequisites: ["introduccion"] },
      { id: "emocion", name: "Emoción y motivación", prerequisites: ["introduccion"] },
      { id: "actividad3", name: "Actividad complementaria 3", prerequisites: [] }
    ]
  },
  {
    year: 2,
    cycle: 4,
    courses: [
      { id: "psicopatologia", name: "Psicopatología", prerequisites: ["bases_biologicas"] },
      { id: "estadistica2", name: "Estadística aplicada a la psicología 2", prerequisites: ["estadistica1"] },
      { id: "cognitiva2", name: "Psicología cognitiva 2", prerequisites: ["cognitiva1"] },
      { id: "desarrollo2", name: "Psicología del desarrollo humano 2", prerequisites: ["desarrollo1"] },
      { id: "personalidad", name: "Psicología de la personalidad", prerequisites: ["historia"] },
      { id: "metodologia", name: "Métodos de investigación", prerequisites: ["estadistica1", "experimental"] },
      { id: "entrevista", name: "Entrevista y observación en psicología", prerequisites: ["emocion"] },
      { id: "actividad4", name: "Actividad complementaria 4", prerequisites: [] }
    ]
  },
  {
    year: 3,
    cycle: 5,
    courses: [
      { id: "clinica_salud", name: "Psicología clínica y de la salud", prerequisites: ["historia", "psicopatologia"] },
      { id: "educacional", name: "Psicología educacional", prerequisites: ["historia", "psicopatologia"] },
      { id: "organizacional", name: "Psicología organizacional", prerequisites: ["historia", "psicopatologia"] },
      { id: "social_comunitaria", name: "Psicología social-comunitaria", prerequisites: ["historia", "psicopatologia"] },
      { id: "test", name: "Teoría y construcción de test", prerequisites: ["estadistica2"] },
      { id: "informe", name: "Diseño y redacción de informe psicológico", prerequisites: ["desarrollo2"] },
      { id: "evaluacion_cualitativa", name: "Evaluación cualitativa", prerequisites: ["entrevista"] },
      { id: "electivo1", name: "Electivo 1", prerequisites: [] }
    ]
  },
  {
    year: 3,
    cycle: 6,
    courses: [
      { id: "afectivo_sexual", name: "Desarrollo afectivo sexual", prerequisites: ["neuropsicologia"] },
      { id: "psicometrica", name: "Evaluación psicométrica aplicada", prerequisites: ["test"] },
      { id: "epistemologia", name: "Epistemología de la psicología", prerequisites: ["etica"] },
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
      { id: "terapias", name: "Terapias psicológicas", prerequisites: ["personalidad"] },
      { id: "programas_pp", name: "Programas preventivo-promocionales", prerequisites: ["psicometrica", "evaluacion_cualitativa"] },
      { id: "tesis1", name: "Taller de tesis 1", prerequisites: ["metodologia"] },
      { id: "cognitivo_conductual", name: "Intervención cognitivo conductual", prerequisites: ["psicometrica"] },
      { id: "etica_deonto", name: "Ética y deontología", prerequisites: ["epistemologia"] },
      { id: "orientacion", name: "Orientación y consejería psicológica", prerequisites: ["entrevista", "desarrollo2"] },
      { id: "electivo3", name: "Electivo 3", prerequisites: [] }
    ]
  },
  {
    year: 4,
    cycle: 8,
    courses: [
      { id: "emergencias", name: "Intervención en emergencias y desastres", prerequisites: ["psicopatologia"] },
      { id: "management", name: "Management & entrepreneurship", prerequisites: ["organizacional"] },
      { id: "tesis2", name: "Taller de tesis 2", prerequisites: ["tesis1"] },
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
      {
        id: "competencias1",
        name: "Desarrollo de competencias profesionales 1",
        prerequisites: [
          "biologia", "matematicas", "introduccion", "desarrollo_personal", "etica",
          "comunicacion1", "actividad1", "bases_biologicas", "cultura", "ciencias_sociales",
          "taller_creatividad", "pensamiento", "comunicacion2", "actividad2",
          "neuropsicologia", "estadistica1", "cognitiva1", "desarrollo1", "historia",
          "experimental", "emocion", "actividad3", "psicopatologia", "estadistica2",
          "cognitiva2", "desarrollo2", "personalidad", "metodologia", "entrevista",
          "actividad4", "clinica_salud", "educacional", "organizacional", "social_comunitaria",
          "test", "informe", "evaluacion_cualitativa", "electivo1", "afectivo_sexual",
          "psicometrica", "epistemologia", "liderazgo", "especialidad1", "especialidad2",
          "electivo2", "terapias", "programas_pp", "tesis1", "cognitivo_conductual",
          "etica_deonto", "orientacion", "electivo3", "emergencias", "management", "tesis2",
          "especialidad3", "especialidad4", "especialidad5", "electivo4", "electivo5"
        ]
      },
      { id: "tesis3", name: "Taller de tesis 3", prerequisites: ["tesis2"] }
    ]
  },
  {
    year: 5,
    cycle: 10,
    courses: [
      { id: "competencias2", name: "Desarrollo de competencias profesionales 2", prerequisites: ["competencias1"] },
      { id: "investigacion_final", name: "Trabajo de investigación", prerequisites: ["tesis3"] }
    ]
  }
];
