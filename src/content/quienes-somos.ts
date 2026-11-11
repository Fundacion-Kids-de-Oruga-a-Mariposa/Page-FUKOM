export const quienesSomos = {
  hero: {
    titulo: "¿Quiénes somos?",
    descripcion:
      "Somos una organización dedicada a transformar la vida de niños y jóvenes en Soacha y Los Alpes, Ciudad Bolívar.",
  },
  valores: {
    titulo: "Nuestros valores",
    items: [
      {
        color: "verde",
        icono: {
          src: "/images/quienes-somos/valores/transformacion.svg",
          ancho: 56,
        },
        titulo: "TRANSFORMACIÓN",
        descripcion: "Creemos en el cambio profundo y constante.",
      },
      {
        color: "azul",
        icono: {
          src: "/images/quienes-somos/valores/educacion.svg",
          ancho: 69,
        },
        titulo: "EDUCACIÓN INTEGRAL",
        descripcion: "El aprendizaje va más allá del aula.",
      },
      {
        color: "amarillo",
        icono: {
          src: "/images/quienes-somos/valores/pensamiento.svg",
          ancho: 66,
        },
        titulo: "PENSAMIENTO CRÍTICO E INNOVACIÓN",
        descripcion:
          "Fomentamos el pensamiento matemático, crítico y proyectual.",
      },
      {
        color: "naranja",
        icono: {
          src: "/images/quienes-somos/valores/trascendencia.svg",
          ancho: 60,
        },
        titulo: "TRASCENDENCIA",
        descripcion:
          "No solo formamos individuos; transformamos comunidades enteras.",
      },
      {
        color: "rojo",
        icono: {
          src: "/images/quienes-somos/valores/inclusion.svg",
          ancho: 75,
        },
        titulo: "INCLUSIÓN Y EQUIDAD",
        descripcion: "Las mismas oportunidades de brillar para todos.",
      },
    ],
  },
  misionVision: [
    {
      color: "naranja",
      titulo: "MISIÓN",
      descripcion:
        "Promover el desarrollo humano integral de niños, niñas, jóvenes y familias en condición de vulnerabilidad, a través de experiencias educativas para la transformación de sus vidas, familias y territorios.",
    },
    {
      color: "azul",
      titulo: "VISIÓN",
      descripcion:
        "Para el año 2031, ser el modelo pedagógico integral referente a nivel nacional en la erradicación del rezago escolar, garantizando que los niños, niñas y jóvenes superen la desigualdad educativa y se conviertan en líderes que transforman sus territorios.",
    },
  ],
  promesa: {
    etiqueta: "NUESTRA PROMESA",
    texto:
      "Ofrecemos experiencias de aprendizaje que promueven el desarrollo humano integral de las personas en condiciones de vulnerabilidad, para la transformación de sus vidas, familias y territorios.",
  },
  equipoAliados: {
    titulo: "Conoce a nuestro equipo y aliados",
    items: [
      {
        titulo: "Equipo",
        descripcion:
          "Conoce a las personas que hacen posible la transformación.",
        boton: "Ver equipo",
        href: "/equipo",
      },
      {
        titulo: "Aliados",
        descripcion:
          "Universidades, empresas e iglesias que caminan con nosotros.",
        boton: "Ver aliados",
        href: "/aliados-estrategicos",
      },
    ],
  },
} as const;
