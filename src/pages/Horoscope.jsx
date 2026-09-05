import { useState } from 'react'
import './StaticPage.css'

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
]

function Horoscope() {
  const [selected, setSelected] = useState(SIGNS[0])

  return (
    <section className="section static-page">
      <div className="container">
        <p className="eyebrow center">Horoscope</p>
        <h1 className="center">Daily Horoscope</h1>
        <p className="lead center">
          Select your moon sign (Rashi) below to see today's outlook. For a
          personalised reading based on your full birth chart, book a consultation.
        </p>

        <div className="grid grid-4" style={{ marginTop: 40, marginBottom: 32 }}>
          {SIGNS.map((sign) => (
            <button
              key={sign}
              className={`card sign-btn ${selected === sign ? 'sign-btn--active' : ''}`}
              onClick={() => setSelected(sign)}
              type="button"
            >
              {sign}
            </button>
          ))}
        </div>

        <div className="card" style={{ maxWidth: 640, margin: '0 auto' }}>
          <h3>{selected} — Today's Outlook</h3>
          <p>
            This is a placeholder reading for {selected}. Replace this section with
            your real daily horoscope content or connect it to your horoscope data
            source / API.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Horoscope
