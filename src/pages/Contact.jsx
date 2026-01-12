import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiOutlineEnvelope, 
  HiOutlinePhone, 
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle
} from 'react-icons/hi2'
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { contactInfo } from '../data/personal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/mgvgbkqe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setIsSubmitted(true)
    }
  } catch (error) {
    console.error('Errore invio form:', error)
  }

  setIsSubmitting(false)

    // Reset dopo qualche secondo
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', service: '', message: '' })
    }, 5000)
  }

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    'Ciao Omar! Ho visto il tuo portfolio e vorrei parlarti di un progetto.'
  )}`

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <SectionHeader
            label="Contatti"
            title="Parliamone"
            description="Hai un progetto in mente? Un'idea da sviluppare? O semplicemente vuoi fare due chiacchiere? Scrivimi!"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 md:pb-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Avatar */}
                <div className="mb-8">
                  <img
                    src="/images/avatar-waving.png"
                    alt="Omar waving"
                    className="w-40 h-auto"
                  />
                </div>

                <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-4">
                  Iniziamo a collaborare
                </h3>
                <p className="text-dark-600 dark:text-light-300 mb-8">
                  Compila il form oppure contattami direttamente tramite i canali qui sotto. 
                  Rispondo sempre entro 24 ore.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-light-100 dark:bg-dark-800 hover:bg-light-200 dark:hover:bg-dark-700 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <HiOutlineEnvelope className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="block text-sm text-dark-500 dark:text-light-300">Email</span>
                      <span className="text-dark-900 dark:text-white font-medium">{contactInfo.email}</span>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-light-100 dark:bg-dark-800 hover:bg-[#25D366]/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                      <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <span className="block text-sm text-dark-500 dark:text-light-300">WhatsApp</span>
                      <span className="text-dark-900 dark:text-white font-medium">{contactInfo.phone}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-light-100 dark:bg-dark-800">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <HiOutlineMapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="block text-sm text-dark-500 dark:text-light-300">Location</span>
                      <span className="text-dark-900 dark:text-white font-medium">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <span className="block text-sm text-dark-500 dark:text-light-300 mb-3">
                    Seguimi sui social
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-light-200 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-light-300 hover:bg-accent hover:text-dark-900 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-light-200 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-light-300 hover:bg-accent hover:text-dark-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="card p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <HiOutlineCheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-2">
                      Messaggio inviato!
                    </h3>
                    <p className="text-dark-600 dark:text-light-300">
                      Grazie per avermi contattato. Ti risponderò il prima possibile.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium text-dark-700 dark:text-light-200 mb-2"
                        >
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Il tuo nome"
                          className="w-full px-4 py-3 rounded-xl border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder:text-dark-400 dark:placeholder:text-light-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium text-dark-700 dark:text-light-200 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="la@tua.email"
                          className="w-full px-4 py-3 rounded-xl border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder:text-dark-400 dark:placeholder:text-light-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label 
                        htmlFor="service" 
                        className="block text-sm font-medium text-dark-700 dark:text-light-200 mb-2"
                      >
                        Di cosa hai bisogno?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      >
                        <option value="">Seleziona un servizio...</option>
                        <option value="landing">Landing Page</option>
                        <option value="website">Sito Web Completo</option>
                        <option value="restyling">Restyling Sito</option>
                        <option value="webapp">Web App Custom</option>
                        <option value="sap">Sviluppo SAP</option>
                        <option value="altro">Altro / Non so ancora</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-dark-700 dark:text-light-200 mb-2"
                      >
                        Messaggio *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Raccontami del tuo progetto..."
                        className="w-full px-4 py-3 rounded-xl border border-light-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white placeholder:text-dark-400 dark:placeholder:text-light-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          Invia messaggio
                          <HiOutlinePaperAirplane className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-dark-500 dark:text-light-300">
                      Rispondo solitamente entro 24 ore. Per urgenze, scrivimi su WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 md:py-32 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4">
              Dove mi trovo
            </h2>
            <p className="text-dark-600 dark:text-light-300">
              Quarto d'Altino (VE) - Lavoro con clienti in tutto il Veneto e online
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-80 bg-light-200 dark:bg-dark-700 flex items-center justify-center">
            {/* Placeholder per mappa - in produzione userai Google Maps o simili */}
            <div className="text-center">
              <HiOutlineMapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-dark-600 dark:text-light-300">
                Quarto d'Altino (VE), Italia
              </p>
              <a
                href="https://maps.google.com/?q=Quarto+d'Altino,+VE,+Italia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-accent hover:underline"
              >
                Apri in Google Maps
                <HiOutlineMapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
