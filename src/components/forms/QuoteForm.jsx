import { useState } from 'react'
import Button from '../ui/Button.jsx'

const initial = {
  service: '',
  industry: '',
  scope: '',
  email: '',
  message: '',
}

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  function update(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-card">
        <h3>Thank you</h3>
        <p>Your enquiry has been received. Our team will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form className="form-card form-grid" onSubmit={submit}>
      {!compact ? <h3>Request a Project Consultation</h3> : <h3>Send Us a Message</h3>}
      <select name="service" value={form.service} onChange={update} required>
        <option value="">Select a service</option>
        <option>BIM Modelling</option>
        <option>Scan to BIM</option>
        <option>CAD Engineering</option>
        <option>Geospatial</option>
        <option>Digital Twin</option>
      </select>
      <div className={compact ? 'form-row' : undefined}>
        <select name="industry" value={form.industry} onChange={update} required>
          <option value="">Industry</option>
          <option>Architecture & Construction</option>
          <option>Infrastructure</option>
          <option>Energy & Utilities</option>
          <option>Oil & Gas</option>
          <option>Manufacturing</option>
        </select>
        {compact ? (
          <select name="scope" value={form.scope} onChange={update} required>
            <option value="">Project scope</option>
            <option>New build</option>
            <option>As-built / Scan</option>
            <option>Coordination</option>
            <option>Documentation</option>
          </select>
        ) : null}
      </div>
      <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required />
      <textarea name="message" rows={compact ? 4 : 3} placeholder="Tell us about your project" value={form.message} onChange={update} />
      <Button type="submit"> {compact ? 'Submit Enquiry' : 'Submit Request'}</Button>
    </form>
  )
}
