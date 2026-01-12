import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  HiOutlineArrowLeft, 
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineTag
} from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import { getProjectBySlug, getRelatedProjects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const relatedProjects = getRelatedProjects(slug, 2)

  // Redirect se progetto non trovato
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-dark-500 dark:text-light-300 hover:text-accent transition-colors"
            >
              <HiOutlineArrowLeft className="w-5 h-5" />
              <span>Torna ai progetti</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: project.color }}
                >
                  {project.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 dark:text-white mb-2"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-xl text-dark-500 dark:text-light-300 mb-6"
              >
                {project.subtitle}
              </motion.p>

              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                  <HiOutlineCalendar className="w-5 h-5 text-accent" />
                  <span>{project.year}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                    <HiOutlineMapPin className="w-5 h-5 text-accent" />
                    <span>{project.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-dark-600 dark:text-light-300">
                  <HiOutlineTag className="w-5 h-5 text-accent" />
                  <span>{project.type}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg text-dark-600 dark:text-light-300 mb-8"
              >
                {project.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visita il sito
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right: Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-light-200 dark:bg-dark-700 aspect-video">
                {/* Browser mockup */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-light-300 dark:bg-dark-600 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-4 bg-light-200 dark:bg-dark-700 rounded text-xs flex items-center justify-center text-dark-400 dark:text-light-300 font-mono truncate px-2">
                    {project.url}
                  </div>
                </div>
                
                {/* Placeholder content */}
                <div className="pt-8 h-full flex items-center justify-center">
                  <div 
                    className="text-8xl font-display font-bold opacity-10"
                    style={{ color: project.color }}
                  >
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Status badge */}
              {project.status && (
                <div className="absolute -bottom-3 right-6">
                  <span className="px-4 py-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-sm font-medium rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white mb-3">
                La Sfida
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white mb-3">
                La Soluzione
              </h3>
              <p className="text-dark-600 dark:text-light-300">
                {project.solution}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white mb-3">
                Tecnologie
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4">
              Funzionalità Principali
            </h2>
            <p className="text-dark-600 dark:text-light-300">
              Cosa rende questo progetto speciale
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-dark-700"
              >
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-dark-700 dark:text-light-200">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4">
                Altri Progetti
              </h2>
              <p className="text-dark-600 dark:text-light-300">
                Scopri gli altri lavori che ho realizzato
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map((proj, index) => (
                <ProjectCard key={proj.id} project={proj} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}
