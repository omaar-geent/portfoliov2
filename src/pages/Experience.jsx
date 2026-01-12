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
  HiOutlineArrowRight
} from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { luxotticaExperience } from '../data/personal'

export default function Experience() {
  const [expandedProject, setExpandedProject] = useState(null)

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <HiOutlineBuildingOffice2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Esperienza Enterprise
                </span>
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 dark:text-white mb-4"
            >
              {luxotticaExperience.company}
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl md:text-2xl text-accent mb-6"
            >
              {luxotticaExperience.role}
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineCalendar className="w-5 h-5 text-accent" />
                <span>{luxotticaExperience.period}</span>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-sm rounded-full ml-1">
                  {luxotticaExperience.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                <HiOutlineMapPin className="w-5 h-5 text-accent" />
                <span>{luxotticaExperience.location}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-dark-600 dark:text-light-300 whitespace-pre-line"
            >
              {luxotticaExperience.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxotticaExperience.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white dark:bg-dark-700 rounded-xl"
              >
                <HiOutlineCheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-dark-700 dark:text-light-200">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-6"
          >
            Tecnologie Utilizzate
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {luxotticaExperience.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="tech-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Progetti"
            title="Cosa ho sviluppato"
            description="I principali progetti su cui ho lavorato durante il tirocinio, con documentazione SOX completa."
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
                {/* Project Header - Always visible */}
                <button
                  onClick={() => toggleProject(project.id)}
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
                    
                    <p className="text-dark-600 dark:text-light-300">
                      {project.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-light-200 dark:bg-dark-600 flex items-center justify-center"
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-dark-500" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
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
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Features */}
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                              <HiOutlineCheckCircle className="w-5 h-5 text-accent" />
                              Funzionalità Implementate
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

                          {/* Objects */}
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                              <HiOutlineDocument className="w-5 h-5 text-accent" />
                              Oggetti SAP Coinvolti
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

                        {/* Code Snippet */}
                        <div className="mt-8">
                          <h4 className="flex items-center gap-2 text-lg font-semibold text-dark-900 dark:text-white mb-4">
                            <HiOutlineCodeBracket className="w-5 h-5 text-accent" />
                            Esempio di Codice
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

      {/* What I Learned */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl mb-6 block">🎓</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-6">
                Cosa ho imparato
              </h2>
              <div className="text-left space-y-4 text-dark-600 dark:text-light-300">
                <p>
                  Lavorare in un'azienda come EssilorLuxottica mi ha insegnato che scrivere codice 
                  è solo una parte del lavoro. Ho imparato l'importanza della <strong className="text-dark-900 dark:text-white">documentazione</strong> (SOX compliance), 
                  del <strong className="text-dark-900 dark:text-white">testing rigoroso</strong> prima di ogni rilascio, e della 
                  <strong className="text-dark-900 dark:text-white"> comunicazione</strong> con il team funzionale.
                </p>
                <p>
                  Ho gestito l'intero ciclo di vita del software: dall'analisi dei requisiti con gli utenti, 
                  passando per lo sviluppo e i test, fino al deploy in produzione attraverso il sistema di 
                  trasporti SAP (DEV → TEST → QUALITY → PROD).
                </p>
                <p>
                  Ogni modifica doveva essere tracciata, ogni rilascio approvato. Questo mi ha dato una 
                  visione realistica di come funziona lo sviluppo software in contesti enterprise dove 
                  l'affidabilità non è opzionale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Posso raccontarti di più sulla mia esperienza o mostrarti altri progetti.
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
            <Link to="/projects" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-dark-900">
              Vedi altri progetti
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
