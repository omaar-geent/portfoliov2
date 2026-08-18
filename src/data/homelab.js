// Homelab — Omar Gentilin
// Dati estratti dalla documentazione tecnica del laboratorio (SuperArchivio/homelab-docs)

export const homelabOverview = {
  title: "Homelab multi-nodo",
  tagline: "Tre macchine, una rete privata, servizi attivi 24 ore su 24",
  intro: `Il mio homelab non è una collezione di container messi lì per provare. È un'infrastruttura vera: tre macchine fisiche in cluster logico, storage ridondato, una VPN mesh che regge l'accesso remoto sotto CGNAT, backup automatici e monitoraggio attivo. La progetto, la gestisco e — soprattutto — la documento.`,
  why: `L'ho costruita per un motivo preciso: sul lavoro amministro sistemi che non posso rompere. Qui posso. Ogni cosa che ho imparato su ZFS, su IOMMU, su come si comporta una subnet route quando il nodo che la annuncia va giù, l'ho imparata sbagliando su questa rete e poi rimettendola in piedi.`,
  stats: [
    { value: "3", label: "macchine fisiche" },
    { value: "7", label: "VM e container" },
    { value: "~3 TB", label: "storage ZFS RAIDZ1" },
    { value: "11", label: "monitor attivi" },
    { value: "24/7", label: "uptime servizi core" }
  ]
}

// Le tre macchine
export const homelabNodes = [
  {
    id: "mac-mini",
    name: "Mac Mini M2",
    role: "Workstation e nodo container sempre attivo",
    os: "macOS",
    specs: [
      "Apple M2 — 8 core (4 performance + 4 efficiency)",
      "8 GB RAM unificata",
      "Ethernet 1000baseT full-duplex",
      "Sleep disabilitato (pmset sleep 0) — attivo H24"
    ],
    hosts: ["Ollama", "Open WebUI", "Homebox", "Docker Desktop"],
    note: "Non è un server e non lo tratto come tale: nessun servizio critico gira qui. Fa da workstation e da nodo per i container che possono tollerare un riavvio.",
    color: "#64748b"
  },
  {
    id: "proxmox",
    name: "Mini-PC Ryzen — Proxmox VE",
    role: "Hypervisor: container LXC e macchine virtuali",
    os: "Proxmox VE 9.1 (kernel 6.17)",
    specs: [
      "AMD Ryzen 5 2600X — 6 core / 12 thread",
      "24 GB RAM",
      "SSD boot + LVM-Thin per i dischi VM",
      "NVIDIA GT 1030 — IOMMU / AMD-Vi attivo, passthrough pronto"
    ],
    hosts: ["4 container LXC unprivileged", "3 VM (Ubuntu, Kali, Windows 11)"],
    note: "Il Ryzen non ha GPU integrata: la scheda dedicata è l'unica del sistema, quindi Proxmox gira headless e la GPU è libera per il passthrough. AMD ha anche un IOMMU grouping più pulito di Intel.",
    color: "#e11d48"
  },
  {
    id: "truenas",
    name: "Fujitsu ESPRIMO P710 — TrueNAS",
    role: "Storage, condivisioni di rete e backup",
    os: "TrueNAS SCALE 25.10",
    specs: [
      "Intel Core i5-3470 — 4 core (QuickSync H.264 disponibile)",
      "32 GB RAM",
      "3 × HDD 1 TB in pool ZFS RAIDZ1 (~3 TB grezzi, ~2 TB utili)",
      "SSD Micron 128 GB per il boot"
    ],
    hosts: ["Pool ZFS Archivio", "Condivisioni SMB e NFS", "Tailscale in Docker"],
    note: "RAIDZ1 tollera la perdita di un disco, ma non è un backup: protegge dal guasto hardware, non da una cancellazione o da un ransomware. È una distinzione che tengo ben presente.",
    color: "#0891b2"
  }
]

