import { Navigate, useParams, Link } from 'react-router-dom'
import { company } from '../data/company.js'
import '../styles/pages.css'

const pages = {
  privacy: {
    title: 'Privacy Policy',
    updated: '6 November 2026',
    body: [
      `Geocentroid Pvt Ltd (“GeoCentroid”, “we”) uses this website to describe our services and to receive project enquiries.`,
      `When you submit a quote or contact form we collect your name, email, phone (if provided), selected service, industry, scope and message so we can reply to your enquiry. Messages are delivered to ${company.email}.`,
      `We do not sell your details. We keep enquiry records only as long as needed to respond and, where required, for our business records.`,
      `This site may use essential cookies for operation. Optional analytics load only if configured by GeoCentroid.`,
      `To ask about your data or this policy, email ${company.email} or write to ${company.legalName}, ${company.addressLines.join(', ')}.`,
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: '6 November 2026',
    body: [
      `This website is provided by ${company.legalName} for information about our BIM, geospatial, CAD and digital twin services.`,
      `Content is for general information. A proposal, purchase order or contract is required before any production work starts. Deliverables, LOD, formats and fees are those written in the agreed order.`,
      `Project images and case studies are illustrative of the type of work we deliver. They should not be copied as a specification.`,
      `You may not scrape, republish or misuse site content without written permission.`,
      `Governing law is India. For contract queries contact ${company.email}.`,
    ],
  },
}

export default function Legal() {
  const { slug } = useParams()
  const page = pages[slug]
  if (!page) return <Navigate to="/" replace />

  return (
    <section className="section">
      <div className="container article-body">
        <p className="breadcrumb">
          <Link to="/">Home</Link> / <span>{page.title}</span>
        </p>
        <h1 className="section-title">{page.title}</h1>
        <p className="section-lead">Last updated {page.updated}</p>
        {page.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
      </div>
    </section>
  )
}
