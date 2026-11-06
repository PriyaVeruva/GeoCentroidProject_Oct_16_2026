import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { services } from '../../data/services.js'
import { projects } from '../../data/projects.js'
import { insights } from '../../data/insights.js'
import 'react-toastify/dist/ReactToastify.css'

const titles = {
  '/': 'GeoCentroid | BIM · Geospatial · Intelligence',
  '/about': 'About Us | GeoCentroid',
  '/services': 'Services | GeoCentroid',
  '/industries': 'Industries | GeoCentroid',
  '/projects': 'Projects | GeoCentroid',
  '/insights': 'Insights | GeoCentroid',
  '/contact': 'Contact | GeoCentroid',
  '/quote': 'Request a Quote | GeoCentroid',
  '/legal/privacy': 'Privacy Policy | GeoCentroid',
  '/legal/terms': 'Terms & Conditions | GeoCentroid',
}

const descriptions = {
  '/': 'GeoCentroid delivers BIM, geospatial, reality capture and digital twin solutions for smarter, safer and more sustainable assets.',
  '/about': 'About Geocentroid Pvt Ltd — BIM, geospatial and digital twin delivery from Bengaluru.',
  '/services': 'Architectural, structural and MEPF BIM, Scan to BIM, CAD, geospatial, digital twin and IT services.',
  '/industries': 'Digital engineering for infrastructure, construction, energy, oil and gas, manufacturing and heritage.',
  '/projects': 'Selected GeoCentroid projects in BIM, mapping, plant survey and digital twins.',
  '/insights': 'Practical writing on Scan to BIM, LOD and digital twin delivery.',
  '/contact': 'Contact GeoCentroid in Bengaluru for BIM, CAD and geospatial project enquiries.',
  '/quote': 'Request a quote for BIM, Scan to BIM, CAD engineering or geospatial work.',
}

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export default function Layout() {
  const { pathname } = useLocation()
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const parts = pathname.split('/').filter(Boolean)
    const service = parts[0] === 'services' && parts[1] ? services[parts[1]] : null
    const project = parts[0] === 'projects' && parts[1] ? projects.find((item) => item.slug === parts[1]) : null
    const insight = parts[0] === 'insights' && parts[1] ? insights.find((item) => item.slug === parts[1]) : null

    const title = service
      ? `${service.name} | GeoCentroid`
      : project
        ? `${project.title} | GeoCentroid`
        : insight
          ? `${insight.title} | GeoCentroid`
          : titles[pathname] || 'GeoCentroid | BIM · Geospatial · Intelligence'

    const description = service?.intro
      || project?.summary
      || insight?.excerpt
      || descriptions[pathname]
      || descriptions['/']

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
  }, [pathname])

  useEffect(() => {
    const t = window.setTimeout(() => setLoaderDone(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID
    if (!id || document.getElementById('ga-src')) return
    const src = document.createElement('script')
    src.id = 'ga-src'
    src.async = true
    src.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(src)
    const inline = document.createElement('script')
    inline.id = 'ga-inline'
    inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`
    document.head.appendChild(inline)
  }, [])

  return (
    <div className="page">
      <div className={`brand-loader ${loaderDone ? 'is-done' : ''}`} aria-hidden={loaderDone}>
        <img src="/logo.png" alt="GeoCentroid" />
      </div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="page-main">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
