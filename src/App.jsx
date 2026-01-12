import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppBtn from './components/WhatsAppBtn'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp floating button */}
      <WhatsAppBtn />
    </div>
  )
}

export default App
