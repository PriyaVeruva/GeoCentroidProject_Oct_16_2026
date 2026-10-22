import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const titles = {
  '/': 'GeoCentroid | BIM · Geospatial · Intelligence',
  '/about': 'About Us | GeoCentroid',
  '/services': 'Services | GeoCentroid',
  '/industries': 'Industries | GeoCentroid',
  '/projects': 'Projects | GeoCentroid',
  '/insights': 'Insights | GeoCentroid',
  '/contact': 'Contact | GeoCentroid',
  '/quote': 'Request a Quote | GeoCentroid',
}

export default function Layout() {
  const { pathname } = useLocation()
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const pageTitle = Object.entries(titles).find(([path]) =>
      path === '/' ? pathname === '/' : pathname.startsWith(path)
    )
    document.title = pageTitle?.[1] || 'GeoCentroid | BIM · Geospatial · Intelligence'
  }, [pathname])

  useEffect(() => {
    const t = window.setTimeout(() => setLoaderDone(true), 900)
    return () => window.clearTimeout(t)
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
    </div>
  )
}
