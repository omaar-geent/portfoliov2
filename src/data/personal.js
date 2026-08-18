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
    description: 'Service Desk, Area Sistemi Informativi. AD e Microsoft 365 in ambiente ibrido, VPN e firewall, first response su phishing e BEC, permessi RBAC su ERP AS/400. Analista tecnico sul ridisegno delle alberature menu AS/400 e presidio on-site su ERP CSB-System.',
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
  role: 'Service Desk — Area Sistemi Informativi',
  roleSecondary: 'IT System Administrator & Support Specialist',
  location: 'Mogliano Veneto (TV), Italia',
  description: `Ruolo ibrido nel Service Desk dell'Area Sistemi Informativi, in un contesto Logistica e GDO. Gestisco l'infrastruttura end-to-end: da Active Directory e Microsoft 365 alla sicurezza perimetrale, dall'ERP AS/400 all'hardware di magazzino. Non mi limito ai ticket: scrivo le procedure, coordino i fornitori e presidio gli SLA.`,
  areas: [
    {
      title: 'Active Directory & Microsoft 365',
      icon: 'cloud',
      items: [
        'Ciclo di vita utenti (onboarding e offboarding) in ambiente ibrido Windows Server AD / Microsoft 365',
        'Risoluzione di anomalie di sincronizzazione tra AD locale e cloud, inclusi gli alias di routing tecnici',
        'Manutenzione avanzata degli attributi utente: disattivazioni, scadenze, occultamento dalla Global Address List',
        'Supporto su Outlook: liste di distribuzione, errori di timeout e sincronizzazione client-server'
      ]
    },
    {
      title: 'ERP AS/400 (IBM i)',
      icon: 'server',
      items: [
        'Amministrazione del ciclo di vita dei profili utente e allineamento delle autorizzazioni tra ruoli omologhi',
        'Assegnazione dei ruoli via menu iniziali per mansione: profilazione netta tra menu operativi di deposito e menu gestionali',
        'Gestione dei permessi in logica Role-Based Access Control su tabelle di sicurezza e livelli di fiducia',
        'Abilitazione granulare di singoli comandi e tasti funzione all\'interno di specifici programmi o passi applicativi',
        'Security assessment dell\'impatto applicativo prima di ogni modifica, per non sbloccare funzioni critiche a catena',
        'Supporto ai flussi logistici sui terminali: cruscotto ordini, evasione merci, gestione depositi e piattaforme'
      ]
    },
    {
      title: 'Networking, VPN & Cybersecurity',
      icon: 'shield',
      items: [
        'Troubleshooting avanzato su VPN client-to-site: conflitti DNS e blocchi Geo-IP sui firewall per utenti in mobilità',
        'Gestione del routing locale: rotte statiche IPv4, split tunneling, configurazione gateway, analisi log firewall',
        'First response su incidenti di sicurezza: phishing complessi e Business Email Compromise, con contenimento immediato',
        'Formazione on-the-job agli utenti sulle best practice di sicurezza'
      ]
    },
    {
      title: 'Reperibilità H24',
      icon: 'phone',
      items: [
        'Turno di reperibilità dal lunedì alla domenica fuori dal normale orario di lavoro e per l\'intera giornata di sabato e domenica',
        'Punto di contatto unico per le emergenze bloccanti su rete vendita, sedi del gruppo e CED',
        'Valutazione dell\'urgenza, gestione diretta e coordinamento dei tecnici ingaggiati per la risoluzione',
        'Intervento on-site quando l\'emergenza non è risolvibile da remoto'
      ]
    },
    {
      title: 'Virtualizzazione & Remote Desktop',
      icon: 'desktop',
      items: [
        'Amministrazione e monitoraggio delle server farm RDP che ospitano desktop e sessioni virtuali per gli operatori',
        'Gestione dei freeze applicativi: reset forzato delle sessioni bloccate e riavvio mirato dei servizi VDA',
        'Ripristino dell\'operatività del singolo utente senza impattare l\'intero server',
        'Deploy dei driver di stampa sulle macchine virtuali e gestione delle code di stampa di rete'
      ]
    },
    {
      title: 'Apparati di rete & diagnostica',
      icon: 'network',
      items: [
        'Accesso amministrativo via SSH a router e switch core per diagnostica di basso livello e analisi dei log',
        'Configurazione di rotte statiche sugli apparati di rete',
        'Configurazione e troubleshooting dei record DNS',
        'IP scanning per la mappatura degli host e la risoluzione dei conflitti di indirizzo',
        'Analisi delle metriche di rete per individuare collo di bottiglia e cali di performance'
      ]
    },
    {
      title: 'Server applicativi & batch',
      icon: 'chart',
      items: [
        'Amministrazione del server SAP BusinessObjects: anomalie di accesso, uptime, analisi log e riavvio dei servizi di reportistica',
        'Configurazione e monitoraggio dei flussi di elaborazione dati notturni',
        'Task Scheduler di Windows e piattaforme di automazione aziendale',
        'Intervento su job bloccati, processi appesi o in timeout per garantire il completamento delle routine notturne'
      ]
    },
    {
      title: 'Business continuity & operations',
      icon: 'bolt',
      items: [
        'Troubleshooting lato server su ambiente IBM i, con interventi diretti sui servizi di base della macchina',
        'Ripristino tempestivo dell\'operatività del gestionale in caso di crash dei servizi',
        'Monitoraggio dell\'infrastruttura CED: controllo allarmi e gestione carichi sulle PDU',
        'Gestione del processo RMA e presidio degli SLA con i fornitori hardware'
      ]
    },
    {
      title: 'Automazione & supporto applicativo',
      icon: 'code',
      items: [
        'Debugging e correzione di macro VBA in Excel su tool di calcolo logistico',
        'Ottimizzazione e refactoring di script Python per l\'automazione dei calcoli di giacenza',
        'Configurazione e diagnostica di stampanti termiche industriali e apparati hardware di magazzino',
        'Stesura e formalizzazione di documentazione e procedure IT'
      ]
    },
    {
      title: 'Iniziative interne',
      icon: 'document',
      items: [
        'Partecipazione all\'assessment sull\'operatività dei depositi per il servizio ERP',
        'Partecipazione alla revisione del Piano di Incident Response ICT aziendale',
        'Vendor management tecnico con i consulenti e gli sviluppatori esterni dell\'ERP su ticket di secondo livello'
      ]
    }
  ],
  highlights: [
    'Ciclo di vita utenti in ambiente ibrido AD / Microsoft 365',
    'Permessi RBAC su ERP AS/400: tabelle di sicurezza, livelli di fiducia, menu per mansione',
    'Security assessment dell\'impatto prima di ogni modifica ai permessi',
    'Troubleshooting VPN, conflitti DNS e Geo-IP blocking sui firewall',
    'First response su phishing e Business Email Compromise',
    'Business continuity: ripristino dei servizi di base IBM i',
    'Automazione con Python e macro VBA per l\'area logistica',
    'Vendor management tecnico e presidio SLA',
    'Reperibilità H24 su turno settimanale'
  ],
  technologies: [
    'Active Directory',
    'Microsoft 365',
    'Exchange Admin Center',
    'Entra ID (Azure AD)',
    'WatchGuard Mobile VPN',
    'IBM AS/400 (IBM i)',
    'DB2 for i',
    'CSB-System',
    'Python',
    'VBA',
    'Windows Server',
    'SAP BusinessObjects',
    'RDP / RDS',
    'nmap'
  ]
}

