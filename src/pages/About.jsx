import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import { Icon } from '../components/ui/Icons.jsx'
import '../styles/pages.css'

const reasons = [
  {
    title: 'Advanced Technology',
    text: 'We use industry-leading tools and platforms to deliver high-accuracy models and future-ready solutions.',
    icon: 'chip',
  },
  {
    title: 'Experienced Team',
    text: 'Our skilled professionals bring deep domain knowledge and hands-on expertise across industries.',
    icon: 'users',
  },
  {
    title: 'Quality & Accuracy',
    text: 'We follow rigorous quality processes to ensure reliable, precise and consistent deliverables.',
    icon: 'shield',
  },
  {
    title: 'Client-Centric Approach',
    text: 'We work as an extension of your team, focusing on your goals, timelines and long-term success.',
    icon: 'handshake',
  },
  {
    title: 'Global Presence',
    text: 'We serve clients across multiple countries, delivering local support with a global outlook.',
    icon: 'globe',
  },
]

export default function About() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>About Us</p>
          <h1>Shaping a Smarter and More Connected World</h1>
          <p>
            GeoCentroid is a global technology company delivering high-precision geospatial and digital engineering solutions. We turn real-world data into intelligent insights that help industries plan, build and operate more efficiently.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About GeoCentroid</p>
            <h2 className="section-title">Engineering Today for a Smarter Tomorrow</h2>
            <p className="section-lead" style={{ marginTop: 14 }}>
              Founded with a vision to bridge the gap between the physical and digital worlds, GeoCentroid provides integrated solutions across BIM, GIS, LiDAR, drone mapping and digital twin technologies.
            </p>
            <p className="section-lead" style={{ marginTop: 12 }}>
              With a team of skilled professionals and a client-first approach, we help organisations across the globe unlock the value of geospatial and digital data — from complex infrastructure projects to large-scale industrial operations.
            </p>
            <div style={{ marginTop: 20 }}>
              <Button to="/contact">Learn More About Us</Button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Digital city" />
            <aside className="float-card about-toggle">
              <span>Real World</span>
              <small>→</small>
              <span>Digital Twin</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Vision & Mission</p>
          <h2 className="section-title" style={{ marginBottom: 24 }}>Our Vision & Mission</h2>
          <div className="about-vm-grid">
            <article className="about-vm-card">
              <span className="about-icon"><Icon name="eye" size={22} /></span>
              <h3>Our Vision</h3>
              <p>
                A trusted global partner in geospatial and digital engineering solutions — enabling organisations to build a more sustainable, connected and resilient future.
              </p>
            </article>
            <article className="about-vm-card">
              <span className="about-icon"><Icon name="target" size={22} /></span>
              <h3>Our Mission</h3>
              <p>
                Delivering accurate data. Creating lasting value. We combine advanced technology, domain expertise and a customer-centric approach to enable better decision-making.
              </p>
            </article>
            <aside className="about-vm-panel">
              <h3>Better Data. Smarter Decisions. A Sustainable Future.</h3>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why GeoCentroid</p>
          <h2 className="section-title" style={{ marginBottom: 8 }}>Why GeoCentroid</h2>
          <p className="section-lead" style={{ marginBottom: 32 }}>
            Our strength lies in our people, technology and commitment to excellence.
          </p>
          <div className="about-why-row">
            {reasons.map((item) => (
              <article className="about-why-item" key={item.title}>
                <span className="about-icon"><Icon name={item.icon} size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Your Partner in Geospatial and Digital Engineering"
        text="Whether you’re planning a new project or looking to optimise existing assets, we’re here to turn complex data into meaningful results."
        action="Request a Quote"
      />
    </>
  )
}
