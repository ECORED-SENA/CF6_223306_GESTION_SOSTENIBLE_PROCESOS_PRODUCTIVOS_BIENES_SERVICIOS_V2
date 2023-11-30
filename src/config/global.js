export default {
  global: {
    componenteFormativo: 'Proponer y evaluar alternativas de innovación',
    descripcionCurso:
      'La innovación es una empresa genera competitividad, pero es necesario diagnosticar su situación actual, con el fin de realizar propuestas de mejora, que le permitan incrementar los niveles de innovación, los cuales deberán ser evaluados de acuerdo con las políticas organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proponer alternativas de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recursos y capacidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Eficiencias del proceso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos y planes de mejora',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluar alternativas de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de costos y beneficios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costo anual y tasa de retorno',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Indicadores de gestión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de mejora, evaluación y seguimiento',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Recursos y capacidades',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Diagnóstico para el fortalecimiento y competitividad empresarial. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/g3qVqkPkNXY',
    },
    {
      tema: '1.2 Eficiencias del proceso',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Información de programa Automatización de Procesos para la Eficiencia Organizacional. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/jtdwu1o7U3Y',
    },
    {
      tema: '1.3 Modelos y planes de mejora',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Actividades del plan de mejora. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/GfYF3i9EnYA',
    },
    {
      tema: '2.1 Sistemas de costos y beneficios',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Costeo e indicadores en la negociación verde: costos y presupuestos. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/QbWPEi9egeo',
    },
    {
      tema: '2.1 Sistemas de costos y beneficios',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Sistema de costeo. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/E7yMcPXQ7Ps',
    },
    {
      tema: '2.2 Costo anual y tasa de retorno',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Alternativas de inversión. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/nHjl83QvSUw',
    },
    {
      tema: '2.3 Indicadores de gestión ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Interpretación de indicadores de gestión (KPI). [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nCUYv5oPwJY',
    },
  ],
  glosario: [
    {
      termino: 'Acotados',
      significado:
        'Un grupo delimitado de objetos o personas que se reserva para un uso concreto.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'Son esos costos que deben ser pagados sin importar la producción que genere la empresa (es decir, si produce en grandes cantidades o en pocas cantidades). Estos costos no dependen de los ingresos de la empresa y algunos de ellos son los pagos de nómina, seguros o servicios públicos.',
    },
    {
      termino: 'Egresos',
      significado:
        'Son aquellas salidas que incluyen los gastos e inversiones de las empresas.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Es la capacidad de las personas para dar inicio a un proyecto o negocio.',
    },
    {
      termino: 'Financiación',
      significado:
        'Corresponde a la suma de dinero obtenida por una empresa o persona, para solventar la compra de bienes o servicios.',
    },
    {
      termino: 'Flujo de efectivo',
      significado:
        'Es el estado contable que permite el control de movimientos de efectivo en la empresa, supervisando así cuánto dinero en esta.',
    },
    {
      termino: 'Inversión',
      significado:
        'Es la actividad en la que se aporta dinero para obtener un beneficio.',
    },
    {
      termino: '<em>Lean Manufacturing:</em> (manufactura esbelta)',
      significado:
        'Es un método de gestión que mejora los sistemas de producción, enfocándose en reducir los desperdicios para maximizar la creación para los clientes.',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'Es el documento que unifica la planificación financiera, económica, organizativa y estratégica de las empresas, para conocer sus objetivos y lograr sus metas.',
    },
    {
      termino: 'Planificación',
      significado:
        'Es una serie de acciones o procedimientos llevados a cabo para cumplir con objetivos o metas determinadas.',
    },
    {
      termino: 'Productividad',
      significado:
        'Es la medida económica utilizada para verificar la cantidad de bienes y servicios que se producen con cada sector de la empresa durante un tiempo determinado.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Es un beneficio promedio que las empresas obtienen o pueden obtener luego de una inversión.',
    },
    {
      termino: 'Tecnología',
      significado:
        'Es la mezcla de conocimientos y técnicas aplicadas para resolver problemas o lograr un objetivo.',
    },
    {
      termino: 'Valor uniforme',
      significado:
        'Consiste en la reducción de ingresos y egresos, que luego son comparados con otras alternativas posibles de un proyecto.',
    },
    {
      termino: 'Variación',
      significado:
        'En el área matemática, son las múltiples agrupaciones posibles, formadas por conjuntos de números u objetos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Albornoz, M. (2009). Indicadores de innovación: las dificultades de un concepto en evolución. Revista iberoamericana de ciencia tecnología y sociedad, 5(13), 9-25.',
      link: '',
    },
    {
      referencia:
        'Kim, W., Mauborgne, Renée, Hassan, Adriana de traductor, & Emercomex revisor técnico. (2005). La estrategia del océano azul: Cómo desarrollar un nuevo mercado donde la competencia no tiene ninguna importancia. Bogotá: Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Instituto Andaluz de Tecnología (IAT). (2012). La respuesta está en la innovación. AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53578',
    },
    {
      referencia:
        'Suárez Mella, R. P. (2009). El desafío de la innovación. Editorial Universitaria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/71381 ',
    },
    {
      referencia:
        'Mantilla Pinilla, E. (2006). Medición de la sostenibilidad ambiental. Fondo Editorial Universidad Cooperativa de Colombia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/35874',
    },
    {
      referencia:
        'Enríquez Sánchez, J. M. (Coord.), Duce Díaz, C. (Coord.) & González, L. J. M. (2020). Repensar la sostenibilidad. UNED - Universidad Nacional de Educación a Distancia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/172252',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Eric Daniel Moreno Muñoz',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distro Capital',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distro Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Spúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Validación de diseño',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Revisión de guión audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: '',
          cargo: 'Validación de contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
