export const equipo = {
  hero: {
    titulo: "Personas que hacen posible la transformación",
    descripcion:
      "Somos una organización dedicada a transformar la vida de niños y jóvenes en Soacha y Los Alpes, Ciudad Bolívar.",
  },
  nuestroEquipo: {
    titulo: "Nuestro equipo",
    cerrar: "Cerrar",
    miembros: [
      {
        nombre: "Karen Lizeth Moreno",
        cargo: "Fundadora, Directora general y estratégica",
        foto: "/images/equipo/miembro-placeholder.png",
        biografia:
          "Lidera procesos de transformación educativa, desarrollo integral y construcción de oportunidades para niños, niñas, jóvenes y familias. Su experiencia: fundadora, educadora, líder social, diseñadora de metodologías educativas y promotora de procesos de transformación comunitaria. Temas: educación integral, pensamiento crítico, matemáticas, STEAM, administración integral de la vida, niñez, juventud, familia, liderazgo social, desarrollo comunitario y proyectos de vida.",
      },
      {
        nombre: "Rosmary Patiño Moreno",
        cargo: "Directora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
        biografia:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        nombre: "Teresa Cavanzo",
        cargo: "Coordinadora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
        biografia:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        nombre: "Nelly Rodriguez",
        cargo: "Coordinadora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
        biografia:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        nombre: "Miguel Angel Cruz Cavanzo",
        cargo: "Director de proyectos de arte y relaciones Comerciales",
        foto: "/images/equipo/miembro-placeholder.png",
        biografia:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },
  equipoApoyo: {
    etiqueta: "Equipo de apoyo",
    titulo: "Practicantes y voluntarios que suman talento",
    descripcion:
      "Profesores de matemáticas en formación de la Universidad Distrital, practicantes de UNIR y de la Fundación Universitaria Compensar, voluntarios y cocineras acompañan cada sábado nuestros programas.",
    cifras: [
      {
        color: "verde",
        valor: "6",
        descripcion: "Profesores de matemáticas en formación.",
      },
      { color: "naranja", valor: "5", descripcion: "Voluntarios." },
      { color: "rojo", valor: "5", descripcion: "Profesionales" },
    ],
  },
  voluntariado: {
    titulo: "Hazte grande de corazón sirviendo a otros",
    descripcion:
      "Si eres profesional y quieres servir con tu vocación, conocimientos y talento, súmate como Amigo Comunidad.",
    tarjeta: {
      texto:
        "Si eres profesional y quieres servir con tu vocación, conocimientos y talento, súmate como Amigo Comunidad.",
      beneficios: [
        { icono: "estrella", texto: "Certificación de voluntariado" },
        { icono: "corazon", texto: "Experiencia de campo en el territorio" },
        { icono: "mariposa", texto: "Certificación de voluntariado" },
      ],
      boton: "Quiero ser voluntario",
      href: "#",
    },
    imagen: "/images/equipo/voluntariado/foto.png",
    etiqueta: "Las actividades son los sábados",
  },
} as const;
