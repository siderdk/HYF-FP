import styles from './Timeline.module.css'

const steps = [
  {
    number: 1,
    label: 'Kick-off',
    when: 'Week 1, Sunday',
    description:
      'You meet the team. Roles are assigned, the brief is confirmed, the Trello board is set up, and the team aligns on what "done" means.',
  },
  {
    number: 2,
    label: 'Weekly stand-ups',
    when: 'Every Sunday & Tuesday',
    description:
      'Every Sunday (in-person) and Tuesday (online). The team reports progress, flags blockers, and plans the next sprint. Mentor-supported.',
  },
  {
    number: 3,
    label: 'Midpoint check-in',
    when: 'Week 3',
    description:
      'A natural checkpoint around week 3. Good moment to review direction and give early feedback before code freeze.',
  },
  {
    number: 4,
    label: 'Code freeze',
    when: 'Week 4',
    description:
      'No major new features. The team focuses on bug fixes, polish, and deployment. The product is nearly final.',
  },
  {
    number: 5,
    label: 'Final presentation',
    when: 'Week 5, Sunday',
    description:
      'The team presents the deployed product to you. You give feedback. This is the handover.',
  },
]

const commitmentItems = [
  { label: 'Kick-off', value: '~4 hours' },
  { label: 'Weekly availability', value: 'Async, light' },
  { label: 'Final presentation', value: '~4 hours' },
]

export default function Timeline() {
  return (
    <section id="timeline" className={styles.section} aria-labelledby="timeline-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>The Process</span>
          <h2 id="timeline-heading">How It Works</h2>
        </div>

        <ol className={styles.timeline} role="list">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
            >
              <div className={styles.stepConnector} aria-hidden="true">
                <div className={styles.stepCircle}>
                  <span>{step.number}</span>
                </div>
                {index < steps.length - 1 && <div className={styles.stepLine} />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepWhen}>{step.when}</div>
                <h3 className={styles.stepLabel}>{step.label}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.commitmentBar} role="complementary" aria-label="Time commitment summary">
          <p className={styles.commitmentTitle}>Your time commitment</p>
          <div className={styles.commitmentItems}>
            {commitmentItems.map(({ label, value }, i) => (
              <div key={label} className={styles.commitmentItem}>
                <span className={styles.commitmentLabel}>{label}</span>
                <span className={styles.commitmentValue}>{value}</span>
                {i < commitmentItems.length - 1 && (
                  <span className={styles.commitmentDivider} aria-hidden="true">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
