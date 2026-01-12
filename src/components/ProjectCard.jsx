import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="card overflow-hidden glow">
          {/* Image Container */}
          <div className="relative aspect-project overflow-hidden bg-light-200 dark:bg-dark-700">
            {/* Placeholder gradient se non c'è immagine */}
            <div 
              className="absolute inset-0 bg-gradient-to-br opacity-50"
              style={{
                background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}44 100%)`
              }}
            />
            
            {/* Project thumbnail */}
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              // Placeholder con iniziali
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-6xl font-display font-bold opacity-20"
                  style={{ color: project.color }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-500 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-dark-900 text-sm font-medium">
                  Vedi progetto
                  <HiOutlineArrowUpRight className="w-4 h-4" />
                </span>
              </motion.div>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                style={{ backgroundColor: `${project.color}cc` }}
              >
                {project.category}
              </span>
            </div>

            {/* Status badge */}
            {project.status && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-900/70 text-white backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-light-300">
                  {project.subtitle}
                </p>
              </div>
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-light-300 dark:border-dark-600 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors"
                whileHover={{ rotate: 45 }}
              >
                <HiOutlineArrowUpRight className="w-5 h-5 text-dark-500 dark:text-light-300 group-hover:text-accent transition-colors" />
              </motion.div>
            </div>

            <p className="text-dark-600 dark:text-light-300 text-sm line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-light-200 dark:bg-dark-700 text-dark-600 dark:text-light-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
