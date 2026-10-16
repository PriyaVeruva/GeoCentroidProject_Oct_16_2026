import { useMemo, useState } from 'react'
import { featuredProjects } from '../data/home.js'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

const extra = [
  { title: 'Coastal Survey & Bathymetry', tag: 'UAV & Drone Mapping', meta: 'UAE · Marine · 2022', image: '/images/image14.jpeg' },
  { title: 'Residential Tower – As-Built Model', tag: 'BIM & CAD', meta: 'Dubai, UAE · Construction · 2021', image: '/images/image12.jpeg' },
]

const filters = ['All Projects', 'BIM & CAD', 'Geospatial & GIS', 'LiDAR & Reality Capture', 'Digital Twin', 'UAV & Drone Mapping']

export default function Projects() {
  const [filter, setFilter] = useState('All Projects')
  const list = useMemo(() => {
    const all = [...featuredProjects, ...extra]
    if (filter === 'All Projects') return all
    return all.filter((p) => p.tag.includes(filter.split(' ')[0]) || p.tag === filter)
  }, [filter])

  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Our Projects</p>
          <h1>Real Projects. Measurable Results.</h1>
          <p>From complex infrastructure to industrial assets, our projects showcase the power of integrated digital solutions in solving real-world challenges.</p>
          <div className="stats" style={{ marginTop: 24 }}>
            <div className="stat"><strong>200+</strong><div>Projects Delivered</div></div>
            <div className="stat"><strong>15+</strong><div>Countries</div></div>
            <div className="stat"><strong>10+</strong><div>Years of Experience</div></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-row">
            {filters.map((item) => (
              <button key={item} className={`chip ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {list.map((item) => (
              <article className="media-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <p className="eyebrow">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p className="section-lead">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Let’s Build Something Together" text="Share your project requirements and our team will get back to you with the right solution." action="Request a Quote" />
    </>
  )
}
