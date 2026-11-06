import { company } from '../data/company.js'

export async function sendEnquiry(fields) {
  const payload = {
    name: fields.name,
    email: fields.email,
    phone: fields.phone || '',
    service: fields.service,
    industry: fields.industry,
    scope: fields.scope || '',
    message: fields.message || '',
    _subject: `GeoCentroid enquiry — ${fields.service || 'Website'}`,
    _template: 'table',
    _captcha: 'false',
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(company.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Unable to send your enquiry right now.')
  }

  const data = await response.json()
  if (data.success === false || data.success === 'false') {
    throw new Error(data.message || 'Unable to send your enquiry right now.')
  }

  return data
}