// Servizi self-hosted
export const homelabServices = [
  {
    name: "Vaultwarden",
    category: "Sicurezza",
    what: "Password manager compatibile con Bitwarden, scritto in Rust",
    detail: "Il servizio più critico di tutta l'infrastruttura: senza di lui non accedo a nessuna credenziale. Gira in LXC unprivileged con 2FA TOTP abilitata e backup automatico notturno su un mount NFS del NAS. Il vault resta sincronizzato in locale sui client Bitwarden, così funziona anche a infrastruttura giù.",
    stack: ["LXC", "Rust", "NFS", "TOTP"],
    critical: true
  },
  {
    name: "Tailscale subnet router",
    category: "Rete",
    what: "VPN mesh WireGuard con rotta annunciata sull'intera LAN",
    detail: "Il mio ISP usa CGNAT: nessun IP pubblico, nessuna porta apribile. Un container LXC dedicato annuncia la subnet 192.168.1.0/24 alla rete Tailscale, così da fuori raggiungo qualsiasi dispositivo di casa — anche quelli senza Tailscale installato — senza esporre niente su internet. Per far partire Tailscale in LXC serve /dev/net/tun, abilitato da un hookscript che gira all'avvio del container.",
    stack: ["WireGuard", "LXC", "hookscript", "subnet routing"],
    critical: true
  },
  {
    name: "Pi-hole",
    category: "Rete",
    what: "DNS di rete con blocco pubblicità e tracker",
    detail: "Tutti i dispositivi della LAN puntano qui per il DNS. Oltre al filtraggio, gestisce i record DNS interni: è il motivo per cui posso scrivere vaultwarden.home nel browser invece di ricordarmi un indirizzo IP. Upstream su Cloudflare.",
    stack: ["Pi-hole FTL", "LXC", "DNS locale"]
  },
  {
    name: "Uptime Kuma",
    category: "Monitoraggio",
    what: "Monitoraggio uptime con notifiche",
    detail: "11 monitor tra HTTP e Ping che coprono ogni nodo e ogni servizio critico: hypervisor, NAS, router, switch, access point, container. Se qualcosa cade lo so prima di accorgermene usando la rete.",
    stack: ["LXC", "HTTP/Ping checks", "notifiche"]
  },
  {
    name: "Ollama + Open WebUI",
    category: "AI",
    what: "Modelli linguistici in locale, zero dati verso il cloud",
    detail: "Ollama fa da runtime per i modelli sul Mac Mini ed espone un'API REST; Open WebUI ci si appoggia per la chat e per il RAG sui documenti. Modello scelto: Gemma 3 4B quantizzato Q4_K_M, sotto i 4 GB — la scelta giusta su 8 GB di RAM unificata, dove un 7B causerebbe swap. Esposto in HTTPS via tailscale serve, con certificato valido e senza aprire nulla sul router.",
    stack: ["Ollama", "Open WebUI", "Docker", "RAG", "tailscale serve"]
  },
  {
    name: "Homebox",
    category: "Utility",
    what: "Inventario domestico con ricerca full-text",
    detail: "Catalogo di quello che ho in casa: elettronica, ricambi, cavi, con posizione fisica, etichette e valore. Banale finché non ti serve sapere dove hai messo quell'adattatore due anni fa.",
    stack: ["Docker", "SQLite"]
  },
  {
    name: "VM di laboratorio",
    category: "Virtualizzazione",
    what: "Ubuntu Server, Kali Linux, Windows 11 Enterprise",
    detail: "Ubuntu come ambiente Linux pulito per test e build. Kali per esercitazioni di sicurezza in rete isolata. Windows 11 con UEFI/OVMF e TPM 2.0 virtuale, GPU GT 1030 in passthrough — utile per capire cosa vuol dire davvero far girare Windows su un hypervisor.",
    stack: ["KVM/QEMU", "OVMF", "TPM 2.0", "GPU passthrough"]
  },
  {
    name: "Storage ZFS",
    category: "Storage",
    what: "Pool RAIDZ1 con dataset separati e condivisioni SMB/NFS",
    detail: "Dataset distinti per archivio, documenti, media, backup e Time Machine. SMB verso il Mac, NFS verso Proxmox (dove fa da storage aggiuntivo per LXC e per gli hookscript). Scrub pianificati per verificare l'integrità dei dati, non solo la loro presenza.",
    stack: ["ZFS", "RAIDZ1", "SMB/CIFS", "NFS", "Time Machine"]
  }
]

