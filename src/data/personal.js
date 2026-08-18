// Skills e informazioni personali - Omar Gentilin

// Informazioni di contatto
export const contactInfo = {
  name: 'Omar Gentilin',
  email: 'omarmarco04@gmail.com',
  phone: '+39 389 019 3669',
  whatsapp: '393890193669',
  location: 'Mogliano Veneto (TV), Italia',
  github: 'https://github.com/omaar-geent',
  linkedin: 'https://www.linkedin.com/in/omar-gentilin-36472132b/'
}

// Bio
export const bio = {
  short: 'IT System Administrator & Developer',
  medium: 'Amministro infrastrutture ibride e le automatizzo con il codice.',
  full: `Lavoro come IT System Administrator & Support Specialist in Gruppo Vega, dove mi occupo di Active Directory e Microsoft 365, reti e VPN, sicurezza e permessi su ERP AS/400 in un contesto logistico.

Fuori dall'ufficio progetto e gestisco un homelab multi-nodo attivo H24 — Proxmox, TrueNAS, ZFS, Tailscale, Docker — e sviluppo applicazioni in Python e TypeScript per risolvere problemi concreti.

Mi piace il punto in cui il sistema e il codice si incontrano: automatizzare quello che oggi si fa a mano, e documentarlo perché resti.`
}

// Skills divise per categoria
export const skills = {
  frontend: {
    title: 'Infrastructure & Systems',
    description: 'Sistemi, virtualizzazione e storage',
    items: [
      { name: 'Windows Server / Active Directory', level: 85, icon: 'server' },
      { name: 'Microsoft 365 / Entra ID', level: 90, icon: 'cloud' },
      { name: 'Proxmox VE / LXC / KVM', level: 80, icon: 'proxmox' },
      { name: 'TrueNAS SCALE / ZFS', level: 80, icon: 'storage' },
      { name: 'Linux (Debian/Ubuntu/Kali)', level: 78, icon: 'linux' }
    ]
  },
  backend: {
    title: 'Networking & Security',
    description: 'Reti, VPN, firewall e cybersecurity',
    items: [
      { name: 'TCP/IP · DNS · DHCP · VLAN', level: 85, icon: 'network' },
      { name: 'VPN (WatchGuard / Tailscale)', level: 82, icon: 'vpn' },
      { name: 'Firewall & log analysis', level: 78, icon: 'firewall' },
      { name: 'Incident Response (BEC/phishing)', level: 80, icon: 'security' },
      { name: 'Pi-hole · nmap · Vaultwarden', level: 78, icon: 'tools' }
    ]
  },
  enterprise: {
    title: 'Development',
    description: 'Backend, frontend e automazione',
    items: [
      { name: 'Python (FastAPI · Celery · SQLAlchemy)', level: 80, icon: 'python' },
      { name: 'TypeScript / Next.js / React', level: 75, icon: 'react' },
      { name: 'SQL · PostgreSQL · Redis', level: 80, icon: 'database' },
      { name: 'SAP ABAP', level: 75, icon: 'sap' },
      { name: 'Bash · VBA · PHP', level: 70, icon: 'code' }
    ]
  },
  tools: {
    title: 'DevOps & Containers',
    description: 'Container, CI/CD e automazione',
    items: [
      { name: 'Docker / Docker Compose', level: 82, icon: 'docker' },
      { name: 'Git / GitHub / CI-CD Netlify', level: 85, icon: 'git' },
      { name: 'nginx · Redis · MinIO', level: 75, icon: 'server' },
      { name: 'IBM AS/400 (IBM i)', level: 72, icon: 'ibm' },
      { name: 'Uptime Kuma · launchd / systemd', level: 78, icon: 'monitor' }
    ]
  }
}

