import './StaticPage.css'

const POSTS = [
  {
    title: 'Understanding Your Birth Chart: A Beginner\'s Guide',
    date: 'March 2026',
    excerpt: 'An introduction to the twelve houses, planets and how they shape your Vedic birth chart.',
  },
  {
    title: 'What Is Kundli Milan and Why It Matters',
    date: 'February 2026',
    excerpt: 'A look at the Ashtakoot matching system used for marriage compatibility in Vedic astrology.',
  },
  {
    title: 'Simple Remedies for a Difficult Saturn Placement',
    date: 'January 2026',
    excerpt: 'Practical, everyday remedies to ease the effects of a challenging Shani placement.',
  },
  {
    title: 'Choosing the Right Gemstone for Your Chart',
    date: 'December 2025',
    excerpt: 'How gemstones are selected based on planetary strength, and what to consider before wearing one.',
  },
]

function Blog() {
  return (
    <section className="section static-page">
      <div className="container">
        <p className="eyebrow center">Blog</p>
        <h1 className="center">Articles &amp; Insights</h1>
        <p className="lead center">
          Notes on Vedic astrology, remedies and everyday guidance from our team.
        </p>

        <div className="grid grid-2" style={{ marginTop: 48 }}>
          {POSTS.map((post) => (
            <article className="card blog-card" key={post.title}>
              <span className="blog-meta">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
