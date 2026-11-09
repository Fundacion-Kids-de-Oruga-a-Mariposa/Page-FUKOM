export const aliados = {
  hero: {
    titulo: "Aliados estratégicos",
    descripcion:
      "En la fundación reconocemos el valor de las alianzas y del trabajo articulado para impulsar iniciativas que aporten al cumplimiento de nuestro proposito.",
  },
  nuestrosAliados: {
    titulo: "Nuestros aliados",
    categorias: [
      {
        id: "universidades",
        etiqueta: "Universidades",
        aliados: [
          {
            id: "universidad-distrital",
            nombre: "Universidad Distrital Francisco José de Caldas",
            logo: "/images/aliados/logos/universidad-distrital.png",
          },
          {
            id: "unir",
            nombre: "UNIR, Universidad Internacional de La Rioja",
            logo: "/images/aliados/logos/unir.png",
          },
          {
            id: "compensar",
            nombre: "Fundación Universitaria Compensar",
            logo: "/images/aliados/logos/compensar.png",
          },
        ],
      },
      { id: "empresas", etiqueta: "Empresas", aliados: [] },
      { id: "iglesias", etiqueta: "Iglesias y redes", aliados: [] },
      { id: "comunidad", etiqueta: "Comunidad", aliados: [] },
    ],
  },
  destacado: {
    etiqueta: "Universidad Distrital Francisco José de Caldas",
    cifra: "10 AÑOS",
    titulo: "JUNTO A LA UNIVERSIDAD DISTRITAL",
    descripcion:
      "La Universidad Distrital ha sido nuestra aliada estratégica durante 10 años. Sus profesores de matemáticas en formación acompañan las asesorías de Matemáticas con Sentido y Diversidad por grupo de edad y nivel escolar.",
    imagen: "/images/aliados/destacado.png",
  },
  beneficios: {
    titulo: "¿Qué gana tu empresa al ser aliada?",
    items: [
      {
        color: "verde",
        icono: { src: "/images/aliados/beneficios/impacto.svg", ancho: 30 },
        titulo: "IMPACTO CON PROPOSITO",
        descripcion:
          "Participación en procesos de transformación con impacto social verificable.",
      },
      {
        color: "azul",
        icono: { src: "/images/aliados/beneficios/tributarios.svg", ancho: 56 },
        titulo: "BENEFICIOS TRIBUTARIOS",
        descripcion:
          "Somos Régimen Especial y entregamos certificado de donación.",
      },
      {
        color: "amarillo",
        icono: {
          src: "/images/aliados/beneficios/visibilizacion.svg",
          ancho: 58,
        },
        titulo: "VISIBILIZACIÓN DE TU MARCA",
        descripcion:
          "Mención de agradecimiento en el sitio web y en eventos clave.",
      },
      {
        color: "naranja",
        icono: { src: "/images/aliados/beneficios/informes.svg", ancho: 65 },
        titulo: "INFORMES DE RENDIMIENTO DE CUENTAS",
        descripcion: "Conoce los resultados de tu aporte.",
      },
    ],
  },
} as const;
