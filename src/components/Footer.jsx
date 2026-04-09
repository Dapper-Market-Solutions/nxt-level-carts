import { Link } from 'react-router-dom'
import { DEALER, COLORS } from '../config'

export default function Footer() {
  return (
    <footer style={{ background: COLORS.dark }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold tracking-wide text-white uppercase mb-4">
              <span style={{ color: COLORS.primary }}>NXT</span> Level Carts
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              Award-winning ICON electric golf carts. Experience the NXT Level of personal transportation in Belleville, Michigan.
            </p>
            <p className="text-white/30 text-xs">{DEALER.tagline}</p>
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
