import { motion } from 'framer-motion'

export default function SectionHeader({ 
  label, 
  title, 
  description, 
  align = 'center',
  light = false 
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-12 md:mb-16 ${alignClass[align]}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          {label}
        </span>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${
        light ? 'text-white' : 'text-dark-900 dark:text-white'
      }`}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg ${
          light ? 'text-light-300' : 'text-dark-600 dark:text-light-300'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
