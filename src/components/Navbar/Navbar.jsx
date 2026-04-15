import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: "What We're Building", href: '#what-we-building' },
  { label: 'What We Need', href: '#what-we-need' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Get In Touch', href: '#get-in-touch' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ['about', 'what-we-building', 'what-we-need', 'the-team', 'timeline', 'get-in-touch']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 80) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="HackYourFuture Denmark — go to top">
          <span className={styles.logoHyf}>HYF</span>
          <span className={styles.logoDenmark}>Denmark</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className={styles.navLinks} role="list">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.mobileLink} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
