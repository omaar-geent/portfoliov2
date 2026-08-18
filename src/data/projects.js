// Dati dei progetti - Portfolio Omar Gentilin

export const projects = [
  {
    id: 1,
    slug: 'homelab',
    internalLink: '/homelab',
    title: 'Homelab multi-nodo',
    subtitle: 'Infrastruttura self-hosted attiva 24/7',
    category: 'Infrastructure',
    type: 'Progetto Personale',
    year: '2025 — oggi',
    status: 'Attivo',
    thumbnail: null,
    featured: true,
    description: 'Tre macchine fisiche, un hypervisor Proxmox, storage ZFS ridondato e una VPN mesh che regge l’accesso remoto sotto CGNAT. Progettata, gestita e documentata da zero.',
    challenge: 'Costruire un’infrastruttura su cui poter sbagliare: imparare virtualizzazione, storage e networking su sistemi veri, senza il rischio di rompere qualcosa in produzione.',
    solution: 'Proxmox VE come hypervisor con container LXC e VM, TrueNAS SCALE con pool ZFS RAIDZ1 per lo storage, Tailscale con subnet router per l’accesso remoto, e una knowledge base tecnica che tiene tutto tracciato.',
    features: [
      'Proxmox VE 9.1: 4 container LXC unprivileged e 3 VM',
      'TrueNAS SCALE con pool ZFS RAIDZ1 (~3 TB), SMB e NFS',
      'Tailscale subnet router: accesso completo alla LAN sotto CGNAT',
      'Pi-hole come DNS di rete con record interni',
      'Vaultwarden self-hosted con 2FA e backup notturno automatico',
      'Uptime Kuma con 11 monitor su nodi e servizi critici',
      'Ollama + Open WebUI: LLM in locale con RAG, esposti in HTTPS',
      'Windows 11 con UEFI, TPM 2.0 e GPU passthrough',
      'Documentazione tecnica completa e versionata sul NAS'
    ],
    technologies: ['Proxmox VE', 'LXC', 'KVM/QEMU', 'TrueNAS SCALE', 'ZFS', 'Tailscale', 'WireGuard', 'Pi-hole', 'Docker', 'Vaultwarden', 'Uptime Kuma', 'Ollama'],
    color: '#22c55e'
  },
  {
    id: 2,
    slug: 'as400-menu-redesign',
    title: 'Ridisegno menu AS/400',
    subtitle: 'Separazione accessi committente / appaltatore',
    category: 'Enterprise IT',
    type: 'Progetto Aziendale',
    client: 'Gruppo Vega',
    year: '2026',
    status: 'In corso',
    thumbnail: null,
    featured: true,
    description: 'Analisi e ridisegno delle alberature menu di un ERP logistico AS/400 (IBM i) per separare le funzioni in capo all’azienda da quelle in capo ai fornitori in appalto. Ruolo: analista tecnico.',
    challenge: 'Le alberature menu erano cresciute per stratificazione, senza documentazione. Bisognava capire cosa vedeva realmente ogni profilo e ridisegnare gli accessi separando i ruoli, senza rompere l’operatività di chi lavora sui terminali ogni giorno.',
    solution: 'Reverse engineering degli archivi di sistema, poi automazione completa dell’estrazione con una query ricorsiva CTE su DB2 for i che ricostruisce l’intero albero con profondità, percorso e gerarchia. Da lì, script Python che generano la documentazione di revisione, e uno standard di nomenclatura estensibile approvato dall’azienda.',
    features: [
      'Reverse engineering delle alberature da archivi non documentati',
      'Scoperta che codici menu e codici azione condividono lo stesso spazio di codifica su archivi distinti',
      'Query ricorsiva CTE su DB2 for i: estrazione completa dell’albero, al posto di giorni di mappatura manuale',
      'Zero-padding dei campi decimali per un ordinamento corretto',
      'Guardia anti-ciclo con chiavi delimitate, per evitare falsi match su sottostringa',
      'Script Python che trasformano gli export CSV in documenti Word ed Excel di revisione',
      'Pipeline di export controllata: separatore, encoding UTF-8, validazione degli accenti',
      'Standard di nomenclatura approvato, estensibile a ~1.400 codici per categoria',
      'Metodo di costruzione bottom-up per evitare riferimenti orfani',
      'Schede di verifica Excel con dropdown e righe collassabili, compilabili da referenti non tecnici'
    ],
    technologies: ['IBM AS/400 (IBM i)', 'DB2 for i', 'SQL ricorsivo (CTE)', 'IBM ACS', 'Python', 'pandas', 'python-docx', 'openpyxl', 'Terminale 5250'],
    color: '#6366f1'
  },
  {
    id: 3,
    slug: 'csb-erp-support',
    title: 'Presidio ERP CSB-System',
    subtitle: 'Integrazioni, tracciabilità e infrastruttura di stabilimento',
    category: 'Enterprise IT',
    type: 'Progetto Aziendale',
    client: 'Gruppo Vega — stabilimento alimentare',
    year: '2026',
    status: 'In corso',
    thumbnail: null,
    description: 'Presidio tecnico on-site su ERP CSB-System in uno stabilimento alimentare: integrazioni EDI, tracciabilità di filiera, comunicazione seriale con i terminali e supporto agli utenti di produzione.',
    challenge: 'Un ambiente dove un job che si blocca di notte significa fatture non emesse la mattina, e dove un dato di tracciabilità sbagliato arriva fino all’etichetta sullo scaffale del punto vendita.',
    solution: 'Analisi end-to-end dei flussi, dal convertitore EDI fino all’etichetta finale, con root cause analysis documentata, gestione dei ticket presso il vendor e correzioni sia tattiche sia strutturali.',
    features: [
      'Integrazione EDI verso cliente: analisi del convertitore a tracciato fisso e ridisegno del layout per portare il lotto sulla riga articolo',
      'Ciclo completo sviluppo → test → piano di travaso in produzione',
      'Risoluzione di un blocco ricorrente del job di fatturazione notturna in esecuzione non presidiata',
      'Root cause analysis su una non conformità di tracciabilità, ricostruendo la catena ERP → middleware FTP → AS/400 → ventilazione',
      'Migrazione del processo di sezionamento: moduli di stampa etichette e struttura codici GS1-128',
      'Documentazione tecnica e manuale utente per gli operatori di stabilimento',
      'Comunicazione seriale scanner ↔ ERP via device server Moxa NPort e COM virtuale',
      'Troubleshooting a livello di pacchetto con PuTTY e Wireshark',
      'Automazione dell’invio documenti in sostituzione di job VBScript legacy',
      'Bonifica di job da lettere di unità mappate a percorsi UNC per l’esecuzione non presidiata'
    ],
    technologies: ['CSB-System', 'EDI (tracciati fixed-width)', 'FTP', 'AS/400', 'GS1-128', 'Moxa NPort', 'RS232', 'Wireshark', 'PuTTY', 'Windows Server', 'PowerShell'],
    color: '#f59e0b'
  },
  {
    id: 4,
    slug: 'homenet-inventory',
    title: 'HomeNet-Inventory',
    subtitle: 'Network monitoring e inventario dispositivi',
    category: 'Infrastructure',
    type: 'Progetto Personale',
    year: '2025',
    status: 'Attivo',
    thumbnail: null,
    description: 'Sistema di monitoraggio della rete sviluppato end-to-end in Python: scansione nmap, fingerprinting dei dispositivi, change detection con risk scoring, dashboard web e bot Telegram.',
    challenge: 'Sapere in ogni momento cosa è connesso alla rete e accorgersi quando qualcosa cambia: un dispositivo nuovo, un MAC diverso, una porta che prima non c’era. Tutto in locale, senza dipendenze cloud.',
    solution: 'Scanner modulare che confronta ogni scansione con la precedente e assegna uno stato a ciascun host, un motore di alert su tre livelli di severità, storico completo su SQLite e due interfacce: dashboard Flask e bot Telegram.',
    features: [
      'Host discovery e port scan con nmap, con OS fingerprinting',
      'Classificazione dei dispositivi su segnali multipli: OUI del MAC, hostname, porte aperte, regole locali',
      'Punteggio di confidenza sulla classificazione, con i limiti dichiarati (MAC randomizzati, host senza porte aperte)',
      'Change detection con stati: NEW, REAPPEARED, PORTS_CHANGED, MAC_CHANGED, MISSING',
      'Risk scoring e rilevazione di porte anomale rispetto a quelle attese per dispositivo',
      'Motore di alert su tre livelli con notifiche Telegram arricchite',
      'Storico su SQLite: scansioni, host, alert, speed test, latenza, outage, eventi di sicurezza',
      'Dashboard Flask: stato rete, storico, dispositivi sconosciuti, watchlist forense, topologia',
      'Bot Telegram con comandi in linguaggio naturale, Wake-on-LAN e controllo remoto',
      'Orchestrazione dei servizi con launchd, configurazione centralizzata e segreti via variabili d’ambiente'
    ],
    technologies: ['Python', 'nmap', 'SQLite', 'Flask', 'Telegram Bot API', 'launchd', 'Wake-on-LAN'],
    color: '#0ea5e9'
  },
  {
    id: 5,
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
    description: 'Sito web per una storica palestra di arti marziali a Favaro Veneto, sotto la guida del Doso Bruno Visentin, Campione del Mondo 1987-1992.',
    challenge: 'Creare un sito che trasmettesse la tradizione e la potenza del Mugendo, mantenendo un design moderno e aggressivo che attirasse nuovi atleti.',
    solution: 'Design dark e dinamico con video hero a schermo intero, animazioni fluide e una struttura che mette in risalto i campioni e i risultati della palestra.',
    features: [
      'Video hero immersivo',
      'Sezione Team con profili atleti',
      'Sistema corsi interattivo',
      'Galleria fotografica',
      'Form prenotazione prova',
      'Integrazione WhatsApp',
      'Design responsive'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    color: '#dc2626'
  },
  {
    id: 6,
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
      'Design responsive'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    color: '#b45309'
  },
  {
    id: 7,
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
