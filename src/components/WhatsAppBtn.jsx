import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineXMark } from 'react-icons/hi2'
import { contactInfo } from '../data/personal'

export default function WhatsAppBtn() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Mostra il pulsante dopo lo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mostra tooltip dopo qualche secondo (solo la prima volta)
  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, hasInteracted])

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    'Ciao Omar! Ho visto il tuo portfolio e vorrei parlarti di un progetto.'
  )}`

  const handleClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
  }

  const dismissTooltip = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    setHasInteracted(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="absolute bottom-full right-0 mb-3"
              >
                <div className="relative bg-white dark:bg-dark-700 rounded-xl shadow-xl p-4 max-w-[200px]">
                  <button
                    onClick={dismissTooltip}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-light-200 dark:bg-dark-600 rounded-full flex items-center justify-center text-dark-500 hover:text-dark-900 dark:hover:text-white transition-colors"
                  >
                    <HiOutlineXMark className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-dark-700 dark:text-light-200">
                    Hai un progetto in mente? Scrivimi su WhatsApp!
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-dark-700 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
            aria-label="Contattami su WhatsApp"
          >
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <FaWhatsapp className="w-7 h-7 relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
