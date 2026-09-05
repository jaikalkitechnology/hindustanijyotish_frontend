import { Link } from 'react-router-dom'
import './StaticPage.css'

const SERVICES = [
  {
    title: 'Kundli / Birth Chart Reading',
    price: '₹1,100',
    desc: 'A complete analysis of your Vedic birth chart covering personality, career, wealth, health and relationships, based on your exact birth date, time and place.',
  },
  {
    title: 'Kundli Milan (Matchmaking)',
    price: '₹1,500',
    desc: 'Guna milan compatibility report for marriage, comparing both charts across the traditional Ashtakoot system along with Mangal Dosha analysis.',
  },
  {
    title: 'Career & Business Astrology',
    price: '₹1,300',
    desc: 'Guidance on career direction, job changes, business timing and partnerships based on your planetary strengths and current dasha period.',
  },
  {
    title: 'Gemstone Recommendation',
    price: '₹900',
    desc: 'Personalised recommendation of gemstones suited to your chart, along with guidance on wearing, weight and mounting.',
  },
  {
    title: 'Vastu Consultation',
    price: '₹2,000',
    desc: 'Review of your home or office layout against Vastu Shastra principles, with practical suggestions to improve balance and prosperity.',
  },
  {
    title: 'Remedial Astrology',
    price: '₹800',
    desc: 'Practical remedies — mantras, rituals and simple daily practices — tailored to the challenging placements in your chart.',
  },
]

function Services() {
  return (
    <section className="section static-page">
      <div className="container">
        <p className="eyebrow center">Our Services</p>
        <h1 className="center">Vedic Astrology Services</h1>
        <p className="lead center">
          Choose a consultation that fits your question — from a full birth chart
          reading to focused guidance on marriage, career or remedies.
        </p>

        <div className="grid grid-3" style={{ marginTop: 48 }}>
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p className="price">{s.price}</p>
              <p>{s.desc}</p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: 16 }}>
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
