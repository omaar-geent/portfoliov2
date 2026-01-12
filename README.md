# 🚀 Portfolio Omar Gentilin

Portfolio professionale costruito con **React + Vite + Tailwind CSS + Framer Motion**.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## ✨ Features

- 🌓 **Dark/Light Mode** con toggle e preferenza sistema
- 🎬 **Animazioni fluide** con Framer Motion
- 📱 **Responsive** design mobile-first
- ⚡ **Performance** ottimizzata con Vite
- 🎨 **Design minimal** ma d'impatto
- 💬 **WhatsApp** integrato
- 📧 **Form contatti** pronto all'uso

## 📁 Struttura Progetto

```
portfolio-omar/
├── public/
│   ├── images/
│   │   ├── avatar-thinking.png
│   │   ├── avatar-presenting.png
│   │   ├── avatar-thumbsup.png
│   │   ├── avatar-waving.png
│   │   └── projects/          # Screenshot progetti
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigazione + theme toggle
│   │   ├── Footer.jsx         # Footer con social links
│   │   ├── WhatsAppBtn.jsx    # Bottone flottante WhatsApp
│   │   ├── ProjectCard.jsx    # Card progetto
│   │   ├── ServiceCard.jsx    # Card servizio
│   │   ├── SectionHeader.jsx  # Header sezioni riutilizzabile
│   │   ├── SkillBar.jsx       # Barra competenze animata
│   │   └── PageTransition.jsx # Wrapper animazione pagine
│   │
│   ├── pages/
│   │   ├── Home.jsx           # Homepage con hero
│   │   ├── About.jsx          # Chi sono + skills + timeline
│   │   ├── Projects.jsx       # Griglia progetti
│   │   ├── ProjectDetail.jsx  # Dettaglio singolo progetto
│   │   ├── Services.jsx       # Servizi offerti
│   │   └── Contact.jsx        # Form contatti
│   │
│   ├── data/
│   │   ├── projects.js        # Dati progetti
│   │   ├── services.js        # Dati servizi
│   │   └── personal.js        # Info personali + skills
│   │
│   ├── context/
│   │   └── ThemeContext.jsx   # Context per dark mode
│   │
│   ├── App.jsx                # Router principale
│   ├── main.jsx               # Entry point
│   └── index.css              # Stili globali + Tailwind
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installazione

1. **Clona o scarica** il progetto

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia in sviluppo**
   ```bash
   npm run dev
   ```
   Il sito sarà disponibile su `http://localhost:3000`

4. **Build per produzione**
   ```bash
   npm run build
   ```
   I file verranno generati nella cartella `dist/`

## 📸 Aggiungere Screenshot Progetti

Per aggiungere le immagini dei progetti:

1. Crea la cartella `public/images/projects/`

2. Aggiungi le immagini con questi nomi:
   - `m1-combat-thumb.jpg` (thumbnail)
   - `m1-combat-hero.jpg` (hero section)
   - `m1-combat-mobile.jpg` (versione mobile)
   - Stessa cosa per `madly-*` e `boomerang-*`

3. Le immagini verranno caricate automaticamente

## 🚀 Deploy su Render

1. Crea un nuovo **Static Site** su [render.com](https://render.com)

2. Connetti il tuo repo GitHub

3. Configura:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. Deploy!

## 🚀 Deploy su Netlify

1. Vai su [netlify.com](https://netlify.com)

2. Trascina la cartella `dist/` dopo aver fatto la build

3. Oppure connetti il repo GitHub con:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## 📧 Configurare il Form Contatti

Il form attualmente simula l'invio. Per renderlo funzionante:

### Opzione 1: Formspree (Gratuito)
1. Registrati su [formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Modifica `Contact.jsx` per usare l'endpoint Formspree

### Opzione 2: EmailJS
1. Registrati su [emailjs.com](https://emailjs.com)
2. Configura il servizio email
3. Integra la libreria nel progetto

## 🎨 Personalizzazione

### Colori
Modifica `tailwind.config.js` per cambiare:
- `accent`: colore principale (default: verde)
- `dark`: sfumature dark mode
- `light`: sfumature light mode

### Font
I font sono caricati da FontShare e Google Fonts:
- **Clash Display**: titoli
- **Satoshi**: testo body
- **JetBrains Mono**: codice

### Dati
Modifica i file in `src/data/`:
- `personal.js`: info personali, bio, skills
- `projects.js`: lista progetti
- `services.js`: servizi offerti

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🤝 Contatti

- **Email**: omarmarco04@gmail.com
- **WhatsApp**: +39 389 019 3669
- **GitHub**: [@omaar-geent](https://github.com/omaar-geent)
- **LinkedIn**: [Omar Gentilin](https://www.linkedin.com/in/omar-gentilin-36472132b/)

---

Fatto con ❤️ da Omar Gentilin
