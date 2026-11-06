import { Link, Navigate, useParams } from 'react-router-dom'
import { insights } from '../data/insights.js'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function InsightDetail() {
  const { slug } = useParams()
  const post = insights.find((item) => item.slug === slug)
  if (!post) return <Navigate to="/insights" replace />

  const others = insights.filter((item) => item.slug !== slug)

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/insights">Insights</Link> / <span>{post.title}</span>
            </p>
            <p className="eyebrow">{post.tag} · {post.date}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <Button to={post.relatedService.to}>{post.relatedService.label}</Button>
          </div>
          <div className="hero-visual">
            <img src={post.image} alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-body">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      {others.length ? (
        <section className="section section-soft">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: 24 }}>More insights</h2>
            <div className="overview-grid">
              {others.map((item) => (
                <Link className="overview-card" to={`/insights/${item.slug}`} key={item.slug}>
                  <p className="eyebrow">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="link-arrow">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="Have a question for our specialists?"
        text="Talk to the team about your next BIM, CAD or Scan-to-BIM assignment."
        action="Contact Us"
        to="/contact"
      />
    </>
  )
}
