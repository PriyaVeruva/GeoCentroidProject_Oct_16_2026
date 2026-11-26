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

const coreValues = [
  {
    title: 'Quality Excellence',
    text: 'We are committed to delivering the highest standards of quality, accuracy and professionalism in every project, regardless of scale or complexity.',
    icon: 'check',
  },
  {
    title: 'Integrity & Transparency',
    text: 'We conduct our business with honesty, openness and accountability, building long-term trust with clients, partners and our teams.',
    icon: 'shield',
  },
  {
    title: 'Collaboration',
    text: 'We believe the best outcomes are achieved through teamwork, knowledge sharing and strong partnerships built on mutual respect.',
    icon: 'users',
  },
  {
    title: 'Innovation',
    text: 'We embrace new technologies, digital transformation and industry advancements to continually improve how we work and deliver value.',
    icon: 'chip',
  },
  {
    title: 'Accountability',
    text: 'We take ownership of our commitments, deliver on our promises and remain responsible for the quality and outcomes of our work.',
    icon: 'target',
  },
  {
    title: 'Continuous Improvement',
    text: 'We continually develop our skills, processes and capabilities to remain responsive to changing industry needs and emerging opportunities.',
    icon: 'gear',
  },
  {
    title: 'Sustainability',
    text: 'We strive to create solutions that contribute to a smarter, safer and more sustainable built environment for future generations.',
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
          GeoCentroid is a global technical services provider specializing in Engineering, BIM, Geospatial, and Digital Twin solutions, delivering intelligent, innovative, and data-driven approaches to transform the built environment worldwide.          </p>
        </div>
      </section>

      <section className="section">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About GeoCentroid</p>
            <h2 className="section-title">Engineering Today for a Smarter Tomorrow</h2>
            <p className="section-lead" style={{ marginTop: 14 }}>
            Empowering clients across global markets, we deliver integrated solutions for the Architecture, Engineering, Construction, Infrastructure, Transportation, Utilities, Energy, Property and Heritage sectors. By combining engineering expertise with advanced digital technologies, we enhance project delivery, operational efficiency and asset performance throughout the entire asset lifecycle.
            </p>
            <p className="section-lead" style={{ marginTop: 12 }}>
            Our multidisciplinary capabilities encompass BIM, Digital Engineering, Geospatial Solutions, Reality Capture, Digital Twins, GIS, LiDAR and Advanced Visualisation. Through connected digital environments and innovative approaches, we strengthen collaboration, minimise risks and enable informed decision-making from planning and design through construction, operations and asset management.            </p>
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
              <img
                className="about-vm-media"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
                alt="Connected cities across the globe at night"
                loading="lazy"
              />
              <span className="about-icon"><Icon name="eye" size={22} /></span>
              <h3>Our Vision</h3>
              <p>
              To be a global leader in BIM, Digital Engineering, Geospatial Intelligence and Digital Twin solutions, shaping a smarter, connected and sustainable future.              </p>
            </article>
            <article className="about-vm-card">
              <img
                className="about-vm-media"
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="Engineer reviewing design drawings"
                loading="lazy"
              />
              <span className="about-icon"><Icon name="target" size={22} /></span>
              <h3>Our Mission</h3>
              <p>
              To deliver high-quality Engineering, BIM, Geospatial and Digital Twin solutions through technical excellence, integrity, transparency and innovation, supporting the planning, design, construction and operation of assets throughout their lifecycle while creating sustainable value for our clients, teams and communities.              </p>
            </article>
            <aside className="about-vm-panel">
              <h3>Better Data. Smarter Decisions. A Sustainable Future.</h3>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What Drives Us</p>
          <h2 className="section-title" style={{ marginBottom: 8 }}>Our Core Values</h2>
          <p className="section-lead" style={{ marginBottom: 32 }}>
            The principles that guide how we work, deliver and grow with our clients.
          </p>
          <div className="about-values-grid">
            {coreValues.map((item) => (
              <article className="about-value-card" key={item.title}>
                <span className="about-icon"><Icon name={item.icon} size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container about-culture-grid">
          <div className="about-culture-visual">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="GeoCentroid team collaborating"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Our Culture</p>
            <h2 className="section-title">A Culture of Quality and Collaboration</h2>
            <p className="section-lead" style={{ marginTop: 14 }}>
              At GeoCentroid, we foster a culture built on quality, transparency, collaboration and continuous improvement. We encourage innovation, professional growth and knowledge sharing, creating an environment where our teams can thrive and adapt to evolving industry demands.
            </p>
            <p className="section-lead" style={{ marginTop: 12 }}>
              By investing in people, technology and best practices, we build a resilient organisation capable of delivering consistent value to our clients while creating long-term opportunities for growth and success.
            </p>
            <div className="about-commitment">
              <span className="about-icon"><Icon name="handshake" size={22} /></span>
              <div>
                <h3>Our Commitment</h3>
                <p>
                  We are committed to delivering quality without compromise, operating with transparency and integrity, embracing innovation, and building trusted partnerships that create lasting value for our clients, teams and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-motto">
        <div className="container">
          <p className="eyebrow">Company Motto</p>
          <blockquote>Engineering Excellence Built on Quality, Integrity and Innovation.</blockquote>
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
