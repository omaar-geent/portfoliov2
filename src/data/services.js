// Servizi offerti - Portfolio Omar Gentilin

import { 
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineCog
} from 'react-icons/hi2'

export const services = [
  {
    id: 1,
    icon: HiOutlineDevicePhoneMobile,
    title: 'Landing Page',
    subtitle: 'One Page d\'Impatto',
    description: 'Pagina singola ottimizzata per conversioni. Perfetta per presentare un servizio, prodotto o evento con un design accattivante.',
    features: [
      'Design personalizzato',
      'Ottimizzazione mobile',
      'Form di contatto',
      'Integrazione social',
      'SEO base'
    ],
    ideal: 'Perfetto per: eventi, promozioni, lancio prodotti'
  },
  {
    id: 2,
    icon: HiOutlineGlobeAlt,
    title: 'Sito Web Completo',
    subtitle: 'Multi-Pagina Professionale',
    description: 'Sito web completo con più pagine, menu di navigazione, gallerie e tutte le funzionalità necessarie per la tua attività.',
    features: [
      'Architettura multi-pagina',
      'Menu digitale (per ristoranti)',
      'Galleria fotografica',
      'Mappa e contatti',
      'Integrazione WhatsApp',
      'Google Analytics'
    ],
    ideal: 'Perfetto per: ristoranti, palestre, attività locali',
    popular: true
  },
  {
    id: 3,
    icon: HiOutlinePaintBrush,
    title: 'Restyling',
    subtitle: 'Rinnova il Tuo Sito',
    description: 'Hai già un sito ma sembra datato? Lo trasformo con un design moderno mantenendo i tuoi contenuti e migliorando l\'esperienza utente.',
    features: [
      'Analisi sito attuale',
      'Nuovo design moderno',
      'Miglioramento UX/UI',
      'Ottimizzazione performance',
      'Adattamento mobile'
    ],
    ideal: 'Perfetto per: chi ha un sito vecchio di 3+ anni'
  },
  {
    id: 4,
    icon: HiOutlineCodeBracket,
    title: 'Web App',
    subtitle: 'Applicazioni Custom',
    description: 'Sviluppo applicazioni web su misura con React, Node.js e database. Dashboard, gestionali, sistemi di prenotazione.',
    features: [
      'Sviluppo Full Stack',
      'Database personalizzato',
      'Autenticazione utenti',
      'API RESTful',
      'Deploy cloud'
    ],
    ideal: 'Perfetto per: esigenze specifiche e complesse'
  },
  {
    id: 5,
    icon: HiOutlineServer,
    title: 'Manutenzione',
    subtitle: 'Supporto Continuativo',
    description: 'Pacchetto di manutenzione mensile per tenere il tuo sito sempre aggiornato, sicuro e performante.',
    features: [
      'Aggiornamenti contenuti',
      'Backup periodici',
      'Monitoraggio uptime',
      'Fix bug e problemi',
      'Report mensile'
    ],
    ideal: 'Perfetto per: chi vuole tranquillità'
  },
  {
    id: 6,
    icon: HiOutlineCog,
    title: 'SAP Development',
    subtitle: 'Soluzioni Enterprise',
    description: 'Sviluppo ABAP custom per aziende che utilizzano SAP. Report, integrazioni, ottimizzazioni e nuove funzionalità.',
    features: [
      'Report ALV avanzati',
      'Module Pool custom',
      'Function Modules',
      'Integrazioni RFC',
      'Ottimizzazione query'
    ],
    ideal: 'Per aziende con sistema SAP',
    enterprise: true
  }
]

// Processo di lavoro
export const workProcess = [
  {
    step: 1,
    title: 'Ascolto',
    description: 'Capisco le tue esigenze, il tuo business e i tuoi obiettivi. Ogni progetto parte da qui.'
  },
  {
    step: 2,
    title: 'Proposta',
    description: 'Ti presento una proposta con tempistiche, funzionalità e investimento richiesto.'
  },
  {
    step: 3,
    title: 'Sviluppo',
    description: 'Creo il sito mostrandoti i progressi. Feedback continuo per un risultato perfetto.'
  },
  {
    step: 4,
    title: 'Lancio',
    description: 'Pubblichiamo il sito online. Ti spiego come gestirlo e resto disponibile per supporto.'
  }
]
