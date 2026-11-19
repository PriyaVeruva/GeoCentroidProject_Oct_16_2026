import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { megaMenu, navLinks } from '../../data/navigation.js'
import { searchServices } from '../../data/searchServices.js'
import { Icon, Logo } from '../ui/Icons.jsx'
import Button from '../ui/Button.jsx'
import '../../styles/header.css'

const darkHeroRoutes = ['/', '/about', '/industries', '/projects', '/insights', '/contact', '/quote']

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isDark = darkHeroRoutes.includes(pathname) || /^\/services\/[^/]+$/.test(pathname)
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    setSearchOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function onSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return

    const matches = searchServices(q)
    setSearchOpen(false)
    setQuery('')
    setOpen(false)

    if (!matches.length) {
      toast.info(`No services found for “${q}”.`, { toastId: `search-empty-${q.toLowerCase()}` })
      return
    }

    const target = matches[0]
    toast.success(
      matches.length === 1
        ? `Opening ${target.name}.`
        : `Found ${matches.length} services for “${q}”. Opening ${target.name}.`,
      { toastId: `search-ok-${target.slug}` }
    )
    navigate(`/services/${target.slug}`)
  }

  return (
    <header className={`header ${isDark ? 'header-dark' : 'header-light'}`}>
      <div className="header-inner">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo light={isDark} />
        </Link>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) =>
            link.mega ? (
              <div className={`nav-item ${megaOpen ? 'open' : ''}`} key={link.label}>
                <button
                  className={pathname.startsWith('/services') ? 'active' : ''}
                  onClick={() => setMegaOpen((v) => !v)}
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  {link.label} ▾
                </button>
                <div className="mega" onMouseLeave={() => setMegaOpen(false)}>
                  {megaMenu.map((col) => (
                    <div className="mega-col" key={col.title}>
                      <h4>
                        {col.to ? (
                          <Link to={col.to} onClick={() => setMegaOpen(false)}>
                            <Icon name={col.icon} size={16} />
                            <span>{col.title}</span>
                          </Link>
                        ) : (
                          <>
                            <Icon name={col.icon} size={16} />
                            <span>{col.title}</span>
                          </>
                        )}
                      </h4>
                      {col.items.map((item) => (
                        <Link className="mega-item" key={item.label} to={item.to} onClick={() => setMegaOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => { setSearchOpen((v) => !v); setOpen(false) }}>
            <Icon name="search" size={18} />
          </button>
          <Button className="header-quote" to="/quote">Request a Quote</Button>
          <button
            className="icon-btn menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => { setOpen((v) => !v); setSearchOpen(false) }}
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>

      {searchOpen ? (
        <form className="search-panel" onSubmit={onSearch}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
          />
          <Button type="submit" withArrow={false}>Go</Button>
        </form>
      ) : null}

      {open ? (
        <div className="mobile-drawer">
          {navLinks.map((link) =>
            link.mega ? (
              <details className="mobile-acc" key={link.label}>
                <summary>{link.label}</summary>
                <Link to={link.to} onClick={() => setOpen(false)}>All services</Link>
                {megaMenu.map((col) => (
                  <details className="mobile-acc-sub" key={col.title}>
                    <summary>{col.title}</summary>
                    {col.to ? (
                      <Link to={col.to} onClick={() => setOpen(false)}>{col.title} overview</Link>
                    ) : null}
                    {col.items.map((item) => (
                      <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </details>
                ))}
              </details>
            ) : (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            )
          )}
          <Button to="/quote" onClick={() => setOpen(false)}>Request a Quote</Button>
        </div>
      ) : null}
    </header>
  )
}
