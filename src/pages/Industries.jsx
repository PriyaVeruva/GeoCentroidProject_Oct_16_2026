import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

const sectors = [
  { title: 'Infrastructure', text: 'Support the planning, design, construction and maintenance of critical infrastructure assets.', points: ['BIM & Scan-to-BIM', '3D modelling & as-built surveys', 'Asset inspection & monitoring'] },
  { title: 'Architecture & Construction', text: 'Enable smarter construction with accurate digital models and site intelligence.', points: ['BIM & Scan-to-BIM', 'Quantity take-offs', 'Progress monitoring'] },
  { title: 'Transportation', text: 'Improve safety, efficiency and asset lifecycle management with geospatial and 3D models.', points: ['Corridor mapping & 3D models', 'Asset inventory & inspection', 'Digital twin for operations'] },
  { title: 'Energy & Utilities', text: 'Optimise operations, reduce risk and plan for a sustainable future with data-driven insights.', points: ['Site & asset mapping', 'Thermal & LiDAR surveys', 'Digital twin & risk analysis'] },
  { title: 'Oil & Gas', text: 'Enhance safety, efficiency and compliance with accurate 3D and geospatial intelligence.', points: ['Asset mapping & inspection', 'Facility modelling', 'Environmental monitoring'] },
  { title: 'Manufacturing', text: 'Drive operational excellence with precise data, asset visibility and process optimisation.', points: ['Facility modelling & mapping', 'Asset inspection', 'Digital twin & analytics'] },
]

export default function Industries() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Industries</p>
          <h1>Industry-Focused Digital Solutions</h1>
          <p>We deliver tailored geospatial, BIM and digital twin solutions across a range of industries, helping organisations improve visibility, efficiency and decision-making.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>Specialised Expertise Across Key Sectors</h2>
          <div className="card-grid">
            {sectors.map((item) => (
              <article className="media-card" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p className="section-lead">{item.text}</p>
                  <ul className="check-list" style={{ marginTop: 12 }}>
                    {item.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Link className="link-arrow" to="/contact" style={{ display: 'inline-block', marginTop: 12 }}>Learn more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Let’s Build a Smarter Future, Together" text="Get in touch with our team to discuss how our industry-specific solutions can help you achieve your goals." action="Request a Quote" />
    </>
  )
}
