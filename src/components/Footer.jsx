import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'
import { contactInfo } from '../data/personal'

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: FaGithub, 
    url: contactInfo.github 
  },
  { 
    name: 'LinkedIn', 
    icon: FaLinkedinIn, 
    url: contactInfo.linkedin 
  }
]

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Progetti', path: '/projects' },
  { name: 'Servizi', path: '/services' },
  { name: 'Contatti', path: '/contact' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t border-light-200 dark:border-dark-700">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold">
                <span className="text-accent">O</span>
                <span className="text-dark-900 dark:text-white">mar</span>
                <span className="text-dark-500 dark:text-light-300">.dev</span>
              </span>
            </Link>
            <p className="text-dark-600 dark:text-light-300 max-w-md mb-6">
              Full Stack Developer & Web Designer. Creo esperienze digitali 
              per business locali e soluzioni enterprise.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-light-200 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-accent hover:text-dark-900 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-dark-900 dark:text-white mb-4">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-600 dark:text-light-300 hover:text-accent transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-dark-900 dark:text-white mb-4">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-dark-600 dark:text-light-300 hover:text-accent transition-colors group"
                >
                  <HiOutlineEnvelope className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-accent" />
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-600 dark:text-light-300">
                <HiOutlineMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-light-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500 dark:text-light-300">
              © {currentYear} Omar Gentilin. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-dark-500 dark:text-light-300">
              Realizzato con{' '}
              <span className="text-accent">React</span>
              {' '}+{' '}
              <span className="text-accent">Tailwind</span>
              {' '}+{' '}
              <span className="text-red-500">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
