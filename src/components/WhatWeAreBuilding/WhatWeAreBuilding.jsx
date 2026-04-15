import styles from './WhatWeAreBuilding.module.css'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 13l4 4-4 4M15 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'A real product',
    text: 'Trainees build a working frontend application based on your design brief. Not a tutorial. Not a sandbox. Something deployable.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Frontend-first',
    text: 'The tech stack is React, React Router, external API integration, and responsive design. Teams have covered this for 7+ months before the final project.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 3L20.5 12.5L31 14L23 21.5L24.9 32L16 27L7.1 32L9 21.5L1 14L11.5 12.5L16 3Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Yours to keep',
    text: 'The codebase lives in a public GitHub repo. You own the IP. Trainees can reference the work in their portfolios. That is the deal.',
  },
]

const techTags = [
  'React',
  'React Router',
  'JavaScript (ES6+)',
  'HTML/CSS',
  'Git',
  'Responsive Design',
  'REST APIs',
  'Component Architecture',
  'Agile/Scrum',
]

export default function WhatWeAreBuilding() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <span id="what-we-building" style={{ position: 'absolute', top: '-64px' }} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Program</span>
          <h2 id="about-heading">What the Final Project Is</h2>
        </div>

        <div className={styles.grid}>
          {features.map(({ icon, heading, text }) => (
            <article key={heading} className={styles.card}>
              <div className={styles.iconWrap}>{icon}</div>
              <h3>{heading}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className={styles.techRow}>
          <div className={styles.techRowHeader}>
            <p className={styles.techLabel}>Tech stack the team brings</p>
            <a
              href="https://program.hackyourfuture.dk/course-content/frontend"
              className={styles.curriculumLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full Frontend Course curriculum (opens in new tab)"
            >
              See full curriculum ↗
            </a>
          </div>
          <ul className={styles.tagList} role="list">
            {techTags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
