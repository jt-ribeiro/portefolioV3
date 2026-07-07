export const translations = {
  pt: {
    header: {
      nav: [
        { href: "/", label: "Início" },
        { href: "/about", label: "Sobre" },
        { href: "/projects", label: "Projetos" },
        { href: "/skills", label: "Skills" },
        { href: "/contact", label: "Contacto" },
      ],
      cv: "Ver CV",
    },

    home: {
      badge: "Disponível para projetos",
      greeting: "Olá, sou",
      name: "Tomás Ribeiro",
      roles: ["Fullstack Developer", "React & Next.js", "Builder de produtos", "Problem Solver"],
      description:
        "Construo produtos digitais rápidos, focados e com atenção ao detalhe. Gosto de trabalhar próximo dos projetos — da ideia até estar live.",
      btnProjects: "Ver o meu trabalho",
      btnContact: "Falar comigo",
      stats: [
        { num: "7+", label: "Projetos entregues" },
        { num: "3+", label: "Anos a programar" },
        { num: "95+", label: "Lighthouse Score" },
      ],
    },

    about: {
      tag: "whoami",
      title: "Sobre",
      titleAccent: "Mim",
      subtitle: "Junior Fullstack Developer com base em Viana do Castelo, focado em produtos digitais com impacto real.",
      bioName: "Tomás Ribeiro",
      bioParagraph1:
        "Gosto de explorar o desconhecido. Se é novo, difícil ou parece impossível — conta comigo. Trabalho bem em equipa mas também sei ser auto-suficiente. Estou sempre pronto para aprender, errar, corrigir e crescer.",
      bioParagraph2:
        "A minha especialidade é o fullstack — do design da interface à arquitetura da API. Tenho especial interesse em IA aplicada ao produto e em criar interfaces que as pessoas adoram usar. Uso diariamente ferramentas como Claude e Cursor para acelerar o desenvolvimento.",
      contactCta: "Vamos construir algo juntos? →",
      highlights: [
        { emoji: "🎓", title: "Formação", value: "Lic. Computação Gráfica e Multimédia", sub: "ESTG · IPVC Viana do Castelo" },
        { emoji: "💼", title: "Experiência", value: "Estágio Fullstack — Goldylocks", sub: "PHP · Vue.js · MySQL · SCRUM" },
        { emoji: "📍", title: "Localização", value: "Viana do Castelo", sub: "Portugal 🇵🇹" },
        { emoji: "🌐", title: "Idiomas", value: "Português (Nativo)", sub: "Inglês (Avançado)" },
        { emoji: "🤖", title: "AI Dev", value: "Claude & Cursor", sub: "Uso diário no workflow" },
        { emoji: "🎯", title: "Objetivo", value: "Impacto Real", sub: "Produtos que as pessoas usam" },
      ],
      valuesTitle: "Como trabalho",
      values: [
        {
          icon: "⚡",
          title: "Velocidade com Qualidade",
          desc: "Entrego rápido sem sacrificar código limpo, escalável e bem documentado.",
        },
        {
          icon: "🔍",
          title: "Mentalidade de Produto",
          desc: "Não código por código — penso sempre no utilizador final e no impacto real.",
        },
        {
          icon: "♾️",
          title: "Aprendizagem Contínua",
          desc: "Estou sempre a aprender. Se é novo, difícil ou parece impossível, conta comigo.",
        },
      ],
    },

    projects: {
      tag: "./projetos",
      title: "O que",
      titleAccent: "Construí",
      subtitle: "Projetos reais com impacto real — da ideia ao deploy.",
      labels: { github: "GitHub", website: "Website", demo: "Demo" },
      items: [
        {
          title: "Sistema Interativo com IA — Projeto Final",
          short: "Controlo do Chrome por voz e gestos, sem periféricos.",
          desc: "Sistema de visão computacional e processamento de áudio para controlo integral do Google Chrome em tempo real. Modelos de Machine Learning client-side com TensorFlow.js e P5.js, garantindo alta performance e baixa latência no browser.",
          highlight: "Zero periféricos físicos",
        },
        {
          title: "FazPorMim — Plataforma Fullstack",
          short: "Intermediação de serviços com autenticação e APIs REST.",
          desc: "Plataforma fullstack de intermediação de serviços desenvolvida de raiz. Autenticação, APIs REST, gestão de utilizadores e persistência em PostgreSQL — React no frontend, Node.js/Express no backend.",
          highlight: "Stack completa do zero",
        },
        {
          title: "BuggyFlow — SaaS Buggy Rental [Em dev]",
          short: "Gestão de aluguer de veículos — Node.js, Express, PostgreSQL.",
          desc: "Plataforma SaaS em desenvolvimento para gestão de aluguer de buggies. Inclui autenticação, gestão de reservas, painel administrativo e APIs REST com persistência em PostgreSQL.",
          highlight: "Em desenvolvimento",
        },
        {
          title: "Aplicação de Gestão de Restaurante",
          short: "Pedidos e mesas em tempo real — React Native + Node.js.",
          desc: "Aplicação fullstack para gestão de pedidos, mesas e operações internas. React Native no frontend, Node.js no backend e MySQL para persistência, com atualização em tempo real.",
          highlight: "Atualização em tempo real",
        },
        {
          title: "Website Dentista — Dr. Alves de Sousa",
          short: "Landing Page com Chatbot (Ana) para triagem automática.",
          desc: "Solução web para clínica dentária. Chatbot inteligente (Ana) para triagem automática de pacientes, sistema de marcações e design focado em conversão.",
          highlight: "Chatbot de triagem",
        },
        {
          title: "CryptoHub — Dashboard Financeiro",
          short: "Análise de criptoativos em tempo real com Chart.js.",
          desc: "Dashboard analítico de criptoativos em tempo real. Arquitetura modular com integração de APIs financeiras para visualização de dados complexos com HTML5, Sass e JavaScript.",
          highlight: "APIs em tempo real",
        },
        {
          title: "Barbosa Martins — Website Corporativo",
          short: "Presença digital institucional | Lighthouse 95+",
          desc: "Website institucional de alta performance para escritório de advocacia. Animações fluidas (60fps), acessibilidade WCAG 2.1 e score 95+ no Google Lighthouse.",
          highlight: "Lighthouse 95+",
        },
      ],
    },

    skills: {
      tag: "./skills",
      title: "O meu",
      titleAccent: "Arsenal",
      subtitle: "Tecnologias que uso no dia a dia para entregar produtos de qualidade.",
      summary:
        "Experiência prática e académica em desenvolvimento Frontend e Backend, gestão de bases de dados e ferramentas de design. Uso diário de AI-assisted development (Claude, Cursor) para acelerar o workflow. Sempre a aprender.",
    },

    contact: {
      tag: "./contacto",
      title: "Vamos",
      titleAccent: "trabalhar juntos?",
      subtitle: "Seja para um projeto, uma parceria ou só uma conversa — estou disponível.",
      methodsTitle: "Encontra-me em",
      formTitle: "Envia uma mensagem",
      methods: [
        { label: "Email", value: "tomasribeiro930@gmail.com", desc: "Resposta em menos de 24h" },
        { label: "LinkedIn", value: "tomás-ribeiro-4a0a9b390", desc: "Connect profissional" },
        { label: "GitHub", value: "jt-ribeiro", desc: "31 repositórios públicos" },
      ],
      form: {
        name: "Nome",
        namePlaceholder: "O teu nome",
        email: "Email",
        emailPlaceholder: "o.teu@email.com",
        message: "Mensagem",
        messagePlaceholder: "Conta-me o teu projeto...",
        submit: "Enviar mensagem",
        subjectPrefix: "Contacto de",
      },
      success: {
        title: "A caminho!",
        message: "O teu cliente de email abre com a mensagem pré-preenchida. Até breve!",
        reset: "Enviar outra",
      },
    },

    footer: {
      copy: "Feito com 💙 em Viana do Castelo.",
    },
  },

  en: {
    header: {
      nav: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/skills", label: "Skills" },
        { href: "/contact", label: "Contact" },
      ],
      cv: "View CV",
    },

    home: {
      badge: "Available for projects",
      greeting: "Hi, I'm",
      name: "Tomás Ribeiro",
      roles: ["Fullstack Developer", "React & Next.js", "Product Builder", "Problem Solver"],
      description:
        "I build fast, focused digital products with attention to detail. I like staying close to projects — from idea all the way to going live.",
      btnProjects: "See my work",
      btnContact: "Get in touch",
      stats: [
        { num: "7+", label: "Projects shipped" },
        { num: "3+", label: "Years coding" },
        { num: "95+", label: "Lighthouse Score" },
      ],
    },

    about: {
      tag: "whoami",
      title: "About",
      titleAccent: "Me",
      subtitle: "Junior Fullstack Developer based in Viana do Castelo, focused on digital products with real impact.",
      bioName: "Tomás Ribeiro",
      bioParagraph1:
        "I love exploring the unknown. If it's new, difficult or seems impossible — count me in. I work great in a team but I'm equally self-sufficient. I'm always ready to learn, fail, fix and grow.",
      bioParagraph2:
        "My specialty is fullstack — from UI design to API architecture. I have a particular interest in AI applied to products and building interfaces people love to use. I use Claude and Cursor daily to speed up my development workflow.",
      contactCta: "Let's build something together? →",
      highlights: [
        { emoji: "🎓", title: "Education", value: "B.Sc. Computer Graphics & Multimedia", sub: "ESTG · IPVC Viana do Castelo" },
        { emoji: "💼", title: "Experience", value: "Fullstack Internship — Goldylocks", sub: "PHP · Vue.js · MySQL · SCRUM" },
        { emoji: "📍", title: "Location", value: "Viana do Castelo", sub: "Portugal 🇵🇹" },
        { emoji: "🌐", title: "Languages", value: "Portuguese (Native)", sub: "English (Advanced)" },
        { emoji: "🤖", title: "AI Dev", value: "Claude & Cursor", sub: "Daily workflow tools" },
        { emoji: "🎯", title: "Goal", value: "Real Impact", sub: "Products people actually use" },
      ],
      valuesTitle: "How I work",
      values: [
        {
          icon: "⚡",
          title: "Speed with Quality",
          desc: "I deliver fast without sacrificing clean, scalable and well-documented code.",
        },
        {
          icon: "🔍",
          title: "Product Mindset",
          desc: "Not code for the sake of code — I always think about the end user and real impact.",
        },
        {
          icon: "♾️",
          title: "Continuous Learning",
          desc: "I'm always learning. If it's new, hard or seems impossible — count me in.",
        },
      ],
    },

    projects: {
      tag: "./projects",
      title: "What I've",
      titleAccent: "Built",
      subtitle: "Real projects with real impact — from idea to deploy.",
      labels: { github: "GitHub", website: "Website", demo: "Demo" },
      items: [
        {
          title: "AI Interactive System — Final Year Project",
          short: "Chrome control via voice & gestures, no peripherals.",
          desc: "Computer vision and audio processing system for full real-time Google Chrome control. Client-side Machine Learning models using TensorFlow.js and P5.js — high performance, low latency, runs entirely in the browser.",
          highlight: "Zero physical peripherals",
        },
        {
          title: "FazPorMim — Fullstack Platform",
          short: "Service marketplace with auth and REST APIs.",
          desc: "Fullstack service intermediation platform built from scratch. Authentication, REST APIs, user management and PostgreSQL persistence — React on frontend, Node.js/Express on backend.",
          highlight: "Full stack from scratch",
        },
        {
          title: "BuggyFlow — SaaS Buggy Rental [In dev]",
          short: "Vehicle rental management — Node.js, Express, PostgreSQL.",
          desc: "SaaS platform in development for buggy rental management. Includes authentication, booking management, admin panel and REST APIs with PostgreSQL persistence.",
          highlight: "In development",
        },
        {
          title: "Restaurant Management App",
          short: "Real-time orders and tables — React Native + Node.js.",
          desc: "Fullstack app for order, table and internal operations management. React Native frontend, Node.js backend and MySQL for persistence, with real-time updates.",
          highlight: "Real-time updates",
        },
        {
          title: "Dentist Website — Dr. Alves de Sousa",
          short: "Landing page with Chatbot (Ana) for automatic triage.",
          desc: "Web solution for a dental clinic. Smart chatbot (Ana) for automatic patient triage, booking system and conversion-focused design.",
          highlight: "Triage chatbot",
        },
        {
          title: "CryptoHub — Financial Dashboard",
          short: "Real-time crypto asset analysis with Chart.js.",
          desc: "Real-time crypto analytics dashboard. Modular architecture with financial API integration for complex data visualization built with HTML5, Sass and JavaScript.",
          highlight: "Real-time APIs",
        },
        {
          title: "Barbosa Martins — Corporate Website",
          short: "Institutional digital presence | Lighthouse 95+",
          desc: "High-performance institutional website for a law firm. Smooth animations (60fps), WCAG 2.1 accessibility and consistent 95+ Google Lighthouse score.",
          highlight: "Lighthouse 95+",
        },
      ],
    },

    skills: {
      tag: "./skills",
      title: "My",
      titleAccent: "Toolkit",
      subtitle: "Technologies I use daily to deliver quality products.",
      summary:
        "Hands-on experience in Frontend and Backend development, database management and design tools. Daily use of AI-assisted development (Claude, Cursor) to speed up workflow. Always learning.",
    },

    contact: {
      tag: "./contact",
      title: "Let's",
      titleAccent: "work together?",
      subtitle: "Whether for a project, a partnership or just a chat — I'm available.",
      methodsTitle: "Find me on",
      formTitle: "Send a message",
      methods: [
        { label: "Email", value: "tomasribeiro930@gmail.com", desc: "Reply within 24h" },
        { label: "LinkedIn", value: "tomás-ribeiro-4a0a9b390", desc: "Professional connect" },
        { label: "GitHub", value: "jt-ribeiro", desc: "31 public repositories" },
      ],
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send message",
        subjectPrefix: "Contact from",
      },
      success: {
        title: "On its way!",
        message: "Your email client will open with the message pre-filled. Talk soon!",
        reset: "Send another",
      },
    },

    footer: {
      copy: "Made with 💙 in Viana do Castelo.",
    },
  },
};
