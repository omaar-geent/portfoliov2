import { motion } from 'framer-motion'

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-dark-700 dark:text-light-200">
          {name}
        </span>
        <span className="text-sm font-mono text-dark-500 dark:text-light-300">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-light-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accent to-primary-400 rounded-full"
        />
      </div>
    </div>
  )
}
