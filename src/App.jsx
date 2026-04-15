import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import WhatWeAreBuilding from './components/WhatWeAreBuilding/WhatWeAreBuilding.jsx'
import WhatWeNeed from './components/WhatWeNeed/WhatWeNeed.jsx'
import WhatTeamBrings from './components/WhatTeamBrings/WhatTeamBrings.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--color-primary)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        zIndex: 200,
        transition: 'background 200ms ease',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--color-secondary)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--color-primary)'}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 15V5M5 10l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhatWeAreBuilding />
        <WhatWeNeed />
        <WhatTeamBrings />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
