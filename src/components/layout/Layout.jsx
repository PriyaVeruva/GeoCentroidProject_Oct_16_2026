import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
