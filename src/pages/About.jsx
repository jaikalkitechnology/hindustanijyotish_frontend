import './StaticPage.css'

function About() {
  return (
    <section className="section static-page">
      <div className="container">
        <p className="eyebrow center">About Us</p>
        <h1 className="center">Guiding You With Vedic Wisdom</h1>
        <p className="lead center">
          Hindustani Jyotish brings together traditional Vedic astrology and a modern,
          approachable consultation experience — helping clients find clarity on
          career, relationships, health and major life decisions.
        </p>

        <div className="grid grid-2" style={{ marginTop: 48 }}>
          <div className="card">
            <h3>Our Approach</h3>
            <p>
              Every consultation begins with a detailed birth chart analysis based on
              accurate birth date, time and place. We combine classical Vedic
              principles with clear, practical explanations so you understand not
              just the "what" but the "why" behind our guidance.
            </p>
          </div>
          <div className="card">
            <h3>Our Experience</h3>
            <p>
              Our astrologers have years of experience across kundli reading,
              matchmaking, career astrology and remedial guidance, having worked
              with clients across India and abroad.
            </p>
          </div>
        </div>

        <div className="grid grid-4" style={{ marginTop: 48 }}>
          <div className="stat-card">
            <strong>1000+</strong>
            <span>Consultations</span>
          </div>
          <div className="stat-card">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat-card">
            <strong>500+</strong>
            <span>Kundli Matches</span>
          </div>
          <div className="stat-card">
            <strong>4.8/5</strong>
            <span>Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