// Timeline formazione/esperienza
export const timeline = [
  {
    year: '2026 – Oggi',
    title: 'VEGA Soc. Coop. (Gruppo Vega)',
    subtitle: 'IT System Administrator & Support Specialist',
    description: 'Service Desk, Area Sistemi Informativi. AD/M365 ibrido, WatchGuard VPN, cybersecurity first response (BEC/phishing), IBM AS/400 RBAC, automazione Python/VBA, asset management.',
    type: 'work',
    highlight: true
  },
  {
    year: '2025 – Oggi',
    title: 'Università Ca\' Foscari',
    subtitle: 'Laurea in Informatica',
    description: 'Approfondimento teorico e pratico in algoritmi, programmazione e sistemi.',
    type: 'education'
  },
  {
    year: 'Giu 2025 – Dic 2025',
    title: 'Cover System S.r.l.',
    subtitle: 'SAP ABAP Developer — Stage (progetti Luxottica)',
    description: '6 mesi di sviluppo ABAP su progetti Luxottica: report ALV, function module, module pool. Ciclo completo DEV → TEST → QUALITY → PROD, documentazione SOX.',
    type: 'work'
  },
  {
    year: '2024 – 2025',
    title: 'Web Developer Freelance',
    subtitle: 'Siti per business locali',
    description: 'Siti web per ristoranti, pub e attività sportive nel Veneto. HTML, CSS, JavaScript, Node.js, PHP.',
    type: 'work'
  },
  {
    year: '2019 – 2024',
    title: 'ITTS Vito Volterra',
    subtitle: 'Diploma in Informatica e Telecomunicazioni',
    description: 'San Donà di Piave (VE). Fondamenti di programmazione, database, reti e sistemi.',
    type: 'education'
  }
]

// Esperienza Gruppo Vega (ruolo attuale)
export const vegaExperience = {
  company: 'VEGA Soc. Coop. (Gruppo Vega)',
  period: '2026 – Presente',
  role: 'IT System Administrator & Support Specialist',
  location: 'Mogliano Veneto (TV), Italia',
  description: `Ruolo ibrido nel Service Desk dell'Area Sistemi Informativi in un contesto Logistica e GDO. Gestione dell'infrastruttura IT end-to-end: da Active Directory e Microsoft 365 alla sicurezza perimetrale, dall'ERP IBM AS/400 all'hardware di magazzino.`,
  highlights: [
    'Gestione ciclo di vita utenti (onboarding/offboarding) in ambiente ibrido AD / Microsoft 365',
    'Risoluzione anomalie di sincronizzazione AD ↔ cloud e gestione alias .onmicrosoft.com',
    'Troubleshooting VPN WatchGuard: conflitti DNS (Error 12007) e blocchi Geo-IP',
    'Cybersecurity first response: identificazione e contenimento di BEC e SharePoint phishing',
    'Gestione sicurezza e permessi IBM AS/400 in logica RBAC (Tabella 0017, menu utente)',
    'Debugging macro VBA in Excel e refactoring script Python per calcoli logistici',
    'RMA hardware, stampanti termiche industriali (Printronix, TSC), monitoraggio PDU Vertiv'
  ],
  technologies: [
    'Active Directory',
    'Microsoft 365',
    'Exchange Admin Center',
    'Entra ID (Azure AD)',
    'WatchGuard Mobile VPN',
    'IBM AS/400 (IBM i)',
    'Python',
    'VBA',
    'Windows Server',
    'nmap'
  ]
}

