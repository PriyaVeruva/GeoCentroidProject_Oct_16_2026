import { services } from './services.js'

export function searchServices(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return Object.values(services).filter((service) => {
    const haystack = [
      service.name,
      service.category,
      service.slug,
      service.intro,
      service.extra,
      ...(service.capabilities || []).map((item) => `${item.title} ${item.text}`),
      ...(service.elements || []).map((item) => item.title),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
