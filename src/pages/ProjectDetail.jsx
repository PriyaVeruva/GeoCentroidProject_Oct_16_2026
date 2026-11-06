import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <Navigate to="/projects" replace />

  const others = projects.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/projects">Projects</Link> / <span>{project.title}</span>
            </p>
            <p className="eyebrow">{project.tag}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <p className="section-lead">{project.location} · {project.year}</p>
            <Button to="/quote">Discuss a similar project</Button>
          </div>
          <div className="hero-visual">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-body">
          <h2 className="section-title">Challenge</h2>
          <p>{project.challenge}</p>
          <h2 className="section-title">Approach</h2>
          <p>{project.approach}</p>
          <h2 className="section-title">Outcome</h2>
          <p>{project.outcome}</p>
          <h2 className="section-title">Services used</h2>
          <p>
            {project.services.map((item, i) => (
              <span key={item.to}>
                {i > 0 ? ' · ' : ''}
                <Link className="link-arrow" to={item.to}>{item.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>More projects</h2>
          <div className="overview-grid">
            {others.map((item) => (
              <Link className="overview-card" to={`/projects/${item.slug}`} key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
                <span className="link-arrow">View project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s Build Something Together"
        text="Share your project requirements and our team will get back to you with the right solution."
        action="Request a Quote"
      />
    </>
  )
}
