import styles from './WhatWeNeed.module.css'
import Slideshow from '../Slideshow/Slideshow.jsx'

const youBring = [
  'A real product idea or an existing project that needs a frontend',
  'A Figma design (or willingness to define one early)',
  'One point of contact who can review pull requests or give feedback',
  'Attendance at kick-off (half-day) and final presentation (half-day)',
]

const flexible = [
  'Exact tech decisions — agreed at kick-off with the team',
  'The scope — we help define what\'s achievable in 4–5 weeks',
  'No payment required. This is a collaboration, not a commission.',
]

export default function WhatWeNeed() {
  return (
    <section id="what-we-need" className={styles.section} aria-labelledby="what-we-need-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Partner Requirements</span>
          <h2 id="what-we-need-heading">What We're Looking For in a Partner</h2>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <CheckIcon /> You bring
            </h3>
            <ul className={styles.list} role="list">
              {youBring.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FlexIcon /> Flexible
            </h3>
            <ul className={styles.list} role="list">
              {flexible.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.bulletFlex} aria-hidden="true">◦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={styles.callout} aria-label="Past experience">
          <p>
            <strong>We've done this before.</strong> Past teams have built for Tantakuy — a competition
            platform — and other Aarhus-based companies. The work speaks for itself.
          </p>
        </aside>

        <div className={styles.slideshowSection}>
          <p className={styles.slideshowLabel}>From past final projects</p>
          <Slideshow />
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FlexIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
