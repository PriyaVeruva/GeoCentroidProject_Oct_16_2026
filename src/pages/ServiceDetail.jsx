import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/services.js'
import { Icon } from '../components/ui/Icons.jsx'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services[slug]
  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="breadcrumb">
              {service.breadcrumb.map((crumb, i) => (
                <span key={crumb}>
                  {i > 0 ? ' / ' : ''}
                  {i === service.breadcrumb.length - 1 ? <span>{crumb}</span> : crumb}
                </span>
              ))}
            </p>
            <h1>{service.name}</h1>
            <p>{service.intro}</p>
            {service.extra ? <p>{service.extra}</p> : null}
            <Button to="/quote">{service.cta}</Button>
          </div>
          <div className="hero-visual">
            <img src={service.heroImage} alt="" />
            <aside className="float-card">
              {service.heroNote.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>{service.capabilitiesTitle}</h2>
          <div className="cap-grid">
            {service.capabilities.map((item) => (
              <article className="cap-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <small>{item.n}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container elements-grid">
          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>{service.elementsTitle}</h2>
            <div className="element-cards">
              {service.elements.map((item) => (
                <article className="element-card" key={item.title}>
                  <span className="el-icon"><Icon name={item.icon} size={22} /></span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>{service.deliverablesTitle}</h2>
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container industry-support">
          <div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>Industries We Support</h2>
            <div className="industry-tiles">
              {service.industries.map((item) => (
                <Link className="industry-tile" to="/industries" key={item.title}>
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>Why Choose GeoCentroid</h2>
            <div className="why-list">
              {service.why.map((item) => (
                <article key={item.title}>
                  <span className="el-icon"><Icon name="cube" size={18} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="section-lead">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={service.bannerTitle}
        text="Share your drawings, BIM requirements and project scope with our team to discuss a suitable delivery approach."
        action={service.cta}
      />
    </>
  )
}
