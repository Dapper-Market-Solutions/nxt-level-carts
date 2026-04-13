import { Link } from 'react-router-dom'
import { DEALER, COLORS } from '../config'

export default function Footer() {
  return (
    <footer style={{ background: COLORS.dark }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/images/nxt-level-logo.png" alt={DEALER.name} className="h-32 w-auto" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              Award-winning ICON electric golf carts. Experience the next level of personal transportation in {DEALER.city}, {DEALER.state}.
            </p>
            <p className="text-white/30 text-xs mb-4">{DEALER.tagline}</p>
            {/* Social links */}
            <div className="flex gap-3">
              {DEALER.social.facebook && (
                <a href={DEALER.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {DEALER.social.instagram && (
                <a href={DEALER.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
              {DEALER.social.youtube && (
                <a href={DEALER.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                   className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Models', href: '/models' },
                { label: 'Financing', href: '/financing' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Schedule Test Drive', href: '/contact' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="text-white/45 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Visit Us</h4>
            <div className="space-y-3">
              <a href={`mailto:${DEALER.email}`} className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.primary }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {DEALER.email}
              </a>
              <p className="flex items-center gap-3 text-white/40 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: COLORS.primary }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {DEALER.address}, {DEALER.city}, {DEALER.state} {DEALER.zip}
              </p>
            </div>
            <div className="mt-6">
              <h5 className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3">Hours</h5>
              {DEALER.hours.map(h => (
                <div key={h.days} className="flex justify-between text-xs text-white/30 mb-1">
                  <span>{h.days}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} {DEALER.name}. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <Link to="/privacy" className="text-white/25 text-xs hover:text-white/50 transition">Privacy Policy</Link>
            <span className="text-white/15">&middot;</span>
            <p className="text-white/20 text-xs">{DEALER.city}, {DEALER.state}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
