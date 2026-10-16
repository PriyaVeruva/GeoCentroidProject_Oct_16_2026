import QuoteForm from '../components/forms/QuoteForm.jsx'
import { Icon } from '../components/ui/Icons.jsx'
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
      <section className="section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="section-title">We’d love to hear from you.</h2>
            <p className="section-lead" style={{ marginTop: 12 }}>
              Whether you’re exploring ideas, need expert guidance, or ready to start your next project, reach out — we’re just a message away.
            </p>
            <div className="contact-item"><span className="el-icon"><Icon name="mail" /></span><div><strong>Email Us</strong><p>info@geocentroid.com</p></div></div>
            <div className="contact-item"><span className="el-icon"><Icon name="phone" /></span><div><strong>Call Us</strong><p>+91 120 456 7890 · Mon – Fri, 9:00 AM – 6:00 PM (IST)</p></div></div>
            <div className="contact-item"><span className="el-icon"><Icon name="loc" /></span><div><strong>Office Address</strong><p>GeoCentroid Solutions Pvt. Ltd.<br />A-123, Sector 62, Noida, Uttar Pradesh – 201309, India</p></div></div>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </>
  )
}
