import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DEALER, COLORS } from '../config'

const NAV = [
  { label: 'Models', href: '/models' },
  { label: 'Financing', href: '/financing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const bg = scrolled ? COLORS.dark : 'transparent'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: bg, backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/images/nxt-level-logo.avif" alt={DEALER.name} className="h-14 w-auto" style={{ maxWidth: '180px' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(item => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium uppercase tracking-wider transition-colors"
              style={{ color: pathname === item.href ? COLORS.primary : 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = pathname === item.href ? COLORS.primary : 'rgba(255,255,255,0.5)'}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
            style={{ background: COLORS.primary, color: '#fff' }}
          >
            Schedule Test Drive
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4" style={{ background: COLORS.dark }}>
          {NAV.map(item => (
            <Link key={item.label} to={item.href} className="block text-sm font-medium uppercase tracking-wider text-white/60 hover:text-white transition">
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="block text-center py-3 text-sm font-bold uppercase tracking-wider" style={{ background: COLORS.primary, color: '#fff' }}>
            Schedule Test Drive
          </Link>
        </div>
      )}
    </header>
  )
}
