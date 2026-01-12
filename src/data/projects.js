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
    color: '#dc2626' // Rosso combattimento
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
    color: '#b45309' // Ambra/carne
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
    color: '#eab308' // Giallo/birra
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
