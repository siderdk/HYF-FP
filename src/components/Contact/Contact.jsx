import { useState } from 'react'
import styles from './Contact.module.css'

const initialForm = {
  company: '',
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to Formspree, Netlify Forms, or email provider
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="get-in-touch" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.label}>Get In Touch</span>
            <h2 id="contact-heading" className={styles.heading}>Let's Talk</h2>
            <p className={styles.subtext}>
              If this sounds like a fit — or if you're just curious — reach out. We're
              happy to explain the process, answer questions, or set up a quick call.
            </p>
            <a
              href="mailto:aarhus@hackyourfuture.dk"
              className={styles.emailLink}
              aria-label="Email HYF Aarhus directly"
            >
              aarhus@hackyourfuture.dk
            </a>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successMessage} role="status" aria-live="polite">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Thanks! We'll be in touch.</h3>
                <p>We'll get back within 2–3 working days.</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                noValidate
              >
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="company" className={styles.fieldLabel}>
                      Company name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      required
                      autoComplete="organization"
                      className={styles.input}
                      placeholder="Acme A/S"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="name" className={styles.fieldLabel}>
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className={styles.input}
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={styles.input}
                    placeholder="jane@company.dk"
                  />
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Project idea or message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your project or what you're curious about..."
                  />
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
                  <p className={styles.note}>
                    We'll get back within 2–3 working days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
