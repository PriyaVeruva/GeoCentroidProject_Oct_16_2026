import { Link } from 'react-router-dom'
import { insights } from '../data/insights.js'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function Insights() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Insights</p>
          <h1>Ideas, methods and project lessons</h1>
          <p>Practical writing on BIM, geospatial workflows and digital engineering delivery.</p>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {insights.map((post) => (
            <Link className="overview-card" to={`/insights/${post.slug}`} key={post.slug}>
              <p className="eyebrow">{post.tag}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="link-arrow">Read article →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner title="Have a question for our specialists?" text="Talk to the team about your next BIM, CAD or Scan-to-BIM assignment." action="Contact Us" to="/contact" />
    </>
  )
}
