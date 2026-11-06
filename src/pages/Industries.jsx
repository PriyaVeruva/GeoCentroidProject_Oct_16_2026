import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import IndustryCard from '../components/ui/IndustryCard.jsx'
import { industrySectors } from '../data/industries.js'
import '../styles/pages.css'

export default function Industries() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <section className="dark-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: '#8cbcff' }}>Industries</p>
          <h1>Industry-Focused Digital Solutions</h1>
          <p>We deliver tailored geospatial, BIM and digital twin solutions across a range of industries, helping organisations improve visibility, efficiency and decision-making.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="why-head">
            <p className="eyebrow">Sectors</p>
            <h2 className="section-title">Specialised Expertise Across Key Sectors</h2>
            <p className="section-lead">
              The same coordinated BIM, survey and digital delivery, applied to the way each industry actually works.
            </p>
          </div>
          <div className="industry-page-grid">
            {industrySectors.map((item) => (
              <IndustryCard item={item} variant="detail" key={item.slug} />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Button to="/quote">Request a Quote</Button>
          </div>
        </div>
      </section>
      <CtaBanner title="Let’s Build a Smarter Future, Together" text="Get in touch with our team to discuss how our industry-specific solutions can help you achieve your goals." action="Request a Quote" />
    </>
  )
}
