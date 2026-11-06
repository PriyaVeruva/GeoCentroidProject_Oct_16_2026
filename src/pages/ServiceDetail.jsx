import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/services.js'
import { industrySectors } from '../data/industries.js'
import { whyIcon } from '../data/whyIcons.js'
import { Icon } from '../components/ui/Icons.jsx'
import IndustryCard from '../components/ui/IndustryCard.jsx'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import '../styles/pages.css'

const crumbPaths = {
  Home: '/',
  Services: '/services',
  BIM: '/services/bim',
  'Scan to BIM': '/services/scan-to-bim',
  'CAD Engineering': '/services/cad-engineering',
  Geospatial: '/services/geospatial',
  'Digital Twin': '/services/digital-twin',
  'IT Services': '/services/it-services',
  AIM: '/services/aim',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services[slug]
  if (!service) return <Navigate to="/services" replace />

  const siblings = Object.values(services).filter(
    (item) => item.category === service.category && item.slug !== service.slug && !item.hub
  )

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="breadcrumb">
              {service.breadcrumb.map((crumb, i) => {
                const last = i === service.breadcrumb.length - 1
                const to = crumbPaths[crumb]
                return (
                  <span key={`${crumb}-${i}`}>
                    {i > 0 ? ' / ' : ''}
                    {last ? <span>{crumb}</span> : to ? <Link to={to}>{crumb}</Link> : crumb}
                  </span>
                )
              })}
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

      {service.children?.length ? (
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Explore {service.category} services
            </h2>
            <div className="overview-grid">
              {service.children.map((child) => (
                <Link className="overview-card" to={child.to} key={child.title}>
                  <h3>{child.title}</h3>
                  <p>{child.text}</p>
                  <span className="link-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 24 }}>{service.capabilitiesTitle}</h2>
          <div className="cap-grid">
            {service.capabilities.map((item) => {
              const body = (
                <>
                  <img src={item.image} alt="" />
                  <div>
                    <small>{item.n}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.to ? <span className="link-arrow">View service →</span> : null}
                  </div>
                </>
              )
              return item.to ? (
                <Link className="cap-card" to={item.to} key={item.title}>{body}</Link>
              ) : (
                <article className="cap-card" key={item.title}>{body}</article>
              )
            })}
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
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sectors</p>
              <h2 className="section-title">Industries We Support</h2>
              <p className="section-lead">
                The same coordinated BIM, survey and digital delivery applied across the sectors our clients operate in.
              </p>
            </div>
            <Button to="/industries">View all industries</Button>
          </div>
          <div className="industry-showcase">
            {industrySectors.slice(0, 6).map((item) => (
              <IndustryCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="why-head">
            <p className="eyebrow">Why GeoCentroid</p>
            <h2 className="section-title">Why Choose GeoCentroid</h2>
            <p className="section-lead">
              Practical reasons teams keep coming back — accuracy, coordination and delivery that fits the job.
            </p>
          </div>
          <div className="why-grid">
            {service.why.map((item, index) => (
              <article className="why-card" key={item.title}>
                <span className="el-icon" aria-hidden="true">
                  <Icon name={item.icon || whyIcon(item.title)} size={20} />
                </span>
                <div>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {!service.hub && siblings.length ? (
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Related {service.category}
            </h2>
            <div className="overview-grid">
              {siblings.map((item) => (
                <Link className="overview-card" to={`/services/${item.slug}`} key={item.slug}>
                  <h3>{item.name}</h3>
                  <p>{item.extra || item.intro}</p>
                  <span className="link-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title={service.bannerTitle}
        text={
          service.bannerText ||
          'Share your project scope, source data and delivery requirements with our team to discuss a suitable approach.'
        }
        action={service.cta}
      />
    </>
  )
}
