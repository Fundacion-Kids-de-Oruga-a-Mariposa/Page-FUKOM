export const queHacemos = {
  hero: {
    titulo: "Niños y jóvenes con pensamiento crítico, proyectual y vocacional.",
    descripcion:
      "Somos un espacio complementario a la educación formal: creamos experiencias educativas integrales para que niñas, niños y jóvenes construyan su proyecto y propósito de vida.",
  },
  ecosistema: {
    titulo: "El ecosistema FUKOM: 4 programas, una sola visión",
    descripcion:
      "Nuestros programas no son actividades aisladas: Cada uno responde a una dimensión del desarrollo humano y se articula con los demás para ofrecer una experiencia educativa integral",
    invitacion: "Descubre nuestros programas con Leo, Luna, Santi y Maya",
  },
  diferentes: {
    titulo: "Lo que nos hace diferentes",
    items: [
      {
        texto: "Matemáticas, arte y un proyecto de vida juntos.",
        icono: "/images/que-hacemos/diferentes/matematicas-arte.svg",
        ancho: 67,
      },
      {
        texto: "STEAM desde el arte cinético, no desde la robótica.",
        icono: "/images/que-hacemos/diferentes/steam.svg",
        ancho: 56,
      },
      {
        texto: "Una metodología propia de Administración Integral de la Vida.",
        icono: "/images/que-hacemos/diferentes/metodologia.svg",
        ancho: 57,
      },
      {
        texto: "Las familias y la comunidad, parte del proceso.",
        icono: "/images/que-hacemos/diferentes/comunidad.svg",
        ancho: 72,
      },
    ],
  },
  metodologia: {
    etiqueta: "Nuestra metodología",
    titulo: "De oruga a mariposa",
    descripcion:
      "Nuestro modelo pedagógico, inspirado en la metamorfosis, acompaña a niños, niñas y jóvenes a descubrir su propósito de vida en siete pasos. Toca cada paso para recorrerlo.",
    enlaceTexto: "Para conocer más sobre nuestra metodología",
    enlace: { texto: "Consultar aquí", href: "#" },
    anterior: "Paso anterior",
    siguiente: "Paso siguiente",
    pasos: [
      {
        nombre: "Caracterización y reconocimiento",
        etapa: "ETAPA · ORUGA",
        titulo: "Caracterización y reconocimiento",
        texto:
          "El proceso inicia con la identificación de las necesidades, fortalezas, intereses y contextos de los participantes y sus familias. Esta etapa permite comprender la realidad de cada beneficiario y diseñar estrategias de acompañamiento acordes con sus necesidades.",
        figura: { src: "/images/que-hacemos/metodologia/oruga.svg", ancho: 94 },
      },
      {
        nombre: "Formación integral",
        etapa: "ETAPA · ORUGA",
        titulo: "Formación integral",
        texto:
          "A través de talleres individuales, grupales y familiares, se fortalecen habilidades socioemocionales, valores, hábitos de autocuidado, liderazgo, convivencia y comunicación asertiva. Asimismo, se fomenta la reflexión sobre el propósito de vida, el servicio y los principios que favorecen el desarrollo integral.",
        figura: { src: "/images/que-hacemos/metodologia/oruga.svg", ancho: 94 },
      },
      {
        nombre: "Descubrimiento del talento",
        etapa: "ETAPA · ORUGA",
        titulo: "Descubrimiento del talento",
        texto:
          "Los participantes identifican sus capacidades, intereses, talentos y vocaciones. Durante esta etapa comienzan a proyectarse hacia el futuro mediante la definición de metas personales, académicas y profesionales.",
        figura: {
          src: "/images/que-hacemos/metodologia/capullo.svg",
          ancho: 32,
        },
      },
      {
        nombre: "Pensamiento crítico, matemático, innovador",
        etapa: "ETAPA · ORUGA",
        titulo: "Pensamiento crítico, matemático e innovador",
        texto:
          "Mediante la aplicación de metodologías, matemáticas, STEAM, arte cinético y experiencias de aprendizaje participativas, se fortalecen las habilidades cognitivas para analizar situaciones, formular preguntas, resolver problemas, argumentar ideas y tomar decisiones fundamentadas.",
        figura: {
          src: "/images/que-hacemos/metodologia/capullo.svg",
          ancho: 32,
        },
      },
      {
        nombre: "Experiencias significativas",
        etapa: "ETAPA · ORUGA",
        titulo: "Experiencias significativas",
        texto:
          "Los participantes aplican sus conocimientos a través de proyectos, actividades prácticas, retos colaborativos y experiencias que conectan el aprendizaje con situaciones reales de su contexto. Estas experiencias favorecen la creatividad, la autonomía, la participación activa y el aprendizaje para la vida.",
        figura: {
          src: "/images/que-hacemos/metodologia/capullo.svg",
          ancho: 32,
        },
      },
      {
        nombre: "Seguimiento y evaluación",
        etapa: "ETAPA · ORUGA",
        titulo: "Seguimiento y evaluación",
        texto:
          "Se documentan los procesos, avances, logros, aprendizajes y transformaciones alcanzadas por los participantes. Esta etapa permite medir el impacto de las acciones desarrolladas, identificar buenas prácticas y fortalecer continuamente la metodología.",
        figura: {
          src: "/images/que-hacemos/metodologia/mariposa.svg",
          ancho: 58,
        },
      },
      {
        nombre: "Impacto comunitario",
        etapa: "ETAPA · ORUGA",
        titulo: "Impacto comunitario",
        texto:
          "Los aprendizajes obtenidos se comparten con familias, colaboradores, líderes comunitarios y aliados estratégicos mediante capacitaciones, acompañamientos y procesos de fortalecimiento institucional. De esta manera, las transformaciones alcanzadas se amplían generando un impacto sostenible en el territorio.",
        figura: {
          src: "/images/que-hacemos/metodologia/mariposa.svg",
          ancho: 58,
        },
      },
    ],
  },
} as const;
