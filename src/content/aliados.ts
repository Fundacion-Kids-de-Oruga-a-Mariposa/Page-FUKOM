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
} as const;
