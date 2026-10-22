import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import { Icon } from '../components/ui/Icons.jsx'
import QuoteForm from '../components/forms/QuoteForm.jsx'
import { company } from '../data/company.js'
import { featuredProjects, heroPills, industries, solutions, whyUs } from '../data/home.js'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow" style={{ color: '#8cbcff' }}>Integrated Digital Engineering Solutions</p>
            <h1>From Reality to Digital Intelligence.</h1>
            <p>
              We combine BIM, Geospatial, Reality Capture and Digital Twin technologies to help you plan, design, build and operate smarter, safer and more sustainable assets.
            </p>
            <div className="hero-actions">
              <Button to="/services">Explore Our Solutions</Button>
              <Button to="/quote" variant="outline">Discuss Your Project</Button>
            </div>
          </div>
          <div className="hero-pills">
            {heroPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="solutions-head">
            <div>
              <p className="eyebrow">Our Integrated Solutions</p>
              <h2 className="section-title">Technology. Expertise. Real Impact.</h2>
            </div>
            <p className="section-lead">
              End-to-end digital solutions that turn complex data into actionable insights, enabling better decisions and greater project value.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <Link className="solution-card" to={item.to} key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-band">
        <div className="container">
          <div className="band-head">
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h2 className="section-title">Real Projects. Measurable Results.</h2>
              <p>
                From complex infrastructure to industrial assets, our projects showcase the power of integrated digital solutions in solving real-world challenges.
              </p>
            </div>
            <Button to="/projects">View All Projects</Button>
          </div>
          <div className="project-cards">
            {featuredProjects.map((project) => (
              <Link className="project-card" to="/projects" key={project.title}>
                <img src={project.image} alt="" />
                <div className="project-card-body">
                  <small>{project.tag}</small>
                  <h3>{project.title}</h3>
                  <p>{project.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="band-head light">
            <div>
              <p className="eyebrow">Industries We Serve</p>
              <h2 className="section-title">Across Every Sector</h2>
              <p className="section-lead">
                We support a wide range of industries with tailored digital solutions for complex and evolving needs.
              </p>
            </div>
            <Button to="/industries">Explore All Industries</Button>
          </div>
          <div className="industry-grid">
            {industries.map((item) => (
              <Link className="industry-chip" to="/industries" key={item.label}>
                <span><Icon name={item.icon} size={22} /></span>
                <strong>{item.label}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="band-head light">
            <div>
              <p className="eyebrow">Why GeoCentroid</p>
              <h2 className="section-title">Your Trusted Digital Engineering Partner</h2>
            </div>
            <p className="section-lead">
              We bring together domain expertise, advanced technology and a commitment to quality to deliver solutions that make a difference.
            </p>
          </div>
          <div className="why-layout">
            <div className="why-points">
              {whyUs.map((item) => (
                <article key={item.title}>
                  <span className="icon-bubble"><Icon name={item.icon} size={18} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="testimonial-card">
              <p>
                GeoCentroid’s team delivers high-quality BIM models with unmatched accuracy and care. Their professionalism and technical expertise made our project a huge success.
              </p>
              <strong>Construction Client</strong>
            </aside>
          </div>
        </div>
      </section>

      <section className="quote-wrap">
        <div className="container quote-grid">
          <div>
            <h2>Let’s Build Something Together</h2>
            <p>Share your project requirements and our team will get back to you with the right solution.</p>
            <div className="contact-mini">
              <span>{company.email}</span>
              <span>{company.phone}</span>
              <span>Bengaluru</span>
            </div>
          </div>
          <QuoteForm />
          <div className="profile-card">
            <h3>Download Company Profile</h3>
            <p>Learn more about our capabilities, experience and success stories.</p>
            <div style={{ marginTop: 16 }}>
              <Button variant="outline" href="/images/image48.jpeg" withArrow={false}>Download PDF</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
