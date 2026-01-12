import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`card p-8 h-full flex flex-col ${service.popular ? 'ring-2 ring-accent' : ''}`}>
        {/* Popular badge */}
        {service.popular && (
          <div className="absolute -top-3 left-6">
            <span className="px-3 py-1 bg-accent text-dark-900 text-xs font-bold rounded-full">
              PIÙ RICHIESTO
            </span>
          </div>
        )}

        {/* Enterprise badge */}
        {service.enterprise && (
          <div className="absolute -top-3 left-6">
            <span className="px-3 py-1 bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-xs font-bold rounded-full">
              ENTERPRISE
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-accent font-medium mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-dark-600 dark:text-light-300 mb-6 flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li 
              key={i}
              className="flex items-center gap-2 text-sm text-dark-600 dark:text-light-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Ideal for */}
        <p className="text-xs text-dark-500 dark:text-light-300 italic mb-6">
          {service.ideal}
        </p>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-accent font-medium group/link"
        >
          <span className="link-underline">Richiedi info</span>
          <HiOutlineArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