// Progetti seguiti in Gruppo Vega
export const vegaProjects = [
  {
    id: 'as400-menu',
    name: 'Ridisegno alberature menu AS/400',
    role: 'Analista tecnico',
    scope: 'Contratti di appalto — area Logistica',
    status: 'In corso',
    description: 'Revisione delle alberature menu dell\'ERP logistico per separare le funzioni in capo all\'azienda da quelle in capo ai fornitori in appalto, con rimozione controllata delle azioni non pertinenti.',
    blocks: [
      {
        title: 'Analisi e reverse engineering',
        items: [
          'Ricostruzione completa delle alberature partendo da archivi di sistema non documentati',
          'Individuato e documentato che codici menu e codici azione risiedono in archivi distinti ma condividono lo stesso spazio di codifica a 4 caratteri',
          'Verifica incrociata su terminale 5250 per i codici ambigui'
        ]
      },
      {
        title: 'Automazione dell\'estrazione',
        items: [
          'Query ricorsiva CTE su DB2 for i che estrae l\'intero albero con profondità, percorso e gerarchia',
          'Ha sostituito una mappatura manuale che richiedeva giorni di lavoro',
          'Zero-padding dei campi decimali per ordinare correttamente i livelli',
          'Guardia anti-ciclo con chiavi delimitate, per evitare falsi match su sottostringa',
          'Script Python che trasformano gli export CSV in documenti Word ed Excel di revisione',
          'Pipeline di export controllata: separatore, encoding UTF-8, validazione degli accenti'
        ]
      },
      {
        title: 'Progettazione della nuova architettura',
        items: [
          'Standard di nomenclatura dei menu definito e approvato, estensibile a circa 1.400 codici per categoria',
          'Sottomenu organizzati per macrocategoria funzionale',
          'Metodo di costruzione bottom-up (foglie, poi menu intermedi, poi padre) per evitare riferimenti orfani'
        ]
      },
      {
        title: 'Documentazione e stakeholder',
        items: [
          'Schede di verifica Excel con dropdown, righe collassabili e codifica colore, compilabili da referenti non tecnici',
          'Redazione e aggiornamento della specifica dei requisiti software (RFC)',
          'Interfaccia continua con responsabile di area, IT e referenti di deposito per validazione e approvazione'
        ]
      }
    ],
    technologies: ['IBM AS/400 (IBM i)', 'DB2 for i', 'CTE ricorsive', 'SQL avanzato', 'IBM ACS', 'Python', 'pandas', 'python-docx', 'openpyxl', 'Terminale 5250']
  },
  {
    id: 'csb-onsite',
    name: 'Presidio ERP CSB-System',
    role: 'Presidio tecnico on-site',
    scope: 'Stabilimento alimentare del gruppo',
    status: 'In corso',
    description: 'Attività su ERP CSB-System: integrazioni EDI, tracciabilità di filiera, infrastruttura di stabilimento e supporto agli utenti di produzione.',
    blocks: [
      {
        title: 'Integrazione EDI verso cliente',
        items: [
          'Analisi del convertitore a tracciato fisso e del file sorgente con record tipizzati',
          'Ridisegno del layout per portare il numero di lotto sulla riga articolo',
          'Riposizionamento della scrittura nel blocco corretto per garantire la valorizzazione del dato',
          'Sviluppo e verifica in ambiente di test, con piano di travaso in produzione',
          'Gestione del rapporto con il referente del cliente per la validazione del tracciato'
        ]
      },
      {
        title: 'Blocco del job di fatturazione notturna',
        items: [
          'Diagnosi di un blocco ricorrente in esecuzione non presidiata che impediva la generazione dei PDF fattura',
          'Root cause: un modulo assegnato agli indirizzi di consegna ma non configurato per il tipo documento, che apriva un dialogo bloccante in sessione non supervisionata',
          'Workaround immediato per garantire la continuità e correzione strutturale concordata con il vendor'
        ]
      },
      {
        title: 'Non conformità di tracciabilità',
        items: [
          'Investigazione su una discrepanza tra il bollo sanitario in etichetta scaffale e il dato trasmesso dallo stabilimento',
          'Ricostruzione end-to-end della catena: ERP → middleware FTP → AS/400 → ventilazione',
          'Causa individuata nell\'associazione della tracciabilità per solo codice articolo anziché articolo più lotto, con sovrascrittura del dato su consegne multi-lotto',
          'Verifica incrociata dei giri ordini e dei job di export schedulati'
        ]
      },
      {
        title: 'Migrazione processo di sezionamento',
        items: [
          'Migrazione dei moduli di stampa etichette e collegamento ai nuovi form',
          'Migrazione della struttura dei codici GS1-128',
          'Tracking dell\'avanzamento fino a circa il 96% dei moduli migrati',
          'Documentazione tecnica e manuale utente finale dei nuovi processi'
        ]
      },
      {
        title: 'Infrastruttura e automazioni',
        items: [
          'Device server Moxa NPort con porta COM virtuale per integrare i terminali di scansione con l\'ERP',
          'Troubleshooting a livello di pacchetto con PuTTY e Wireshark',
          'Diagnosi di blocchi ambientali: payload .NET mancante per errata configurazione WSUS/GPO, DLL rimosse da antivirus e sync cloud',
          'Invio automatico dei documenti via connettore, in sostituzione di job VBScript legacy',
          'Bonifica dei job da lettere di unità mappate a percorsi UNC per l\'esecuzione non presidiata'
        ]
      }
    ],
    technologies: ['CSB-System', 'EDI fixed-width', 'FTP', 'AS/400', 'GS1-128', 'Moxa NPort', 'RS232', 'Wireshark', 'PuTTY', 'Windows Server', 'WSUS/GPO', 'PowerShell']
  }
]

