import { useState, useEffect, useCallback } from 'react'
import styles from './Slideshow.module.css'

// Google Drive images — direct embed via thumbnail endpoint
const slides = [
  { id: '1AQlKU_6fo1iU2WF9sFDDQgTD_MY-yDlj', alt: 'HYF final project screenshot 1' },
  { id: '114NiZZxJ8IPz_pBg1ancGKv0sHxhXXdX', alt: 'HYF final project screenshot 2' },
  { id: '1qGdJRw1m9To7r0JFOzXAuE158VO2nWdF',  alt: 'HYF final project screenshot 3' },
  { id: '1LjV-O7T53IiYMvX1y9FxoPaAXrD0eWED',  alt: 'HYF final project screenshot 4' },
  { id: '1SHVLCPhYfkZ_qRkq-wQ50fN_XbwzNM2j',  alt: 'HYF final project screenshot 5' },
  { id: '146MVdjVXamx4ZxwK_ryZtPWdurFD7150',  alt: 'HYF final project screenshot 6' },
  { id: '1S4_Rv8bEiJYhWnnbI7A4S1uZerR1MEjv',  alt: 'HYF final project screenshot 7' },
  { id: '1JAuctr6F-8nqbmE6cbgPW8OdNHY_MA8k',  alt: 'HYF final project screenshot 8' },
  { id: '1ElYePUrYxB5srYJeFGos_kgKLlVo6AcO',  alt: 'HYF final project screenshot 9' },
  { id: '1UjrgfcH2u0WHGA6nNLZ1lKO53dWMKA_H',  alt: 'HYF final project screenshot 10' },
]

function driveUrl(id) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`
}

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance every 4 seconds unless paused
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <figure
      className={styles.slideshow}
      aria-label="Past project screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.track}>
        {slides.map(({ id, alt }, i) => (
          <div
            key={id}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            aria-hidden={i !== current}
          >
            <img
              src={driveUrl(id)}
              alt={alt}
              className={styles.img}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={() => { prev(); setPaused(true) }}
        aria-label="Previous screenshot"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12.5 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={() => { next(); setPaused(true) }}
        aria-label="Next screenshot"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { setCurrent(i); setPaused(true) }}
          />
        ))}
      </div>

      <figcaption className={styles.counter}>
        {current + 1} / {slides.length}
      </figcaption>
    </figure>
  )
}