// Esperienza Cover System / Luxottica dettagliata
export const luxotticaExperience = {
  company: 'Cover System S.r.l. — progetti Luxottica',
  logo: '/images/luxottica-logo.png',
  period: 'Giugno 2025 - Dicembre 2025',
  duration: '6 mesi',
  role: 'SAP ABAP Developer (Tirocinio Curriculare)',
  location: 'Agordo (BL), Italia',
  description: `Durante il tirocinio ho lavorato nel team IT Wholesale and Operations Systems,
sviluppando soluzioni ABAP custom per ottimizzare i processi aziendali. Ho gestito l'intero
ciclo di sviluppo: dall'analisi dei requisiti alla documentazione SOX, dal coding al testing,
fino al deploy in produzione attraverso il sistema di trasporti SAP (DEV → TEST → QUALITY → PROD).`,

  highlights: [
    'Sviluppo tool ABAP da zero con architettura modulare',
    'Enhancement di programmi esistenti con nuove funzionalità',
    'Gestione documentazione SOX per compliance aziendale',
    'Testing e validazione in ambiente multi-sistema',
    'Collaborazione con team funzionale e utenti finali'
  ],

  technologies: [
    'SAP ABAP',
    'ALV Grid/List',
    'Selection Screen',
    'Module Pool',
    'Function Modules',
    'Database Tables',
    'SMW0 Templates',
    'Transport System'
  ],

  projects: [
    {
      id: 'spaku-tool',
      name: 'ZSD_SET_SPAKU_TOOL',
      type: 'Tool Sviluppato da Zero',
      ticket: 'C598181L',
      description: 'Tool per l\'allineamento massivo delle tabelle organizzative TVTA e TVKOS. Identifica anomalie (mismatch e record orfani) e permette l\'aggiornamento controllato con meccanismo di rollback.',
      features: [
        'Selection screen dinamica con radio button per modalità Check/Update',
        'Identificazione mismatch tra tabelle con Inner Join',
        'Ricerca record orfani con logica SQL NOT EXISTS',
        'Output ALV Grid con status e messaggi dettagliati',
        'Popup di conferma pre-update con conteggio record',
        'Meccanismo di rollback automatico in caso di errore',
        'Validazione input e UI dinamica'
      ],
      objects: [
        'Report: ZSD_SET_SPAKU_TOOL',
        'Include: ZSD_SET_SPAKU_TOOL_TOP',
        'Include: ZSD_SET_SPAKU_TOOL_SEL',
        'Include: ZSD_SET_SPAKU_TOOL_FORM',
        'Transaction: ZSD_SET_SPAKU'
      ],
      riskLevel: 'Normal',
      codeSnippet: `* Check Anomalies - Mismatch Detection
SELECT a~vkorg a~vtweg a~spart a~spaku AS spaku_tvta
       b~spaku AS spaku_tvkos
  FROM tvta AS a
  INNER JOIN tvkos AS b
    ON a~vkorg = b~vkorg
   AND a~vtweg = b~vtweg
   AND a~spart = b~spart
  INTO TABLE @gt_mismatch
  WHERE a~spaku <> b~spaku.

* Rollback Mechanism
IF sy-subrc <> 0.
  ROLLBACK WORK.
  MESSAGE 'Errore durante l\\'aggiornamento. Rollback eseguito.' TYPE 'E'.
ELSE.
  COMMIT WORK.
ENDIF.`
    },
    {
      id: 'zztsdo043',
      name: 'ZZTSDO043 Enhancement',
      type: 'Enhancement Programma Esistente',
      ticket: 'C529482L',
      description: 'Estensione del caricatore Excel per la tabella ZTSDO043 (gestione blocchi SKU). Aggiunti nuovi campi e migliorata l\'esperienza utente con contatori e template scaricabile.',
      features: [
        'Aggiunta colonne Plant (WERKS) e Order Type (AUART)',
        'Aggiunta colonna Destination Country (LAND1)',
        'Template Excel scaricabile da SMW0',
        'Contatori finali: Inseriti / Già esistenti / Errori',
        'Validazione campi con messaggi specifici',
        'File input opzionale per download template vuoto'
      ],
      objects: [
        'Report: ZZTSDO043',
        'Template SMW0: MI/ZZTSDO043',
        'Table: ZTSDO043'
      ],
      riskLevel: 'Minor',
      codeSnippet: `* Contatori per feedback utente
DATA: gv_ins_ok  TYPE i,  "inserimenti ok
      gv_exist   TYPE i,  "già presenti
      gv_err     TYPE i.  "errori

* Download Template da SMW0
CALL FUNCTION 'DOWNLOAD_WEB_OBJECT'
  EXPORTING
    key         = ls_key
    destination = pa_file
  EXCEPTIONS
    OTHERS      = 1.

* Messaggio finale con riepilogo
CONCATENATE 'Inseriti:' gv_ins_ok
            '| Esistenti:' gv_exist
            '| Errori:' gv_err
  INTO gv_msg_ins SEPARATED BY space.`
    },
    {
      id: 'image-loader',
      name: 'SAPMZ_IMAGE_LOADER',
      type: 'Enhancement Programma Esistente',
      ticket: 'Internal',
      description: 'Tool per la validazione e il caricamento di immagini prodotto. Verifica la coerenza tra materiale, variante colore e immagine prima dell\'upload.',
      features: [
        'Validazione materiale in tabella MARA',
        'Recupero descrizione da MAKT',
        'Verifica combinazione Materiale+Colore in ZTMMASKU',
        'Upload tramite Function Module custom',
        'Logging operazioni in ZLABEL_IMAGE_LOG',
        'Flag FORCE per bypass controlli'
      ],
      objects: [
        'Report: SAPMZ_IMAGE_LOADER',
        'Table: ZLABEL_IMAGE_LOG',
        'Function Module: Z_UPLOAD_IMAGE'
      ],
      riskLevel: 'Minor',
      codeSnippet: `* Validazione Materiale
SELECT SINGLE matnr INTO lv_matnr
  FROM mara
  WHERE matnr = pa_matnr.

IF sy-subrc <> 0.
  MESSAGE TEXT-001 TYPE 'E'. "Materiale non trovato
ENDIF.

* Verifica combinazione Materiale + Colore
SELECT SINGLE * INTO ls_sku
  FROM ztmmasku
  WHERE matnr = pa_matnr
    AND j_3asize = pa_color.`
    }
  ]
}
