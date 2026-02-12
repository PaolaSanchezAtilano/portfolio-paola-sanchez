// data.js
window.PORTFOLIO_DATA = {
  PROFILE: {
    name: "Paola",
    whatsappPhone: "9221890349",
    email: "paolasaenzat203@gmail.com",
    linkedin: "https://www.linkedin.com/in/paola-s%C3%A1nchez-atilano-a7578434b/",
    bio:
      "Desarrolladora de software con experiencia en el diseño y desarrollo de soluciones web, participando tanto en frontend como backend. Ha trabajado con Laravel, Node.js y JavaScript, así como con bases de datos como PostgreSQL y Supabase.",
    chips: ["Frontend", "Backend", "Laravel", "Node.js", "Proyectos reales"],
    skillsIcons: [
  { label: "JavaScript", icon: "devicon-javascript-plain" },
  { label: "Java", icon: "devicon-java-plain" },
  { label: "PHP", icon: "devicon-php-plain" },

  { label: "Laravel", icon: "devicon-laravel-plain" },
  { label: "Node.js", icon: "devicon-nodejs-plain" },
  { label: "Express", icon: "devicon-express-original" },

  { label: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { label: "Supabase", icon: "devicon-supabase-plain" },
  { label: "MySQL", icon: "devicon-mysql-plain" },

  { label: "Git", icon: "devicon-git-plain" },
  { label: "GitHub", icon: "devicon-github-original" },
  { label: "Postman", icon: "devicon-postman-plain" },
],


  },

  featuredProjects: [
    {
      id: "quality-system",
      type: "case-study",
      title: "Sistema Interno de Registro y Gestión de Pedidos",
      subtitle: "Proyecto profesional para Quality",
      description:
        "Sistema web interno para el registro, control y seguimiento de pedidos en múltiples sucursales. Incluye módulos administrativos, flujo de estados y filtros avanzados.",
      role:
        "Desarrollo full stack, diseño de base de datos, implementación de lógica de negocio y construcción de interfaces responsivas.",
      tech: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Supabase", icon: "devicon-supabase-plain colored" },
      ],
      highlights: [
        "Arquitectura modular escalable.",
        "Historial automático de pedidos.",
        "Panel administrativo por sucursal.",
        "Optimización de consultas.",
      ],
      visibility: "private",
      media: {
        type: "image",
        src: "asset/img/Sistema_Pedidos.png",
        alt: "Sistema interno Quality",
      },
      links: {},
    },

    {
      id: "quality-web",
      type: "case-study",
      title: "Actualización y Mejora de Página Web",
      subtitle: "Proyecto profesional para Quality",
      description:
        "Rediseño completo del sitio institucional, agregando estilo moderno, modales interactivos y conexión directa a WhatsApp.",
      role:
        "Desarrollo frontend, creación de modales interactivos e integración con WhatsApp.",
      tech: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      ],
      highlights: [
        "Rediseño completo de UI.",
        "Mejora de experiencia de usuario.",
        "Componentes reutilizables.",
      ],
      visibility: "private",
      media: {
        type: "image",
        src: "asset/img/Pagina_web.png",
        alt: "Preview Quality Web",
      },
      links: {
        live: "https://cadereytaquality.com/",
      },
    },

    {
      id: "equipos-system",
      type: "case-study",
      title: "Sistema de Asignación de Equipos",
      subtitle: "Grupo TI México",
      description:
        "Plataforma web para gestionar asignación de dispositivos tecnológicos e integración con servicios externos.",
      role: "Desarrollo frontend, integración con APIs externas y OAuth2.",
      tech: [
        { name: "Laravel", icon: "devicon-laravel-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
      ],
      highlights: [
        "Integración con Google Drive API.",
        "Autenticación OAuth2.",
        "Gestión dinámica de dispositivos.",
      ],
      visibility: "private",
      media: {
        type: "image",
        src: "asset/img/Sistema_Asignacion.png",
        alt: "Sistema de equipos",
      },
      links: {},
    },
  ],

  moreProjects: [
    {
      id: "stock-report-automation",
      type: "course",
      title: "Stock Report Automation",
      subtitle: "Automatización en Python: análisis + gráfico + envío por correo",
      description:
        "Herramienta de automatización en Python que recupera datos del mercado usando yfinance (Yahoo Finance), calcula estadísticas (máximo, mínimo y promedio), genera una gráfica del precio y envía automáticamente un reporte por correo vía SMTP seguro.",
      role: "Desarrollo completo: integración API, análisis, visualización y envío de reportes.",
      tech: [{ name: "Python", icon: "devicon-python-plain colored" }],
      highlights: [
        "Obtiene datos de acciones con Yahoo Finance.",
        "Cálculo de máximo, mínimo y promedio.",
        "Generación de gráfica de precios.",
        "Envío automático del reporte por correo (SMTP seguro).",
        "Uso de variables de entorno para proteger credenciales.",
      ],
      visibility: "public",
      media: {
        type: "image",
        src: "asset/img/placeholder.jpg",
        alt: "Stock Report Automation",
      },
      links: {
        repo: "https://github.com/PaolaSanchezAtilano/stock-report-automation.git",
      },
    },

    {
      id: "data-analytics-dashboard",
      type: "course",
      title: "Dashboard de Análisis de Datos",
      subtitle: "Proyecto en desarrollo (formación en curso)",
      description:
        "Dashboard para análisis de datos con enfoque en visualización, métricas y exploración. El objetivo es presentar resultados de forma clara mediante gráficas, filtros y KPIs.",
      role: "Diseño y construcción del dashboard (en proceso).",
      tech: [{ name: "Python", icon: "devicon-python-plain colored" }],
      highlights: [
        "Visualización de datos con gráficas.",
        "Indicadores (KPIs) y métricas clave.",
        "Filtros para explorar resultados.",
        "Proyecto en construcción durante el curso.",
      ],
      visibility: "public",
      media: {
        type: "image",
        src: "asset/img/placeholder.jpg",
        alt: "Dashboard de análisis de datos",
      },
      links: {},
    },

    {
      id: "ai-generation-project",
      type: "course",
      title: "Proyecto de Generación con IA",
      subtitle: "Exploración de inteligencia artificial (por afinar)",
      description:
        "Proyecto enfocado en aplicar inteligencia artificial para generar resultados automáticamente (texto, análisis o contenido). Se documentará el enfoque, herramientas y el flujo general conforme avance el desarrollo.",
      role: "Exploración e implementación inicial de IA (por definir).",
      tech: [{ name: "Python", icon: "devicon-python-plain colored" }],
      highlights: [
        "Uso de IA para generación automatizada.",
        "Definición de flujo y objetivos del proyecto.",
        "Mejoras y detalles por refinar conforme avance.",
      ],
      visibility: "public",
      media: {
        type: "image",
        src: "asset/img/placeholder.jpg",
        alt: "Proyecto de generación con IA",
      },
      links: {},
    },
  ],

  EXPERIENCE: [
    {
      role: "Desarrolladora Frontend (Estadía Profesional)",
      company: "Grupo TI México",
      period: "Enero 2025 – Abril 2025",
      description: [
        "Desarrollo de interfaces web utilizando Blade, HTML, CSS y Bootstrap, enfocadas en la experiencia del usuario final.",
        "Implementación de componentes frontend responsivos y reutilizables.",
        "Consumo e integración de APIs del backend para la visualización dinámica de información.",
        "Colaboración en un sistema web desarrollado con Laravel y PHP, participando principalmente en la capa frontend.",
      ],
      tech: ["Laravel", "HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      role: "DevU – Semillero de Talentos (Generación 11)",
      company: "Hey Banco",
      period: "Agosto 2024 – Enero 2025",
      description: [
        "Formación práctica en arquitectura de aplicaciones, basada en proyectos independientes con separación de frontend y backend.",
        "Práctica guiada en desarrollo backend con Java y Spring y desarrollo frontend con Angular, utilizando APIs para la comunicación entre capas.",
        "Trabajo bajo metodologías ágiles, enfocado en buenas prácticas y estructura de proyectos.",
      ],
      tech: ["Java", "Spring", "Angular", "APIs", "Agile"],
    },
  ],

  EDUCATION: [
    {
      title: "Ingeniería en Entornos Virtuales y Negocios Digitales",
      period: "2023 – 2025",
      institution: "Universidad Tecnológica de Cadereyta",
      note: "En proceso de titulación",
    },
    {
      title: "TSU en Tecnologías de la Información",
      period: "2021 – 2023",
      institution: "Universidad Tecnológica de Cadereyta",
      note: "Área Entornos Virtuales y Negocios Digitales",
    },
  ],

  COURSES: [
    {
      title: "Operación de Microcomputadoras",
      year: "2019",
      institution: "CETEC del Sureste",
      type: "diploma",
    },
    {
      title: "Curso de Python",
      year: "2026",
      institution: "Daxus",
      type: "curso",
    },
  ],
};
