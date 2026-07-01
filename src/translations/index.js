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
      badge: "Disponível para novos projetos",
      greeting: "Olá, sou o",
      name: "Tomás Ribeiro",
      roles: ["Fullstack Developer", "React & Next.js", "UI/UX Enthusiast", "Problem Solver"],
      description:
        "Transformo ideias em experiências digitais de alta performance. Especializado em React, Next.js e Node.js — apaixonado por design e código limpo.",
      btnProjects: "Ver Projetos",
      btnContact: "Falar comigo",
      stats: [
        { num: "7+", label: "Projetos Entregues" },
        { num: "3+", label: "Anos de Experiência" },
        { num: "95+", label: "Lighthouse Score" },
      ],
    },

    about: {
      tag: "whoami",
      title: "Sobre",
      titleAccent: "Mim",
      subtitle: "Desenvolvedor apaixonado por criar experiências digitais que fazem a diferença.",
      bioName: "Tomás Ribeiro",
      bioAge: "25 anos",
      bioParagraph1:
        "Gosto de explorar o desconhecido. Se é novo, difícil ou parece impossível — conta comigo. Trabalho bem em equipa mas também sei ser auto-suficiente. Estou sempre pronto para aprender, errar, corrigir e crescer, tanto pessoalmente como profissionalmente.",
      bioParagraph2:
        "A minha especialidade é o fullstack — do design da interface à arquitetura da API. Tenho especial interesse em IA aplicada ao produto e em criar interfaces que as pessoas adoram usar.",
      contactCta: "Vamos construir algo incrível juntos? →",
      highlights: [
        { emoji: "🎓", title: "Formação", value: "Lic. Computação Gráfica e Multimédia", sub: "ESTG Viana do Castelo" },
        { emoji: "💼", title: "Foco Atual", value: "Fullstack Development", sub: "React · Next.js · Node.js" },
        { emoji: "📍", title: "Localização", value: "Viana do Castelo", sub: "Portugal 🇵🇹" },
        { emoji: "🌐", title: "Idiomas", value: "Português (Nativo)", sub: "Inglês (Avançado)" },
        { emoji: "🚀", title: "Paixão", value: "IA & Inovação", sub: "TensorFlow · Automação" },
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
          title: "Extensão Chrome – Acessibilidade AI",
          short: "Navegação hands-free via comandos de voz e gestos.",
          desc: "Extensão experimental que substitui periféricos tradicionais por comandos de voz e gestos (TensorFlow.js). Solução inovadora testada e validada por um grupo de 50+ utilizadores.",
          highlight: "50+ utilizadores",
        },
        {
          title: "Reservas QR – Gestão Inteligente",
          short: "Sistema Full-stack para gestão digital de espaços.",
          desc: "Plataforma completa para digitalização de restaurantes e eventos. Permite check-in instantâneo via QR Code, gestão de lotação em tempo real e visualização de ementas.",
          highlight: "Check-in em tempo real",
        },
        {
          title: "Gestor de Mesas – Restaurante V2",
          short: "Gestão de pedidos e mesas em tempo real.",
          desc: "Plataforma interna de gestão de pedidos. Reduziu o tempo de alocação de mesas de 3min para 45s. Sincronização em tempo real entre sala e cozinha.",
          highlight: "−75% tempo de processo",
        },
        {
          title: "Website Dentista – Dr. Alves de Sousa",
          short: "Landing Page Premium com Chatbot para triagem automática.",
          desc: "Solução web completa para clínica de prestígio. Chatbot inteligente (Ana) para triagem automática de pacientes, sistema de marcações e design focado em conversão.",
          highlight: "Chatbot de triagem",
        },
        {
          title: "CryptoHub – Dashboard Financeiro",
          short: "Análise de Criptoativos em tempo real com Chart.js.",
          desc: "Dashboard analítico de criptoativos em tempo real. Arquitetura modular com integração de APIs financeiras para visualização de dados complexos.",
          highlight: "APIs em tempo real",
        },
        {
          title: "Sistema POS Industrial (Goldylocks)",
          short: "Otimização de checkout com redução de 22% no tempo.",
          desc: "Otimização de checkout industrial com impacto mensurável. Testes automatizados (Jest) que reduziram a taxa de bugs em 80% pós-deploy.",
          highlight: "−22% tempo · −80% bugs",
        },
        {
          title: "Website Corporativo – Barbosa Martins",
          short: "Experiência Digital Premium | Lighthouse Score 95+",
          desc: "Presença digital institucional de alta performance. Foco em UX/UI com animações fluidas (60fps), acessibilidade WCAG 2.1 e score 95+ no Google Lighthouse.",
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
        "Experiência comprovada em desenvolvimento Frontend e Backend, gestão de bases de dados e ferramentas de design. Sempre em aprendizagem contínua — se existe uma nova tecnologia que resolve um problema real, vou dominá-la.",
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
        { label: "LinkedIn", value: "tomas-ribeiro-dev", desc: "Connect profissional" },
        { label: "GitHub", value: "jt-ribeiro", desc: "Vê o meu código" },
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
      copy: "Feito com 💙 em Portugal.",
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
      badge: "Available for new projects",
      greeting: "Hi, I'm",
      name: "Tomás Ribeiro",
      roles: ["Fullstack Developer", "React & Next.js", "UI/UX Enthusiast", "Problem Solver"],
      description:
        "I turn ideas into high-performance digital experiences. Specialized in React, Next.js and Node.js — passionate about design and clean code.",
      btnProjects: "View Projects",
      btnContact: "Let's talk",
      stats: [
        { num: "7+", label: "Projects Delivered" },
        { num: "3+", label: "Years of Experience" },
        { num: "95+", label: "Lighthouse Score" },
      ],
    },

    about: {
      tag: "whoami",
      title: "About",
      titleAccent: "Me",
      subtitle: "A developer passionate about creating digital experiences that make a difference.",
      bioName: "Tomás Ribeiro",
      bioAge: "25 y/o",
      bioParagraph1:
        "I love exploring the unknown. If it's new, difficult or seems impossible — count me in. I work great in a team but I'm equally self-sufficient. I'm always ready to learn, fail, fix and grow — both personally and professionally.",
      bioParagraph2:
        "My specialty is fullstack — from UI design to API architecture. I have a particular interest in AI applied to products and in building interfaces that people love to use.",
      contactCta: "Let's build something amazing together? →",
      highlights: [
        { emoji: "🎓", title: "Education", value: "B.Sc. Computer Graphics & Multimedia", sub: "ESTG Viana do Castelo" },
        { emoji: "💼", title: "Current Focus", value: "Fullstack Development", sub: "React · Next.js · Node.js" },
        { emoji: "📍", title: "Location", value: "Viana do Castelo", sub: "Portugal 🇵🇹" },
        { emoji: "🌐", title: "Languages", value: "Portuguese (Native)", sub: "English (Advanced)" },
        { emoji: "🚀", title: "Passion", value: "AI & Innovation", sub: "TensorFlow · Automation" },
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
          title: "Chrome Extension – AI Accessibility",
          short: "Hands-free browsing via voice commands and gestures.",
          desc: "Experimental extension replacing traditional peripherals with voice commands and gestures (TensorFlow.js). Innovative solution tested and validated by a group of 50+ users.",
          highlight: "50+ users",
        },
        {
          title: "QR Reservations – Smart Management",
          short: "Full-stack system for digital space management.",
          desc: "Complete platform for digitizing restaurants and events. Enables instant check-in via QR Code, real-time capacity management and menu display.",
          highlight: "Real-time check-in",
        },
        {
          title: "Table Manager – Restaurant V2",
          short: "Real-time order and table management.",
          desc: "Internal order management platform. Reduced table allocation time from 3min to 45s. Real-time synchronization between floor and kitchen.",
          highlight: "−75% process time",
        },
        {
          title: "Dentist Website – Dr. Alves de Sousa",
          short: "Premium Landing Page with Chatbot for automatic triage.",
          desc: "Complete web solution for a prestigious clinic. Smart chatbot (Ana) for automatic patient triage, booking system and conversion-focused design.",
          highlight: "Triage chatbot",
        },
        {
          title: "CryptoHub – Financial Dashboard",
          short: "Real-time crypto asset analysis with Chart.js.",
          desc: "Real-time crypto analytics dashboard. Modular architecture with financial API integration for complex data visualization.",
          highlight: "Real-time APIs",
        },
        {
          title: "Industrial POS System (Goldylocks)",
          short: "Checkout optimization with 22% time reduction.",
          desc: "Industrial checkout optimization with measurable impact. Automated tests (Jest) that reduced the bug rate by 80% post-deploy.",
          highlight: "−22% time · −80% bugs",
        },
        {
          title: "Corporate Website – Barbosa Martins",
          short: "Premium Digital Experience | Lighthouse Score 95+",
          desc: "High-performance institutional digital presence. Focus on UX/UI with smooth animations (60fps), WCAG 2.1 accessibility and consistent 95+ Google Lighthouse score.",
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
        "Proven experience in Frontend and Backend development, database management and design tools. Always learning — if there's a new technology that solves a real problem, I'll master it.",
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
        { label: "LinkedIn", value: "tomas-ribeiro-dev", desc: "Professional connect" },
        { label: "GitHub", value: "jt-ribeiro", desc: "Check my code" },
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
      copy: "Made with 💙 in Portugal.",
    },
  },
};
