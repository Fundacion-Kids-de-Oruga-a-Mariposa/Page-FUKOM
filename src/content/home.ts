export const home = {
  hero: {
    saludo: "¡HOLA! SOMOS MAYA, SANTI, LUNA Y LEO.",
    titulo: {
      antesDelCorazon: "¡BIENVENID",
      despuesDelCorazon: "S a la",
      resaltado: "Fundación Kids de Oruga a Mariposa!",
    },
    descripcion:
      "Un espacio donde acompañamos a niños, niñas, jóvenes y familias a transformar sus vidas a través de experiencias educativas que potencian su desarrollo integral.",
    acciones: [
      { texto: "Cómo lo hacemos posible", href: "#", variante: "secundario" },
      { texto: "Donar", href: "/donaciones", variante: "principal" },
    ],
  },
  desigualdad: {
    titulo: "Transformamos realidades frente a la desigualdad educativa",
    problema:
      "La falta de habilidades matemáticas y de pensamiento crítico limita el potencial de niñas, niños y jóvenes, y su capacidad para tomar decisiones sobre su proyecto y propósito de vida.",
    respuesta:
      "Respondemos a esta brecha histórica con un modelo pedagógico integral que busca reducir el rezago escolar y el miedo al error.",
    dato: {
      valor: "71%",
      descripcion:
        "De los estudiantes en Colombia se ubica por debajo del nivel mínimo de competencias en matemáticas.",
    },
  },
  frase: {
    texto:
      "Ofrecemos experiencias de aprendizaje que promueven el desarrollo humano integral de las personas en condiciones de vulnerabilidad, para la transformación de sus vidas, familias y territorios.",
    accion: {
      texto: "Conoce cómo lo hacemos",
      href: "#",
      variante: "secundario",
    },
  },
  impacto: {
    titulo: "Nuestro impacto en el territorio",
    descripcion:
      "Acompañamos a niños, niñas, jóvenes y sus familias en el municipio de Soacha y en el sector Los Alpes, en la localidad de Ciudad Bolívar, Bogotá. Contamos con una formación integral que vincula a los padres y familias: esto nutre sus pautas de crianza, principios de administración, convivencia y prevención.",
    accion: {
      texto: "Conoce nuestros proyectos",
      href: "#",
      variante: "secundario",
    },
    zonas: [
      {
        id: "soacha",
        titulo: "Nuestra trayectoria en Soacha",
        etiquetaAccesible: "Ver cifras de Soacha",
        cifras: [
          {
            valor: "+1.200",
            descripcion:
              "niños, jóvenes y familias beneficiados con nuestros servicios",
          },
          {
            valor: "+800",
            descripcion:
              "personas formadas en autocuidado frente a las vulneraciones de sus derechos",
          },
        ],
      },
      {
        id: "alpes",
        titulo: "Los Alpes, Ciudad Bolívar",
        etiquetaAccesible: "Ver cifras de Los Alpes, Ciudad Bolívar",
        cifras: [
          {
            valor: "40",
            descripcion: "niños, niñas y jóvenes en procesos de formación",
          },
          { valor: "20", descripcion: "familias que acompañamos" },
          {
            valor: "60",
            descripcion: "personas formadas en cuidado, derechos y convivencia",
          },
        ],
      },
    ],
  },
  metodologia: {
    contexto: "Nuestra metodología",
    titulo: "De oruga a mariposa",
    descripcion:
      "Una metodología que forma mente, corazón, cuerpo y espíritu, fortaleciendo el pensamiento crítico y la construcción de proyectos de vida con propósito para transformar comunidades.",
    etapas: [
      {
        etapa: "oruga",
        categoria: "Oruga",
        titulo: "Reconocen sus talentos",
        descripcion:
          "Cada niño, niña y joven identifica sus capacidades, intereses, talentos y vocaciones.",
      },
      {
        etapa: "capullo",
        categoria: "Capullo",
        titulo: "Desarrollan proyectos significativos",
        descripcion:
          "Aprenden haciendo, mientras fortalecen su pensamiento crítico, sus valores y su proyecto de vida.",
      },
      {
        etapa: "mariposa",
        categoria: "Mariposa",
        titulo: "Transforman su realidad",
        descripcion:
          "Presentan resultados que evidencian su crecimiento y se convierten en agentes de cambio para su familia y su comunidad.",
      },
    ],
  },
  programas: {
    contexto: "Programas socioeducativos",
    titulo: "Una Apuesta integral por la transformación",
    invitacion: "Descubre nuestros programas con Leo",
    enlace: "Conoce el programa",
    items: [
      {
        titulo: "Piπtando mi futuro",
        descripcion:
          "Niños y jóvenes exploran matemáticas, STEAM y arte cinético, y aprenden a gestionar su vida.",
        destacado: true,
        href: "/programas/pintando-mi-futuro",
      },
      {
        titulo: "Fukomath",
        descripcion:
          "Fortalecemos las matemáticas y el pensamiento lógico con actividades para la vida diaria.",
        destacado: false,
        href: "#",
      },
      {
        titulo: "Fukom en la mesa",
        descripcion:
          "Compartimos alimentos con niños y familias: una buena nutrición también ayuda a aprender.",
        destacado: false,
        href: "#",
      },
      {
        titulo: "Fukom vida",
        descripcion:
          "Acompañamos a niños, jóvenes y familias a descubrir sus talentos y construir su proyecto de vida.",
        destacado: false,
        href: "#",
      },
    ],
  },
  llamados: {
    contexto: "Únete a nosotros",
    tituloSeccion: "Sé parte del cambio",
    imagenes: [
      {
        src: "/images/amigos-fukom.png",
        alt: "Personas sonriendo junto a la fundación",
      },
      {
        src: "/images/carrusel/foto-2.png",
        alt: "Actividad de la fundación con niños",
      },
      {
        src: "/images/carrusel/foto-3.png",
        alt: "Familias participando en los programas",
      },
    ],
    items: [
      {
        color: "amarillo",
        icono: {
          src: "/images/llamados/amigos.svg",
          ancho: 80,
          alto: 77,
          cajaAncho: 120,
          cajaAlto: 117,
        },
        titulo: "Amigos FUKOM",
        descripcion: "Apoya mes a mes o cada año, o suma tu tiempo y talento",
        boton: "Se un amigo FUKOM",
        href: "#",
      },
      {
        color: "azul",
        icono: {
          src: "/images/llamados/apadrina.svg",
          ancho: 81,
          alto: 82,
          cajaAncho: 121,
          cajaAlto: 122,
        },
        titulo: "Apadrina una historia",
        descripcion:
          "Acompaña el proceso de un niño, una mamá o un adulto mayor.",
        boton: "Apadrina",
        href: "#",
      },
      {
        color: "naranja",
        icono: {
          src: "/images/llamados/aliado.svg",
          ancho: 79,
          alto: 68,
          cajaAncho: 119,
          cajaAlto: 121,
        },
        titulo: "Necesitamos un aliado como tú",
        descripcion:
          "Suma tu organización y ayúdanos a llegar a más niños, niñas y familias.",
        boton: "Únete",
        href: "#",
      },
    ],
  },
  final: {
    titulo: "Haz parte del progreso",
    accion: { texto: "Donar", href: "/donaciones", variante: "principal" },
  },
  footer: {
    lema: "INSPIRADOS EN LA EDUCACIÓN INTEGRAL ·",
  },
  carrusel: {
    fotos: [
      {
        src: "/images/carrusel/foto-1.png",
        alt: "Foto 1 del carrusel de programas",
      },
      {
        src: "/images/carrusel/foto-2.png",
        alt: "Foto 2 del carrusel de programas",
      },
      {
        src: "/images/carrusel/foto-3.png",
        alt: "Foto 3 del carrusel de programas",
      },
    ],
  },
} as const;
