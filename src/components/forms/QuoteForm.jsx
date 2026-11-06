import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../ui/Button.jsx'
import { megaMenu } from '../../data/navigation.js'
import { industrySectors } from '../../data/industries.js'
import { sendEnquiry } from '../../lib/sendEnquiry.js'

const serviceOptions = megaMenu.flatMap((col) =>
  col.items.map((item) => `${col.title} – ${item.label}`)
)

const initial = {
  name: '',
  phone: '',
  service: '',
  industry: '',
  scope: '',
  email: '',
  message: '',
}

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function update(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function submit(e) {
    e.preventDefault()
    setSending(true)
    try {
      await sendEnquiry(form)
      setSent(true)
      toast.success('Thank you. Your enquiry has been sent.')
    } catch {
      toast.error('We could not send the form. Please email info@geocentroid.com or try again.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="form-card">
        <h3>Thank you</h3>
        <p>Your enquiry has been sent to the GeoCentroid team. We will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form className="form-card form-grid" onSubmit={submit}>
      {!compact ? <h3>Request a Project Consultation</h3> : <h3>Send Us a Message</h3>}
      <div className="form-row">
        <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={update} />
      </div>
      <select name="service" value={form.service} onChange={update} required>
        <option value="">Select a service</option>
        {serviceOptions.map((label) => (
          <option key={label}>{label}</option>
        ))}
      </select>
      <div className={compact ? 'form-row' : undefined}>
        <select name="industry" value={form.industry} onChange={update} required>
          <option value="">Industry</option>
          {industrySectors.map((item) => (
            <option key={item.slug}>{item.title}</option>
          ))}
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
      <textarea name="message" rows={compact ? 4 : 3} placeholder="Tell us about your project" value={form.message} onChange={update} required />
      <Button type="submit" withArrow={!sending} disabled={sending}>
        {sending ? 'Sending…' : compact ? 'Submit Enquiry' : 'Submit Request'}
      </Button>
    </form>
  )
}
