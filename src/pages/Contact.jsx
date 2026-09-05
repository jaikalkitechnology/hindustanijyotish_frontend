import { useState } from 'react'
import './StaticPage.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section static-page">
      <div className="container">
        <p className="eyebrow center">Contact</p>
        <h1 className="center">Book a Consultation</h1>
        <p className="lead center">
          Fill in the form below with your birth details and query, or reach us
          directly using the contact information alongside.
        </p>

        <div className="grid grid-2" style={{ marginTop: 48, alignItems: 'start' }}>
          <div className="card">
            {submitted ? (
              <p>Thank you! We will get back to you shortly.</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" />
                </label>
                <label>
                  Date of Birth
                  <input type="date" name="dob" />
                </label>
                <label>
                  Service
                  <select name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Kundli / Birth Chart Reading</option>
                    <option>Kundli Milan (Matchmaking)</option>
                    <option>Career &amp; Business Astrology</option>
                    <option>Gemstone Recommendation</option>
                    <option>Vastu Consultation</option>
                    <option>Remedial Astrology</option>
                  </select>
                </label>
                <label>
                  Your Message
                  <textarea name="message" required />
                </label>
                <button type="submit" className="btn">Send Request</button>
              </form>
            )}
          </div>

          <div className="card">
            <h3>Contact Details</h3>
            <ul className="contact-info-list">
              <li>📍 Address line, City, State, India</li>
              <li>📞 +91 00000 00000</li>
              <li>✉️ info@hindustanijyotish.com</li>
              <li>🕒 Mon – Sat: 10:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