// Casi di troubleshooting non standard
export const troubleshootingCases = [
  {
    title: 'Conflitti di autorizzazione multilivello su AS/400',
    problem: 'L\'accesso a una funzione specifica entrava in conflitto con le policy generali del menu utente: abilitarla dal menu avrebbe sbloccato privilegi non voluti altrove.',
    solution: 'Indagine incrociata sulle tabelle di sicurezza non esposte a interfaccia, e coordinamento dei consulenti esterni per una modifica circoscritta a livello di codice.',
    tag: 'AS/400'
  },
  {
    title: 'Indirizzi "fantasma" su directory ibrida',
    problem: 'I sistemi automatici di routing esponevano domini di servizio interni al posto del dominio ufficiale negli indirizzi generati.',
    solution: 'Causa risalita ad account di ex dipendenti tecnicamente non ancora scaduti; risolto dall\'editor degli attributi avanzati di AD, nascondendoli dalla rubrica globale.',
    tag: 'Microsoft 365'
  },
  {
    title: 'Blocchi di connettività per utenti in mobilità',
    problem: 'VPN che non si connetteva, con sintomi identici ma cause diverse a ogni segnalazione.',
    solution: 'Diagnosi caso per caso tra problemi di routing, errori DNS e policy Geo-IP sui firewall, separando la responsabilità tra client, infrastruttura aziendale e ISP locale.',
    tag: 'Networking'
  },
  {
    title: 'Incident response su frode informatica',
    problem: 'Finte comunicazioni da fornitori compromessi che sfruttavano liste di distribuzione in copia nascosta per aggirare i controlli.',
    solution: 'Analisi tecnica del messaggio, blocco della minaccia prima della propagazione in rete e formazione immediata agli utenti coinvolti.',
    tag: 'Sicurezza'
  },
  {
    title: 'Job di fatturazione notturna bloccato',
    problem: 'Ogni notte il job si fermava e la mattina mancavano i PDF fattura per due partner.',
    solution: 'Un dialogo bloccante in sessione non presidiata, causato da una configurazione incompleta sul tipo documento. Workaround subito, correzione strutturale con il vendor.',
    tag: 'ERP'
  },
  {
    title: 'Tracciabilità alimentare su catena multi-sistema',
    problem: 'Il bollo sanitario in etichetta al punto vendita non corrispondeva al dato trasmesso dallo stabilimento.',
    solution: 'Catena dati ricostruita per intero: la tracciabilità era associata al solo codice articolo, non ad articolo più lotto, e su consegne multi-lotto il dato veniva sovrascritto.',
    tag: 'Tracciabilità'
  },
  {
    title: 'Comunicazione seriale scanner ↔ ERP',
    problem: 'I terminali di scansione non dialogavano con il gestionale, e il problema non era nel software applicativo.',
    solution: 'Analisi a livello di pacchetto sulle porte del device server, che ha portato a due blocchi ambientali: un payload .NET mancante per WSUS mal configurato e DLL rimosse automaticamente da antivirus e sync cloud.',
    tag: 'Infrastruttura'
  },
  {
    title: 'Macro VBA bloccate su fogli protetti',
    problem: 'Errori di run-time su tool Excel usati ogni giorno dall\'area logistica per i calcoli di giacenza.',
    solution: 'Debug del conflitto tra protezione dei fogli e filtri dati sovrapposti, con ripristino del funzionamento senza riscrivere il tool da zero.',
    tag: 'Automazione'
  }
]

// Esperienza Cover System / Luxottica dettagliata
export const luxotticaExperience = {
  company: 'Cover System S.r.l.',
  clientName: 'progetti Luxottica',
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
