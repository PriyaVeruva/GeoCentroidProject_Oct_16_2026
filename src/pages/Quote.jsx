import QuoteForm from '../components/forms/QuoteForm.jsx'
import '../styles/pages.css'

export default function Quote() {
  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Request a Quote</p>
          <h1>Tell us about your project</h1>
          <p>Share scope, drawings and timelines. We’ll recommend a delivery approach for BIM, Scan-to-BIM or CAD engineering.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <QuoteForm compact />
        </div>
      </section>
    </>
  )
}
