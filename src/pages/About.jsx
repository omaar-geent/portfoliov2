import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi2'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import SkillBar from '../components/SkillBar'
import { bio, skills, timeline } from '../data/personal'

export default function About() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Background shapes */}
                <div className="absolute -inset-8 bg-accent/10 rounded-3xl -rotate-6" />
                <div className="absolute -inset-8 bg-accent/5 rounded-3xl rotate-3" />
                
                {/* Avatar */}
                <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl">
                  <img
                    src="/images/avatar-presenting.png"
                    alt="Omar Gentilin"
                    className="w-64 md:w-80 h-auto"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl font-display font-bold text-dark-900">21</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl shadow-lg"
                >
                  <span className="text-sm font-medium">🎓 Ca' Foscari</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
              >
                Chi Sono
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-dark-900 dark:text-white mb-6"
              >
                Omar Gentilin
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg dark:prose-invert mb-8"
              >
                <p className="text-dark-600 dark:text-light-300 whitespace-pre-line">
                  {bio.full}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn-primary">
                  Vedi i miei lavori
                  <HiOutlineArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contattami
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-light-100 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            label="Competenze"
            title="Il mio stack tecnologico"
            description="Dalle interfacce web alle soluzioni enterprise, ecco gli strumenti che uso ogni giorno."
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white">
                    {skills.frontend.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-light-300">
                    {skills.frontend.description}
                  </p>
                </div>
              </div>
              {skills.frontend.items.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  delay={index * 0.1}
                />
              ))}
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white">
                    {skills.backend.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-light-300">
                    {skills.backend.description}
                  </p>
                </div>
              </div>
              {skills.backend.items.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  delay={index * 0.1}
                />
              ))}
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white">
                    {skills.enterprise.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-light-300">
                    {skills.enterprise.description}
                  </p>
                </div>
              </div>
              {skills.enterprise.items.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  delay={index * 0.1}
                />
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white">
                    {skills.tools.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-light-300">
                    {skills.tools.description}
                  </p>
                </div>
              </div>
              {skills.tools.items.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <SectionHeader
            label="Percorso"
            title="Il mio viaggio"
            description="Dalla scuola superiore all'università, passando per il mondo del lavoro."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-light-300 dark:bg-dark-600 md:-translate-x-px" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-dark-900 z-10 ${
                    item.highlight ? 'bg-blue-500' : 'bg-accent'
                  }`} />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className={`card p-6 ${item.highlight ? 'ring-2 ring-blue-500/50' : ''}`}>
                      {item.highlight && (
                        <div className={`mb-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                            ⭐ Esperienza Enterprise
                          </span>
                        </div>
                      )}
                      <div className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          item.type === 'education' 
                            ? 'bg-blue-500/10 text-blue-500' 
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {item.type === 'education' ? (
                            <HiOutlineAcademicCap className="w-5 h-5" />
                          ) : (
                            <HiOutlineBriefcase className="w-5 h-5" />
                          )}
                        </div>
                        <span className="text-sm font-mono text-dark-500 dark:text-light-300">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-semibold text-dark-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent font-medium mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-dark-600 dark:text-light-300 text-sm mb-3">
                        {item.description}
                      </p>
                      
                      {item.highlight && (
                        <Link 
                          to="/experience" 
                          className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Scopri di più
                          <HiOutlineArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-light-100 dark:bg-dark-800">
        <div className="container-custom text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/avatar-thumbsup.png"
            alt="Omar thumbs up"
            className="w-40 h-auto mx-auto mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-4"
          >
            Pronto a collaborare?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-600 dark:text-light-300 max-w-xl mx-auto mb-8"
          >
            Che tu abbia bisogno di un sito web per la tua attività o di uno sviluppatore SAP, 
            sono qui per aiutarti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary">
              Parliamone
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
