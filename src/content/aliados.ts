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
  contribucion: {
    titulo: "Formas de aliarse",
    descripcion:
      "Buscamos alianzas en sectores como: educación, tecnología, ingeniería, arte y cultura, desarrollo social, cooperación internacional, sector empresarial e iglesias",
    pregunta: "¿Cómo puede contribuir tu empresa?",
    modalidades: [
      {
        icono: { src: "/images/aliados/modalidades/recursos.svg", ancho: 56 },
        texto: "RECURSOS\nFINANCIEROS",
      },
      {
        icono: {
          src: "/images/aliados/modalidades/voluntariado.svg",
          ancho: 42,
        },
        texto: "VOLUNTARIADO\nESPECIALIZADO",
      },
      {
        icono: { src: "/images/aliados/modalidades/materiales.svg", ancho: 56 },
        texto: "DONACIÓN DE\nMATERIALES",
      },
      {
        icono: { src: "/images/aliados/modalidades/formacion.svg", ancho: 51 },
        texto: "FORMACIÓN Y\nAPOYO TÉCNICO",
      },
      {
        icono: { src: "/images/aliados/modalidades/difusion.svg", ancho: 66 },
        texto: "MEDIOS DE DIFUSIÓN\nY VISIBILIZACIÓN",
      },
    ],
  },
  solicitud: {
    titulo: "Quiero ser aliado",
    descripcion:
      "Queremos conocer tu organización y explorar posibles oportunidades de trabajo conjunto en proyectos, consultorías, formación, voluntariado y otras iniciativas de interés común.",
    formulario: {
      nombre: "Nombre completo*",
      cargo: "Cargo",
      organizacion: "Organización",
      correo: "Correo*",
      telefono: "Teléfono / WhatsApp*",
      telefonoEjemplo: "+57",
      tipoAlianza: "Tipo de alianza*",
      // TEMPORAL: opciones tomadas de las modalidades de alianza; confirmar con la fundación.
      tiposAlianza: [
        "Recursos financieros",
        "Voluntariado especializado",
        "Donación de materiales",
        "Formación y apoyo técnico",
        "Medios de difusión y visibilización",
      ],
      mensaje: "Mensaje",
      consentimiento: {
        antes: "Acepto la política de ",
        enlace: "tratamiento de datos personales.",
        href: "#",
      },
      enviar: "Enviar",
      // TEMPORAL: mensajes de error no definidos en el diseño.
      errores: {
        requerido: "Este campo es obligatorio.",
        correo: "Escribe un correo válido.",
        telefono: "Escribe un teléfono válido.",
        consentimiento: "Debes aceptar la política para continuar.",
      },
    },
  },
} as const;
