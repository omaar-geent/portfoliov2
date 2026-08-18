import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineServerStack,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineLightBulb,
  HiOutlineMap
} from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import {
  homelabOverview,
  homelabNodes,
  homelabServices,
  homelabLessons,
  homelabRoadmap,
  homelabStack
} from '../data/homelab'

const nodeIcons = {
  'mac-mini': HiOutlineCpuChip,
  proxmox: HiOutlineServerStack,
  truenas: HiOutlineCircleStack
}

const statusStyles = {
  doing: { label: 'In corso', cls: 'bg-accent/10 text-accent border-accent/20' },
  planned: { label: 'Pianificato', cls: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  backlog: { label: 'Backlog', cls: 'bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-light-300 border-light-300 dark:border-dark-500' }
}

export default function Homelab() {
  const [openService, setOpenService] = useState(null)

  return (
    <PageTransition>
      {/* ── Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Infrastruttura attiva 24/7
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 dark:text-white mb-4"
            >
              {homelabOverview.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl text-accent mb-8"
            >
              {homelabOverview.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-lg text-dark-600 dark:text-light-300"
            >
              <p>{homelabOverview.intro}</p>
              <p>{homelabOverview.why}</p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-14">
            {homelabOverview.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="p-5 bg-white dark:bg-dark-700 rounded-xl border border-light-200 dark:border-dark-600 text-center"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-dark-500 dark:text-light-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nodi */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Hardware"
            title="Le tre macchine"
            description="Ogni nodo ha un ruolo preciso, scelto in base a quello che il suo hardware sa fare meglio."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {homelabNodes.map((node, index) => {
              const Icon = nodeIcons[node.id] || HiOutlineServerStack
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${node.color}1a` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: node.color }} />
                  </div>

                  <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white mb-1">
                    {node.name}
                  </h3>
                  <p className="text-sm text-accent mb-1">{node.role}</p>
                  <p className="text-xs font-mono text-dark-500 dark:text-light-300 mb-5">{node.os}</p>

                  <ul className="space-y-2 mb-5">
                    {node.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-light-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: node.color }}
                        />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {node.hosts.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-light-200 dark:bg-dark-600 text-dark-600 dark:text-light-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-dark-500 dark:text-light-300 italic mt-auto pt-4 border-t border-light-200 dark:border-dark-600">
                    {node.note}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Servizi */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeader
            label="Servizi"
            title="Cosa gira sopra"
            description="Clicca su un servizio per leggere come è configurato e perché ho fatto quella scelta."
          />

          <div className="space-y-4">
            {homelabServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenService(openService === service.name ? null : service.name)}
                  className="w-full p-5 md:p-6 text-left flex items-start justify-between gap-4 hover:bg-light-50 dark:hover:bg-dark-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-display font-bold text-dark-900 dark:text-white">
                        {service.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {service.category}
                      </span>
                      {service.critical && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-600 dark:text-red-400">
                          servizio critico
                        </span>
                      )}
                    </div>
                    <p className="text-dark-600 dark:text-light-300 text-sm">{service.what}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: openService === service.name ? 180 : 0 }}
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-light-200 dark:bg-dark-600 flex items-center justify-center"
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-dark-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openService === service.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-light-200 dark:border-dark-600">
                        <p className="text-dark-600 dark:text-light-300 mb-4 mt-4">
                          {service.detail}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.stack.map((t) => (
                            <span key={t} className="tech-badge">{t}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accesso remoto sotto CGNAT */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <HiOutlineGlobeAlt className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Il problema più interessante
                </span>
              </span>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-6">
                Accesso remoto senza IP pubblico
              </h2>

              <div className="space-y-4 text-lg text-dark-600 dark:text-light-300">
                <p>
                  Il mio provider usa <strong className="text-dark-900 dark:text-white">CGNAT</strong>: non ho un
                  indirizzo IP pubblico, quindi non posso aprire porte sul router. Il port forwarding, la soluzione
                  che trovi in ogni tutorial, qui semplicemente non esiste come opzione.
                </p>
                <p>
                  La risposta è una <strong className="text-dark-900 dark:text-white">VPN mesh</strong>: un container
                  dedicato annuncia l'intera subnet di casa alla rete Tailscale, facendo da router. Da fuori raggiungo
                  qualsiasi dispositivo — anche quelli su cui Tailscale non è nemmeno installato — e non c'è nulla di
                  esposto su internet.
                </p>
                <p>
                  Il dettaglio che non trovi documentato: per far girare Tailscale in un container LXC serve accesso a{' '}
                  <code className="px-1.5 py-0.5 rounded bg-light-200 dark:bg-dark-600 text-sm font-mono">/dev/net/tun</code>,
                  che va abilitato da un hookscript eseguito all'avvio. E quell'hookscript vive sul NAS — il che crea
                  una dipendenza nell'ordine di accensione che ho scoperto nel modo peggiore.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Lezioni imparate */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeader
            label="Post-mortem"
            title="Cose che ho imparato sbagliando"
            description="La parte più utile di un homelab non sono i servizi che funzionano, ma quelli che si sono rotti."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {homelabLessons.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 bg-white dark:bg-dark-700 rounded-xl border border-light-200 dark:border-dark-600"
              >
                <div className="flex items-start gap-3 mb-3">
                  <HiOutlineLightBulb className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white">
                    {lesson.title}
                  </h3>
                </div>
                <p className="text-dark-600 dark:text-light-300 text-sm leading-relaxed">
                  {lesson.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Roadmap"
            title="Dove sto andando"
            description="Un homelab non è mai finito. Questa è la pianificazione della fase successiva, con il perché di ogni scelta."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {homelabRoadmap.map((phase, index) => {
              const st = statusStyles[phase.status] || statusStyles.backlog
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative pl-8 md:pl-10 pb-2"
                >
                  <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent" />
                  {index < homelabRoadmap.length - 1 && (
                    <span className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-light-300 dark:bg-dark-600" />
                  )}

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white">
                      {phase.title}
                    </h3>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-medium border ${st.cls}`}>
                      {st.label}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-dark-600 dark:text-light-300 text-sm">
                        <HiOutlineMap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stack */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-2xl font-display font-bold text-dark-900 dark:text-white mb-6"
          >
            <HiOutlineShieldCheck className="w-7 h-7 text-accent" />
            Stack completo
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {homelabStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.03, 0.6) }}
                className="tech-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-16 bg-dark-900 dark:bg-dark-800">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-white mb-4"
          >
            Le stesse cose, in produzione
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-light-300 mb-8 max-w-2xl mx-auto"
          >
            Quello che qui è un laboratorio, al lavoro è un'infrastruttura che non può fermarsi.
            Active Directory, Microsoft 365, ERP AS/400 e sicurezza perimetrale in un contesto logistico.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/experience" className="btn-primary">
              Cosa ho fatto
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/projects" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-dark-900">
              Tutti i progetti
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
