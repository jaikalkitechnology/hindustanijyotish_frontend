import { Link } from 'react-router-dom'
import './Home.css'

const SERVICES = [
  { icon: '🪐', title: 'Kundli / Birth Chart', desc: 'Detailed Vedic birth chart analysis covering career, health, wealth and relationships.' },
  { icon: '💞', title: 'Kundli Milan', desc: 'Guna milan and compatibility matching for marriage using traditional Vedic methods.' },
  { icon: '💼', title: 'Career & Business', desc: 'Astrological guidance for career direction, job changes and business timing.' },
  { icon: '💎', title: 'Gemstone Guidance', desc: 'Personalised gemstone recommendations based on your planetary positions.' },
  { icon: '🏠', title: 'Vastu Consultation', desc: 'Vastu Shastra review for homes and offices to bring balance and prosperity.' },
  { icon: '🔮', title: 'Remedial Astrology', desc: 'Practical remedies — mantras, rituals and pujas — tailored to your chart.' },
]

const STEPS = [
  { step: '01', title: 'Share Your Details', desc: 'Provide your date, time and place of birth for an accurate chart.' },
  { step: '02', title: 'Chart Analysis', desc: 'Our astrologers study your planetary positions and dashas in depth.' },
  { step: '03', title: 'Personal Consultation', desc: 'Discuss your questions in a one-on-one session, online or in person.' },
  { step: '04', title: 'Guidance & Remedies', desc: 'Receive practical, actionable guidance and remedies going forward.' },
]

const TESTIMONIALS = [
  { name: 'Priya S.', text: 'The consultation gave me real clarity about my career decisions. Highly recommended.' },
  { name: 'Rohit M.', text: 'Very detailed kundli milan report before our marriage. Everything explained patiently.' },
  { name: 'Anita K.', text: 'Practical remedies that were easy to follow, and genuinely helpful guidance.' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Vedic Astrology &amp; Guidance</p>
            <h1>Discover the Path Written in Your Stars</h1>
            <p className="hero-lead">
              Authentic Vedic astrology consultations — kundli analysis, matchmaking,
              career guidance and remedies — to help you make confident decisions.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn">Book a Consultation</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb">✦</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive Vedic astrology services tailored to your questions and life stage.
          </p>
          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <div className="card service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, guided process from your first message to lasting clarity.</p>
          <div className="grid grid-4">
            {STEPS.map((s) => (
              <div className="step-card" key={s.step}>
                <span className="step-number">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="grid grid-3">
            {TESTIMONIALS.map((t) => (
              <div className="card testimonial-card" key={t.name}>
                <p>&ldquo;{t.text}&rdquo;</p>
                <strong>{t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Ready to Understand Your Chart?</h2>
          <p>Book a one-on-one consultation with our astrologers today.</p>
          <Link to="/contact" className="btn">Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default Home
