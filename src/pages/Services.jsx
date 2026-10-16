import { Link } from 'react-router-dom'
import { megaMenu } from '../data/navigation.js'
import { serviceOverview } from '../data/services.js'
import { Icon } from '../components/ui/Icons.jsx'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">Home / <span>Services</span></p>
          <p className="eyebrow">What We Do</p>
          <h1 className="section-title">Integrated BIM, Geospatial and Digital Twin Services</h1>
          <p className="section-lead" style={{ marginTop: 14 }}>
            From structural BIM and Scan-to-BIM through CAD engineering, geospatial mapping and digital twins — GeoCentroid delivers coordinated, information-rich models that improve design, construction and operations.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container overview-grid">
          {serviceOverview.map((item) => (
            <article className="overview-card" key={item.title}>
              <span className="el-icon"><Icon name="cube" size={20} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="link-arrow" to={item.to}>Explore →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>Browse by Discipline</h2>
          <div className="overview-grid">
            {megaMenu.map((col) => (
              <article className="overview-card" key={col.title}>
                <h3 style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Icon name={col.icon} size={18} /> {col.title}
                </h3>
                {col.items.map((item) => (
                  <Link key={item.label} to={item.to} className="link-arrow" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                    {item.label} <span>›</span>
                  </Link>
                ))}
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Button to="/quote">Request a Quote</Button>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a BIM or CAD project in mind?"
        text="Let’s discuss your requirements and find the right solution for your project."
        action="Request a Quote"
      />
    </>
  )
}
