export type EnlaceMenu = {
  texto: string;
  href: string;
};

export type SeccionMenu = {
  titulo: string;
  href?: string;
  icono: string;
  anchoIcono: number;
  color: string;
  enlaces: EnlaceMenu[];
};

export const columnasMenu: SeccionMenu[][] = [
  [
    {
      titulo: "Quiénes somos",
      icono: "/icons/menu-quienes-somos.svg",
      anchoIcono: 43,
      color: "text-yellow-200",
      enlaces: [
        { texto: "Nuestra historia", href: "/quienes-somos" },
        { texto: "Valores, visión y misión", href: "/quienes-somos#valores" },
        { texto: "Equipo", href: "/equipo" },
        { texto: "Aliados estratégicos", href: "/aliados-estrategicos" },
      ],
    },
    {
      titulo: "InspirARTE FUKOM",
      icono: "/icons/menu-inspirarte.svg",
      anchoIcono: 36,
      color: "text-primary",
      enlaces: [{ texto: "Galería y tienda solidaria", href: "#" }],
    },
  ],
  [
    {
      titulo: "Qué hacemos",
      icono: "/icons/menu-que-hacemos.svg",
      anchoIcono: 33,
      color: "text-secondary",
      enlaces: [
        { texto: "Cómo lo hacemos", href: "#" },
        { texto: "Programas", href: "#" },
        { texto: "Servicios", href: "#" },
      ],
    },
    {
      titulo: "Blog",
      href: "#",
      icono: "/icons/menu-blog.svg",
      anchoIcono: 34,
      color: "text-green",
      enlaces: [{ texto: "Noticias FUKOM", href: "#" }],
    },
  ],
  [
    {
      titulo: "Únete",
      icono: "/icons/menu-unete.svg",
      anchoIcono: 34,
      color: "text-red",
      enlaces: [
        { texto: "Amigos FUKOM", href: "#" },
        { texto: "Apadrinar", href: "#" },
      ],
    },
  ],
];

const buscarSeccion = (titulo: string) =>
  columnasMenu.flat().find((seccion) => seccion.titulo === titulo)!;

export const columnasFooter: SeccionMenu[][] = [
  [buscarSeccion("Quiénes somos"), buscarSeccion("Únete")],
  [
    buscarSeccion("Qué hacemos"),
    buscarSeccion("InspirARTE FUKOM"),
    buscarSeccion("Blog"),
  ],
];
