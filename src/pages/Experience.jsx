import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineBuildingOffice2,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineCodeBracket,
  HiOutlineDocument,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineCloud,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentText,
  HiOutlinePhone,
  HiOutlineComputerDesktop,
  HiOutlineShare,
  HiOutlineChartBar,
  HiOutlineExclamationTriangle,
  HiOutlineSparkles
} from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import {
  vegaExperience,
  vegaProjects,
  troubleshootingCases,
  luxotticaExperience
} from '../data/personal'

const areaIcons = {
  cloud: HiOutlineCloud,
  server: HiOutlineServerStack,
  shield: HiOutlineShieldCheck,
  bolt: HiOutlineBolt,
  code: HiOutlineCodeBracket,
  document: HiOutlineDocumentText,
  phone: HiOutlinePhone,
  desktop: HiOutlineComputerDesktop,
  network: HiOutlineShare,
  chart: HiOutlineChartBar
}

export default function Experience() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [expandedVega, setExpandedVega] = useState('as400-menu')

  return (
    <PageTransition>
      {/* ══ Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <HiOutlineBuildingOffice2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Percorso professionale</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 dark:text-white mb-4"
            >
              Cosa ho fatto
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-dark-600 dark:text-light-300"
            >
              Dallo sviluppo enterprise su SAP all'amministrazione di sistemi ibridi e di un ERP
              logistico AS/400. Sotto trovi i progetti reali, i problemi che ho risolto e come li ho risolti.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══ Vega — posizione attuale */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Posizione attuale</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-2"
            >
              {vegaExperience.company}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xl text-accent mb-1"
            >
              {vegaExperience.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-dark-500 dark:text-light-300 mb-4"
            >
              {vegaExperience.roleSecondary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineCalendar className="w-5 h-5 text-accent" />
                <span>{vegaExperience.period}</span>
              </div>
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineMapPin className="w-5 h-5 text-accent" />
                <span>{vegaExperience.location}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-lg text-dark-600 dark:text-light-300"
            >
              {vegaExperience.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══ Vega — aree di responsabilità */}
      <section className="py-16 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Aree di responsabilità"
            title="Di cosa mi occupo"
            description="Il ruolo copre dieci ambiti che si intrecciano ogni giorno: dall'identità digitale alla reperibilità notturna, dagli apparati di rete all'hardware di magazzino."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {vegaExperience.areas.map((area, index) => {
              const Icon = areaIcons[area.icon] || HiOutlineWrenchScrewdriver
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="p-6 bg-white dark:bg-dark-700 rounded-xl border border-light-200 dark:border-dark-600"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-light-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Tecnologie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white mb-4">
              Tecnologie e strumenti
            </h3>
            <div className="flex flex-wrap gap-3">
              {vegaExperience.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="tech-badge"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ Progetti Vega */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeader
            label="Progetti aziendali"
            title="I progetti che sto portando avanti"
            description="Due progetti su cui lavoro come analista tecnico e come presidio on-site. Clicca per aprire il dettaglio."
          />

          <div className="space-y-6">
            {vegaProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedVega(expandedVega === project.id ? null : project.id)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 hover:bg-light-50 dark:hover:bg-dark-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {project.role}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-light-300">
                        {project.scope}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 dark:text-white mb-2">
                      {project.name}
                    </h3>

                    <p className="text-dark-600 dark:text-light-300">{project.description}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedVega === project.id ? 180 : 0 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-light-200 dark:bg-dark-600 flex items-center justify-center"
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-dark-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedVega === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-light-200 dark:border-dark-600">
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                          {project.blocks.map((block) => (
                            <div key={block.title}>
                              <h4 className="flex items-center gap-2 text-base font-semibold text-dark-900 dark:text-white mb-3">
                                <HiOutlineCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                {block.title}
                              </h4>
                              <ul className="space-y-2">
                                {block.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-dark-600 dark:text-light-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-light-200 dark:border-dark-600">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((t) => (
                              <span key={t} className="tech-badge">{t}</span>
                            ))}
                          </div>
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

      {/* ══ Casi di troubleshooting */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Problem solving"
            title="Anomalie non standard che ho risolto"
            description="Ogni caso è un problema reale: cosa si vedeva, e cosa c'era davvero sotto."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {troubleshootingCases.map((c, index) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="p-6 bg-white dark:bg-dark-700 rounded-xl border border-light-200 dark:border-dark-600 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white">
                    {c.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/10 text-accent flex-shrink-0">
                    {c.tag}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <HiOutlineExclamationTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-dark-600 dark:text-light-300">{c.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <HiOutlineSparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-dark-700 dark:text-light-200">{c.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Divider */}
      <div className="container-custom">
        <div className="border-t border-light-300 dark:border-dark-600" />
      </div>

      {/* ══ Cover System / Luxottica */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <HiOutlineBuildingOffice2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Esperienza precedente — sviluppo enterprise
                </span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-2"
            >
              {luxotticaExperience.company}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-xl text-blue-600 dark:text-blue-400 mb-4"
            >
              {luxotticaExperience.role} — {luxotticaExperience.clientName}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineCalendar className="w-5 h-5 text-blue-500" />
                <span>{luxotticaExperience.period}</span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm rounded-full ml-1">
                  {luxotticaExperience.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineMapPin className="w-5 h-5 text-blue-500" />
                <span>{luxotticaExperience.location}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-lg text-dark-600 dark:text-light-300 whitespace-pre-line mb-10"
            >
              {luxotticaExperience.description}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {luxotticaExperience.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-dark-700 rounded-xl border border-light-200 dark:border-dark-600"
                >
                  <HiOutlineCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700 dark:text-light-200 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white mb-4">
                Tecnologie utilizzate
              </h3>
              <div className="flex flex-wrap gap-3">
                {luxotticaExperience.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Progetti SAP */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Progetti SAP"
            title="Cosa ho sviluppato in ABAP"
            description="I principali progetti del tirocinio, ognuno con ciclo di trasporto completo e documentazione SOX."
          />

          <div className="space-y-6">
            {luxotticaExperience.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 hover:bg-light-50 dark:hover:bg-dark-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.type.includes('Zero')
                          ? 'bg-accent/10 text-accent'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      }`}>
                        {project.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-light-300">
                        {project.ticket}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.riskLevel === 'Normal'
                          ? 'bg-yellow-500/10 text-yellow-600'
                          : 'bg-green-500/10 text-green-600'
                      }`}>
                        SOX: {project.riskLevel}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 dark:text-white mb-2">
                      {project.name}
                    </h3>

                    <p className="text-dark-600 dark:text-light-300">{project.description}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-light-200 dark:bg-dark-600 flex items-center justify-center"
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-dark-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-light-200 dark:border-dark-600">
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                              <HiOutlineCheckCircle className="w-5 h-5 text-accent" />
                              Funzionalità implementate
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-dark-600 dark:text-light-300 text-sm">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                              <HiOutlineDocument className="w-5 h-5 text-accent" />
                              Oggetti SAP coinvolti
                            </h4>
                            <ul className="space-y-2">
                              {project.objects.map((obj, i) => (
                                <li key={i} className="text-sm font-mono text-dark-600 dark:text-light-300 bg-light-100 dark:bg-dark-700 px-3 py-2 rounded">
                                  {obj}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8">
                          <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                            <HiOutlineCodeBracket className="w-5 h-5 text-accent" />
                            Esempio di codice
                          </h4>
                          <div className="relative">
                            <pre className="bg-dark-900 text-light-100 p-4 rounded-xl overflow-x-auto text-sm font-mono">
                              <code>{project.codeSnippet}</code>
                            </pre>
                            <div className="absolute top-2 right-2 px-2 py-1 bg-accent/20 text-accent text-xs font-mono rounded">
                              ABAP
                            </div>
                          </div>
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

      {/* ══ Cosa ho imparato */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-8 text-center">
                Cosa mi porto dietro
              </h2>

              <div className="space-y-5 text-dark-600 dark:text-light-300">
                <p>
                  In un contesto enterprise ho imparato che scrivere codice è la parte più piccola del lavoro.
                  Conta la <strong className="text-dark-900 dark:text-white">documentazione</strong>, conta il{' '}
                  <strong className="text-dark-900 dark:text-white">testing prima del rilascio</strong>, conta
                  saper parlare con chi userà quello che hai costruito. Ogni modifica tracciata, ogni rilascio approvato.
                </p>
                <p>
                  Nella sistemistica ho imparato una cosa diversa e complementare: prima di toccare un permesso,
                  devi sapere <strong className="text-dark-900 dark:text-white">cosa si muove a valle</strong>.
                  Sbloccare una funzione per un utente può aprirne dieci ad altri cinquanta. È la differenza tra
                  chiudere un ticket e risolvere un problema.
                </p>
                <p>
                  E ho imparato a non fidarmi del messaggio d'errore. Un invio che risulta fallito può essere
                  arrivato, un blocco che sembra di rete può essere una DLL rimossa da un antivirus, un dato
                  sbagliato in etichetta può nascere tre sistemi più a monte. La causa quasi mai sta dove si
                  vede il sintomo.
                </p>
                <p className="pt-2 border-t border-light-200 dark:border-dark-600">
                  Il filo che unisce tutto è l'<strong className="text-dark-900 dark:text-white">automazione</strong>:
                  se una cosa la faccio a mano due volte, la terza provo a farla fare a uno script. È così che una
                  mappatura da giorni è diventata una query, ed è così che tengo in piedi un homelab da solo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA */}
      <section className="py-16 bg-dark-900 dark:bg-dark-800">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-white mb-4"
          >
            Vuoi saperne di più?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-light-300 mb-8"
          >
            Posso raccontarti nel dettaglio uno di questi progetti, oppure farti vedere l'homelab.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Contattami
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/homelab" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-dark-900">
              Vedi l'homelab
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
