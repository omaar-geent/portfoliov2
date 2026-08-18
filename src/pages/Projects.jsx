import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const categories = ['Tutti', ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tutti')

  const filteredProjects = activeCategory === 'Tutti'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <SectionHeader
            label="Portfolio"
            title="Progetti"
            description="Infrastruttura che gestisco in produzione, progetti su ERP e AS/400 in azienda, e sviluppo web. Ogni scheda entra nel dettaglio tecnico: cosa c'era da risolvere e come l'ho risolto."
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-dark-900 shadow-lg shadow-accent/25'
                    : 'bg-light-200 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-dark-500 dark:text-light-300">
                Nessun progetto trovato in questa categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl mb-6 block">🚧</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 dark:text-white mb-4">
                Progetti in evoluzione
              </h2>
              <p className="text-dark-600 dark:text-light-300 mb-6">
                Alcuni di questi progetti sono ancora in fase di sviluppo e potrebbero non essere 
                completi al 100%. Ogni sito viene costruito con cura, seguendo le esigenze del cliente 
                e iterando fino al risultato perfetto.
              </p>
              <p className="text-sm text-dark-500 dark:text-light-300">
                Vuoi vedere come lavoro? Clicca su un progetto per scoprire il processo di sviluppo, 
                le tecnologie usate e le sfide superate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
