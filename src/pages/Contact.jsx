import QuoteForm from '../components/forms/QuoteForm.jsx'
import { Icon } from '../components/ui/Icons.jsx'
import { company } from '../data/company.js'
import '../styles/pages.css'

export default function Contact() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Contact Us</p>
          <h1>Let’s Build Something Great Together</h1>
          <p>Have a project in mind? Our team is here to help you find the right solutions for your BIM, Geospatial and Digital Twin needs.</p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container">
          <figure className="contact-office">
            <img
              src="/images/office.png"
              alt="GeoCentroid office at RS Arcade, Nagarabhavi, Bengaluru"
            />
            <figcaption>
              <strong>Our Bengaluru office</strong>
              <span>
                {company.legalName} · {company.addressLines[0]}, {company.addressLines[1]}
              </span>
            </figcaption>
          </figure>
          <div className="contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Get in Touch</p>
            <h2 className="section-title">We’d love to hear from you.</h2>
            <p className="section-lead contact-intro">
              Whether you’re exploring ideas, need expert guidance, or ready to start your next project, reach out — we’re just a message away.
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon"><Icon name="mail" /></span>
                <div>
                  <strong>Email Us</strong>
                  <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><Icon name="phone" /></span>
                <div>
                  <strong>Call Us</strong>
                  <p><a href={company.phoneHref}>{company.phone}</a> · {company.hours}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><Icon name="loc" /></span>
                <div>
                  <strong>Office Address</strong>
                  <p>
                    {company.legalName}<br />
                    {company.addressLines[0]}<br />
                    {company.addressLines[1]}
                  </p>
                </div>
              </div>
            </div>
            <dl className="contact-legal">
              <div>
                <dt>GSTIN</dt>
                <dd>{company.gstin}</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{company.cin}</dd>
              </div>
            </dl>
          </div>
          <QuoteForm compact />
          </div>
        </div>
      </section>
    </>
  )
}
