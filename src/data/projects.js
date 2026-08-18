// Dati dei progetti - Portfolio Omar Gentilin

export const projects = [
  {
    id: 1,
    slug: 'm1-combat',
    title: 'M1 Combat',
    subtitle: 'La Scuola dei Combattenti',
    category: 'Sport & Fitness',
    type: 'Sito Web Completo',
    client: 'M1 Combat Favaro Veneto',
    year: '2025',
    status: 'In Sviluppo',
    url: 'https://m1combatv2.onrender.com',
    thumbnail: '/images/projects/m1-combat-thumb.jpg',
    images: [
      '/images/projects/m1-combat-hero.jpg',
      '/images/projects/m1-combat-team.jpg',
      '/images/projects/m1-combat-mobile.jpg'
    ],
    description: 'Sito web per una storica palestra di arti marziali a Favaro Veneto, sotto la guida del Doso Bruno Visentin, Campione del Mondo 1987-1992.',
    challenge: 'Creare un sito che trasmettesse la tradizione e la potenza del Mugendo, mantenendo un design moderno e aggressivo che attirasse nuovi atleti.',
    solution: 'Ho sviluppato un design dark e dinamico con video hero a schermo intero, animazioni fluide e una struttura che mette in risalto i campioni e i risultati della palestra.',
    features: [
      'Video hero immersivo',
      'Sezione Team con profili atleti',
      'Sistema corsi interattivo',
      'Galleria fotografica',
      'Form prenotazione prova',
      'Integrazione WhatsApp',
      'Area riservata atleti',
      'Design responsive'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    color: '#dc2626'
  },
  {
    id: 2,
    slug: 'madly',
    title: 'Madly',
    subtitle: 'Ristorante & Grill',
    category: 'Ristorazione',
    type: 'Sito Web Completo',
    client: 'Madly Ristorante',
    location: 'Quarto d\'Altino (VE)',
    year: '2025',
    status: 'In Sviluppo',
    url: 'https://madly-website.onrender.com',
    thumbnail: '/images/projects/madly-thumb.jpg',
    images: [
      '/images/projects/madly-hero.jpg',
      '/images/projects/madly-menu.jpg',
      '/images/projects/madly-mobile.jpg'
    ],
    description: 'Sito elegante per un ristorante specializzato in carni frollate dry-age e cocktail d\'autore a Quarto d\'Altino.',
    challenge: 'Comunicare l\'unicità del ristorante: la cella di frollatura dry-age, l\'attenzione alla qualità della carne e l\'atmosfera giovane e innovativa.',
    solution: 'Design raffinato con video background, palette scura che esalta le immagini del cibo, e sezioni dedicate alle specialità e al processo di frollatura.',
    features: [
      'Video hero cinematografico',
      'Menu digitale interattivo',
      'Sezione dry-age dedicata',
      'Galleria food photography',
      'Orari dinamici',
      'Click-to-call',
      'Link Instagram',
      'Design responsive'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    color: '#b45309'
  },
  {
    id: 3,
    slug: 'boomerang-pub',
    title: 'Boomerang Pub',
    subtitle: 'Food & Drinks Since 2016',
    category: 'Hospitality',
    type: 'Sito Web Completo',
    client: 'Boomerang Pub',
    location: 'Quarto d\'Altino (VE)',
    year: '2024',
    status: 'In Sviluppo',
    url: 'https://boomerang-p2fb.onrender.com',
    thumbnail: '/images/projects/boomerang-thumb.jpg',
    images: [
      '/images/projects/boomerang-hero.jpg',
      '/images/projects/boomerang-menu.jpg',
      '/images/projects/boomerang-mobile.jpg'
    ],
    description: 'Sito web completo per un pub locale con focus su burger gourmet, cocktail artigianali e eventi serali.',
    challenge: 'Presentare un menu molto ricco (food + drinks) in modo chiaro e appetitoso, comunicando anche l\'atmosfera del locale e gli eventi.',
    solution: 'Layout pulito con navigazione tab per il menu, hero accattivante, sezione eventi dinamica e forte integrazione con WhatsApp per prenotazioni.',
    features: [
      'Menu completo Food & Drinks',
      'Sistema tab navigazione',
      'Sezione eventi',
      'Galleria atmosfera',
      'Prenotazione WhatsApp',
      'Mappa integrata',
      'Design responsive'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    color: '#eab308'
  },
  {
    id: 4,
    slug: 'homenet-inventory',
    title: 'HomeNet-Inventory',
    subtitle: 'Network Monitoring & Inventory',
    category: 'Infrastructure',
    type: 'Progetto Personale',
    year: '2025',
    status: 'Attivo',
    thumbnail: null,
    description: 'Piattaforma locale per il monitoraggio della rete domestica, sviluppata end-to-end in Python. Scanner nmap, risk scoring, dashboard Flask, alert Telegram, bot Wake-on-LAN.',
    challenge: 'Avere visibilità completa su tutti i dispositivi della rete domestica, rilevare cambiamenti e anomalie in real-time senza dipendenze cloud.',
    solution: 'Sistema modulare con scanner nmap, change detection per stati (NEW/MISSING/PORTS_CHANGED), risk scoring, dashboard Flask e bot Telegram per il controllo remoto.',
    features: [
      'Host discovery e port scan con nmap',
      'OS fingerprinting e classificazione dispositivi',
      'Change detection con risk scoring',
      'Alert multi-severità via Telegram',
      'Dashboard Flask (stato rete, storico, watchlist)',
      'Bot Telegram con Wake-on-LAN e integrazione RustDesk',
      'Database SQLite con storico completo',
      'Orchestrazione launchd su macOS'
    ],
    technologies: ['Python', 'nmap', 'Flask', 'SQLite', 'Telegram Bot API', 'launchd'],
    color: '#0ea5e9'
  },
  {
    id: 5,
    slug: 'omar-work-control',
    title: 'Omar Work Control',
    subtitle: 'Web App Full-Stack',
    category: 'Full-Stack',
    type: 'Progetto Personale',
    year: '2025',
    status: 'Attivo',
    thumbnail: null,
    description: 'Web application full-stack per monitorare il proprio profilo contrattuale, retributivo e previdenziale. Backend FastAPI, frontend Next.js, stack Docker a 7 servizi.',
    challenge: 'Avere un cruscotto unico per cedolini, contributi previdenziali, ferie e permessi, con alert automatici su scadenze.',
    solution: 'Architettura full-stack con FastAPI, schema a 19 tabelle, parser PDF dei cedolini, task asincroni Celery, dashboard KPI in Next.js, tutto containerizzato.',
    features: [
      'Backend FastAPI con JWT auth e schema 19 tabelle',
      'Parser PDF cedolini automatico',
      'Task asincroni Celery + Celery Beat su Redis',
      'Dashboard KPI con tema light/dark',
      'Wizard onboarding',
      'Stack Docker Compose a 7 servizi',
      'PostgreSQL 16 + Redis 7 + MinIO (S3)',
      'nginx reverse proxy + deploy Oracle Cloud'
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'Tailwind CSS'],
    color: '#8b5cf6'
  }
]

// Helper per trovare un progetto by slug
export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug)
}

// Helper per ottenere progetti correlati
export const getRelatedProjects = (currentSlug, limit = 2) => {
  return projects
    .filter(p => p.slug !== currentSlug)
    .slice(0, limit)
}
