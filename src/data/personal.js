// Skills e informazioni personali - Omar Gentilin

// Informazioni di contatto
export const contactInfo = {
  name: 'Omar Gentilin',
  email: 'omarmarco04@gmail.com',
  phone: '+39 389 019 3669',
  whatsapp: '393890193669',
  location: 'Quarto d\'Altino (VE), Italia',
  github: 'https://github.com/omaar-geent',
  linkedin: 'https://www.linkedin.com/in/omar-gentilin-36472132b/'
}

// Bio
export const bio = {
  short: 'Full Stack Developer & Web Designer',
  medium: 'Creo esperienze digitali per business locali e soluzioni enterprise.',
  full: `Ho 21 anni e una passione che è diventata professione: trasformare idee in codice. 
Diplomato all'ITIS Volterra di San Donà di Piave in Informatica, attualmente studio 
Informatica all'Università Ca' Foscari di Venezia.

Da un lato creo siti web per attività locali - ristoranti, pub, palestre - con un approccio 
che unisce design moderno e funzionalità concrete. Dall'altro, lavoro come sviluppatore 
SAP ABAP, costruendo soluzioni enterprise per aziende strutturate.

Questa doppia anima mi permette di parlare sia il linguaggio delle piccole realtà che 
vogliono farsi notare online, sia quello delle grandi aziende che hanno bisogno di 
sistemi solidi e performanti.`
}

// Skills divise per categoria
export const skills = {
  frontend: {
    title: 'Frontend',
    description: 'Interfacce moderne e responsive',
    items: [
      { name: 'HTML5', level: 95, icon: 'html5' },
      { name: 'CSS3', level: 90, icon: 'css3' },
      { name: 'JavaScript', level: 85, icon: 'javascript' },
      { name: 'React', level: 75, icon: 'react' },
      { name: 'Tailwind CSS', level: 80, icon: 'tailwind' }
    ]
  },
  backend: {
    title: 'Backend',
    description: 'Server e logica applicativa',
    items: [
      { name: 'Node.js', level: 80, icon: 'nodejs' },
      { name: 'PHP', level: 70, icon: 'php' },
      { name: 'Python', level: 75, icon: 'python' },
      { name: 'Java', level: 70, icon: 'java' },
      { name: 'SQL', level: 85, icon: 'database' }
    ]
  },
  enterprise: {
    title: 'Enterprise',
    description: 'Soluzioni aziendali SAP',
    items: [
      { name: 'SAP ABAP', level: 85, icon: 'sap' },
      { name: 'ALV Grid', level: 90, icon: 'table' },
      { name: 'Module Pool', level: 80, icon: 'module' },
      { name: 'RFC/BAPI', level: 75, icon: 'api' }
    ]
  },
  tools: {
    title: 'Tools & DevOps',
    description: 'Strumenti di sviluppo',
    items: [
      { name: 'Git', level: 85, icon: 'git' },
      { name: 'GitHub', level: 90, icon: 'github' },
      { name: 'VS Code', level: 95, icon: 'vscode' },
      { name: 'Render', level: 85, icon: 'cloud' },
      { name: 'Netlify', level: 85, icon: 'cloud' },
      { name: 'Linux', level: 75, icon: 'linux' }
    ]
  }
}

// Timeline formazione/esperienza
export const timeline = [
  {
    year: '2025 - Oggi',
    title: 'Università Ca\' Foscari',
    subtitle: 'Laurea in Informatica',
    description: 'Approfondimento teorico e pratico in algoritmi, programmazione e sistemi.',
    type: 'education'
  },
  {
    year: 'Giu 2025 - Dic 2025',
    title: 'EssilorLuxottica',
    subtitle: 'SAP ABAP Developer (Tirocinio)',
    description: '6 mesi di sviluppo ABAP in ambiente enterprise. Creazione tool custom, enhancement programmi esistenti, gestione ciclo completo DEV → TEST → QUALITY → PROD.',
    type: 'work',
    highlight: true
  },
  {
    year: '2025 - Oggi',
    title: 'Web Designer Freelance',
    subtitle: 'Siti per business locali',
    description: 'Creazione di siti web professionali per ristoranti, pub e attività sportive nel Veneto.',
    type: 'work'
  },
  {
    year: '2019 - 2024',
    title: 'ITIS Volterra',
    subtitle: 'Diploma in Informatica',
    description: 'San Donà di Piave. Fondamenti di programmazione, database, reti e sistemi.',
    type: 'education'
  }
]

// Esperienza Luxottica dettagliata
export const luxotticaExperience = {
  company: 'EssilorLuxottica',
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
