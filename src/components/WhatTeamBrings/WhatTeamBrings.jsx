import styles from './WhatTeamBrings.module.css'

const stats = [
  {
    number: '4–5',
    unit: 'developers per team',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.75" fill="none"/>
        <circle cx="20" cy="9" r="4" stroke="currentColor" strokeWidth="1.75" fill="none"/>
        <path d="M2 23c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
        <path d="M22 16c2.5 0.5 4 2.5 4 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: '7',
    unit: 'months of training before final project',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" fill="none"/>
        <path d="M3 11h22" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M9 3v4M19 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M8 16h4M8 20h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 'Agile',
    unit: 'workflow with daily stand-ups, weekly sprints and PR reviews',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
        <path d="M14 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10v4l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 'Mentors',
    unit: 'available throughout the project',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
        <path d="M14 3L17.5 11.5L27 12.5L20.5 18.5L22.5 27L14 22.5L5.5 27L7.5 18.5L1 12.5L10.5 11.5L14 3Z" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhatTeamBrings() {
  return (
    <section id="the-team" className={styles.section} aria-labelledby="team-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Who You Work With</span>
          <h2 id="team-heading">The Team You Get</h2>
        </div>

        <p className={styles.intro}>
          A team of 4–5 trainees who are weeks away from finishing a 7-month intensive
          frontend program. They've been coding full-time on weekends for months. Most
          have professional or academic backgrounds before HYF. They are not beginners
          who happen to code.
        </p>

        <div className={styles.statsGrid}>
          {stats.map(({ number, unit, icon }) => (
            <div key={unit} className={styles.statCard}>
              <div className={styles.statIcon}>{icon}</div>
              <div className={styles.statNumber}>{number}</div>
              <div className={styles.statUnit}>{unit}</div>
            </div>
          ))}
        </div>

        <div className={styles.methodNote}>
          <p>
            The team follows Agile methods. They run their own stand-ups, manage a Trello
            board, submit pull requests, and do code reviews. You don't need to manage
            them. Just stay available for feedback.
          </p>
        </div>
      </div>
    </section>
  )
}
