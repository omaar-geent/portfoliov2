import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineArrowDown, HiOutlineArrowRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import { contactInfo, bio } from '../data/personal'

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent">Disponibile per nuovi progetti</span>
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
              >
                <span className="text-dark-900 dark:text-white">Ciao, sono </span>
                <span className="gradient-text text-shadow">Omar</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-dark-600 dark:text-light-300 mb-6"
              >
                {bio.short}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-dark-500 dark:text-light-300 max-w-lg mb-8"
              >
                {bio.medium}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link to="/projects" className="btn-primary">
                  Vedi i progetti
                  <HiOutlineArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contattami
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-dark-500 dark:text-light-300">Seguimi:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-light-300 dark:border-dark-600 text-dark-600 dark:text-light-300 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-light-300 dark:border-dark-600 text-dark-600 dark:text-light-300 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 relative flex justify-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" />
              </div>
              
              {/* Avatar container */}
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
                
                {/* Avatar image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <img
                    src="/images/avatar-thinking.png"
                    alt="Omar Gentilin Avatar"
                    className="w-64 h-auto md:w-80 lg:w-96 drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-10 -left-8 glass px-3 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-sm font-medium text-dark-700 dark:text-light-200">Python · FastAPI</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute top-1/3 -right-6 glass px-3 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-sm font-medium text-dark-700 dark:text-light-200">Docker · Proxmox</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-20 -left-4 glass px-3 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-sm font-medium text-dark-700 dark:text-light-200">Active Directory</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-sm text-dark-500 dark:text-light-300">Scorri</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiOutlineArrowDown className="w-5 h-5 text-accent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <SectionHeader
            label="Portfolio"
            title="Progetti Recenti"
            description="Una selezione dei miei lavori più recenti per business locali nel Veneto."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-secondary">
              Vedi tutti i progetti
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-dark-900 dark:bg-dark-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/avatar-waving.png"
              alt="Omar waving"
              className="w-32 h-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Hai un progetto in mente?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-light-300 max-w-xl mx-auto mb-8"
          >
            Raccontami la tua idea. Insieme la trasformeremo in qualcosa di concreto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Iniziamo a parlarne
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
