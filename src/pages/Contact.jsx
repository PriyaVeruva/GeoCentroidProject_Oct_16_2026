import { useEffect, useRef, useState } from 'react'
import QuoteForm from '../components/forms/QuoteForm.jsx'
import { Icon } from '../components/ui/Icons.jsx'
import { company } from '../data/company.js'
import '../styles/pages.css'

const officePhotos = [
  {
    src: '/images/office/office-exterior.jpg',
    alt: 'The GeoCentroid team outside the office at RS Arcade, Nagarabhavi, Bengaluru',
    label: 'Our team at RS Arcade',
  },
  {
    src: '/images/office/office-reception.jpg',
    alt: 'GeoCentroid reception desk with company logo',
    label: 'Reception',
  },
  {
    src: '/images/office/office-workspace.jpg',
    alt: 'Open-plan workspace with workstations',
    label: 'Workspace',
  },
  {
    src: '/images/office/office-corridor.jpg',
    alt: 'Corridor with glass-walled cabins',
    label: 'Cabins',
  },
  {
    src: '/images/office/office-cabins.jpg',
    alt: 'Curved glass cabin in the office',
    label: 'Glass cabins',
  },
  {
    src: '/images/office/office-meeting-rooms.jpg',
    alt: 'Row of glass-fronted meeting rooms',
    label: 'Meeting rooms',
  },
]

export default function Contact() {
  const [active, setActive] = useState(null)
  const [slide, setSlide] = useState(0)
  const galleryRef = useRef(null)
  const touchStartX = useRef(null)
  const close = () => setActive(null)

  // On phones the gallery is a swipeable row; track which photo is in view for the dots.
  const onGalleryScroll = () => {
    const el = galleryRef.current
    if (!el || !el.firstElementChild) return
    const tileWidth = el.firstElementChild.getBoundingClientRect().width
    if (!tileWidth) return
    const index = Math.round(el.scrollLeft / tileWidth)
    setSlide(Math.min(officePhotos.length - 1, Math.max(0, index)))
  }

  // Swipe left/right inside the full-screen viewer.
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
  }
  const step = (dir) =>
    setActive((i) => (i + dir + officePhotos.length) % officePhotos.length)

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % officePhotos.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + officePhotos.length) % officePhotos.length)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

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
            <div className="office-gallery-wrap">
            <div className="office-gallery" ref={galleryRef} onScroll={onGalleryScroll}>
              {officePhotos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  className={`office-tile office-tile-${index + 1}`}
                  onClick={() => setActive(index)}
                  aria-label={`View photo: ${photo.label}`}
                >
                  <img src={photo.src} alt={photo.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                  <span className="office-tile-label">{photo.label}</span>
                </button>
              ))}
            </div>
              <button type="button" className="office-view-all" onClick={() => setActive(0)}>
                <Icon name="layers" size={16} />
                View all {officePhotos.length} photos
              </button>
            </div>
            <div className="office-dots" aria-hidden="true">
              {officePhotos.map((photo, index) => (
                <span key={photo.src} className={index === slide ? 'is-active' : ''} />
              ))}
            </div>
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

      {active !== null && (
        <div
          className="office-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Office photos"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button type="button" className="office-lb-close" onClick={close} aria-label="Close">
            <Icon name="close" size={22} />
          </button>
          <button
            type="button"
            className="office-lb-nav office-lb-prev"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={officePhotos[active].src} alt={officePhotos[active].alt} />
            <figcaption>
              {officePhotos[active].label}
              <span>{active + 1} / {officePhotos.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="office-lb-nav office-lb-next"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
