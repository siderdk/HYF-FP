import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.decorativeGrid} aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span>Frontend Course</span>
          <span className={styles.badgeDivider}>·</span>
          <span>Aarhus</span>
          <span className={styles.badgeDivider}>·</span>
          <span>2026</span>
        </div>

        <h1 className={styles.headline}>
          Build Something Real.<br />
          With Developers<br className={styles.mobileBreak} /> Who Mean It.
        </h1>

        <p className={styles.subheadline}>
          HackYourFuture Aarhus is looking for a company partner for our next
          frontend final project. A real brief, a real team, a real result.
        </p>

        <div className={styles.ctas}>
          <a href="#get-in-touch" className={styles.btnPrimary}>
            Get In Touch
          </a>
          <a href="#timeline" className={styles.btnSecondary}>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}
