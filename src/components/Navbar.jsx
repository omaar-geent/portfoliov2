import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineBars3, HiOutlineXMark, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Luxottica', path: '/experience' },
  { name: 'Progetti', path: '/projects' },
  { name: 'Servizi', path: '/services' },
  { name: 'Contatti', path: '/contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  // Chiudi menu quando cambia route
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Rileva scroll per effetto blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-display font-bold">
              <span className="text-accent">O</span>
              <span className="text-dark-900 dark:text-white">mar</span>
            </span>
            <span className="hidden sm:block text-sm text-dark-500 dark:text-light-300 font-mono">
              .dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-dark-700 dark:text-light-300 hover:text-accent'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300 hover:text-accent dark:hover:text-accent transition-colors"
            aria-label="Cambia tema"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineSun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineMoon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Desktop */}
          <Link 
            to="/contact" 
            className="hidden lg:flex btn-primary text-sm"
          >
            Parliamone
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark-700 dark:text-light-300"
            aria-label="Menu"
          >
            {isOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass border-t border-light-200 dark:border-dark-600"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-accent/10 text-accent'
                        : 'text-dark-700 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 mt-2 border-t border-light-200 dark:border-dark-600"
              >
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Parliamone
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
