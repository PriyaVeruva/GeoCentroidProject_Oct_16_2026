import { Link } from 'react-router-dom'
import { footerColumns } from '../../data/navigation.js'
import { company } from '../../data/company.js'
import { Icon, Logo } from '../ui/Icons.jsx'
import '../../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              GeoCentroid delivers BIM, geospatial, reality capture and digital twin solutions that help teams plan, design, build and operate smarter assets.
            </p>
            <div className="socials">
              <a href="https://linkedin.com" aria-label="LinkedIn"><Icon name="linkedin" size={14} /></a>
              <a href="https://youtube.com" aria-label="YouTube"><Icon name="youtube" size={14} /></a>
              <a href="https://x.com" aria-label="X"><Icon name="x" size={14} /></a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div>
            <h4>Get in touch</h4>
            <p className="footer-contact">
              <strong>Email</strong>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p className="footer-contact">
              <strong>Phone</strong>
              <a href={company.phoneHref}>{company.phone}</a>
            </p>
            <p className="footer-contact">
              <strong>Office</strong>
              <span>
                {company.legalName}<br />
                {company.addressLines[0]}<br />
                {company.addressLines[1]}
              </span>
            </p>
            <p className="footer-contact">
              <strong>GSTIN</strong>
              <span>{company.gstin}</span>
            </p>
            <p className="footer-contact">
              <strong>CIN</strong>
              <span>{company.cin}</span>
            </p>
            <Link className="footer-cta" to="/quote">Request a Quote →</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Privacy Policy · Terms & Conditions</span>
        </div>
      </div>
    </footer>
  )
}