// Cose imparate sbagliando
export const homelabLessons = [
  {
    title: "L'ordine di avvio conta",
    body: "Il container Tailscale dipende da un hookscript che vive su un mount NFS del NAS. Se Proxmox si riavvia prima che TrueNAS sia online, l'hookscript non viene eseguito, Tailscale non parte e perdo la subnet route — cioè l'accesso remoto. Ho documentato una sequenza di avvio precisa: prima il NAS, poi l'hypervisor, con verifica a ogni passo."
  },
  {
    title: "Un single point of failure si nasconde bene",
    body: "Il server per il controllo remoto girava sull'hypervisor. Quando l'hypervisor è andato giù ho perso insieme sia le macchine sia lo strumento per riaccenderle da remoto. La lezione: lo strumento di recovery non può vivere sulla cosa che deve recuperare."
  },
  {
    title: "Thin provisioning non è spazio infinito",
    body: "Le tre VM hanno 180 GB allocati nominalmente su uno storage LVM-Thin da 141 GB. Funziona perché lo spazio si occupa solo quando viene scritto, ma va monitorato: se l'uso reale arriva al limite, le VM iniziano a fallire in scrittura."
  },
  {
    title: "RAIDZ1 non si espande con un disco singolo",
    body: "ZFS non permette di aggiungere un disco a un VDEV RAIDZ1 esistente. Per crescere servono un intero VDEV nuovo, oppure la sostituzione progressiva di tutti i dischi con altri più capienti. Meglio saperlo prima di comprare l'hardware che dopo."
  },
  {
    title: "Le scadenze vanno tracciate",
    body: "Una auth key Tailscale scaduta significa un nodo fuori dalla rete senza preavviso. Tengo un registro delle date di scadenza nella documentazione, insieme all'azione da eseguire."
  }
]

// Roadmap
export const homelabRoadmap = [
  {
    phase: "In corso",
    title: "Accesso remoto a prova di blackout",
    items: [
      "Tailscale sul Mac Mini per avere sempre un nodo raggiungibile",
      "Server di controllo remoto spostato sulla macchina più always-on",
      "Wake-on-LAN verificato su entrambi i server, con alias da shell"
    ],
    status: "doing"
  },
  {
    phase: "Prossimo",
    title: "Fujitsu da bare metal a Proxmox + TrueNAS in VM",
    items: [
      "TrueNAS come VM con i 3 HDD in passthrough e import del pool esistente",
      "Libera circa 24 dei 32 GB di RAM per altri servizi",
      "Sfrutta Intel QuickSync dell'i5-3470 per un futuro Jellyfin in LXC"
    ],
    status: "planned"
  },
  {
    phase: "Prossimo",
    title: "Cluster Proxmox a 2 nodi",
    items: [
      "48 GB di RAM totali e live migration tra i nodi",
      "QDevice esterno per risolvere il problema del quorum con soli 2 nodi",
      "Distribuzione dei servizi per affinità hardware"
    ],
    status: "planned"
  },
  {
    phase: "Fase 2",
    title: "GPU passthrough con Looking Glass",
    items: [
      "VM Windows con GPU dedicata e framebuffer condiviso via ivshmem",
      "Client Looking Glass dal Mac: grafica accelerata a latenza quasi zero",
      "Prerequisiti già pronti: IOMMU attivo, GPU in gruppo separato, host headless"
    ],
    status: "planned"
  },
  {
    phase: "Backlog",
    title: "Affidabilità e nuovi servizi",
    items: [
      "UPS — senza gruppo di continuità un blackout può corrompere il pool ZFS",
      "Backup offsite: la ridondanza locale non sostituisce una copia fuori casa",
      "VLAN con OPNsense per segmentare management, client, IoT e ospiti",
      "Home Assistant, Jellyfin, Nextcloud o Immich"
    ],
    status: "backlog"
  }
]

export const homelabStack = [
  "Proxmox VE", "LXC", "KVM/QEMU", "GPU passthrough (IOMMU)", "TrueNAS SCALE",
  "ZFS", "RAIDZ1", "SMB/CIFS", "NFS", "Tailscale", "WireGuard", "subnet routing",
  "Pi-hole", "DNS locale", "Vaultwarden", "2FA TOTP", "Uptime Kuma", "Docker",
  "Docker Compose", "Ollama", "Open WebUI", "Wake-on-LAN", "launchd", "systemd",
  "SSH key management", "Bash"
]
