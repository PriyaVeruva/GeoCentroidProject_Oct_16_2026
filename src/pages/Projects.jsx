import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectFilters, projects } from '../data/projects.js'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function Projects() {
  const [filter, setFilter] = useState('All Projects')
  const list = useMemo(() => {
    if (filter === 'All Projects') return projects
    return projects.filter((item) => item.tag === filter)
  }, [filter])

  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Our Projects</p>
          <h1>Real Projects. Measurable Results.</h1>
          <p>From complex infrastructure to industrial assets, our projects showcase the power of integrated digital solutions in solving real-world challenges.</p>
          <div className="stats">
            <div className="stat"><strong>450+</strong><span>Projects Delivered</span></div>
            <div className="stat"><strong>15+</strong><span>Countries</span></div>
            <div className="stat"><strong>10+</strong><span>Years of Experience</span></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-row">
            {projectFilters.map((item) => (
              <button key={item} className={`chip ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {list.map((item) => (
              <Link className="media-card" to={`/projects/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div>
                  <p className="eyebrow">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p className="section-lead">{item.meta}</p>
                  <p className="media-card-blurb">{item.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Let’s Build Something Together" text="Share your project requirements and our team will get back to you with the right solution." action="Request a Quote" />
    </>
  )
}
