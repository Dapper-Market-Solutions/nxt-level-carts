import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEALER, COLORS, MODELS, TESTIMONIALS, FINANCING } from '../config'
import LeadForm from '../components/LeadForm'

const CATEGORIES = ['All', '2-Seat', '4-Seat', '6-Seat']
const BRANDS = ['All', ...new Set(MODELS.map(m => m.brand))]

export default function Home() {
  const [filter, setFilter] = useState('All')
  const [brandFilter, setBrandFilter] = useState('All')
  const [specCart, setSpecCart] = useState(null)
  const filtered = MODELS.filter(m =>
    (filter === 'All' || m.category === filter) &&
    (brandFilter === 'All' || m.brand === brandFilter)
  )

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(26,25,25,0.45)' }} />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
             style={{ background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-6"
               style={{ color: COLORS.primary, animation: 'fadeUp 0.7s ease forwards 0.1s', opacity: 0 }}>
              {DEALER.tagline} &bull; {DEALER.city}, {DEALER.state}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-6"
                style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
              {DEALER.slogan.split('.')[0]}.
              <br />
              <span style={{ color: COLORS.primary }}>{DEALER.slogan.split('.')[1] || ''}</span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg"
               style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
              Award-winning ICON electric golf carts with touchscreen displays, backup cameras, and street-legal compliance. Experience the difference at our {DEALER.city} showroom.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.7s ease forwards 0.7s', opacity: 0 }}>
              <Link to="/models" className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                    style={{ background: COLORS.primary, color: '#000' }}>
                Explore Models
              </Link>
              <Link to="/contact" className="px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:-translate-y-0.5 border-2"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>
                Schedule a Test Drive
              </Link>
            </div>
            <div className="flex flex-wrap gap-12 mt-16" style={{ animation: 'fadeUp 0.7s ease forwards 0.9s', opacity: 0 }}>
              {[['48V AC', 'Motor'], ['40+ Mile', 'Range'], ['25 mph', 'Top Speed']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white">{val}</div>
                  <div className="text-xs uppercase tracking-wider text-white/25 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6" style={{ background: COLORS.primary }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            ['Award-Winning', 'PGA Show Recognition'],
            ['DOT Compliant', 'Street Legal'],
            ['Full Warranty', 'Parts & Service'],
            ['Financing', 'Low Monthly Payments'],
          ].map(([title, sub]) => (
            <div key={title}>
              <div className="text-sm font-bold text-black uppercase tracking-wider">{title}</div>
              <div className="text-xs text-black/60 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center mb-8" style={{ color: COLORS.charcoal + '66' }}>Authorized Dealer — Brands We Carry</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/images/icon-logo-green.png" alt="ICON Electric Vehicles" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
            <img src="/images/epic-logo.avif" alt="Epic Golf Carts" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
            <img src="/images/denago-logo.avif" alt="Denago" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section id="models" className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>The Collection</p>
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Find Your <span style={{ color: COLORS.accent }}>Perfect Cart</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {BRANDS.map(b => (
              <button key={b} onClick={() => setBrandFilter(b)}
                className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition cursor-pointer"
                style={{
                  background: brandFilter === b ? COLORS.primary : 'transparent',
                  color: brandFilter === b ? '#000' : COLORS.charcoal + '66',
                  border: brandFilter === b ? `1px solid ${COLORS.primary}` : '1px solid rgba(0,0,0,0.1)',
                }}>
                {b}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition cursor-pointer"
                style={{
                  background: filter === cat ? COLORS.primary : 'transparent',
                  color: filter === cat ? '#000' : COLORS.charcoal + '66',
                  border: filter === cat ? `1px solid ${COLORS.primary}` : '1px solid rgba(0,0,0,0.1)',
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((model, i) => (
              <div key={model.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                   style={{ animation: `fadeUp 0.5s ease forwards ${i * 80}ms`, opacity: 0 }}>
                <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center p-4" style={{ background: '#f0ebe5' }}>
                  {model.image ? (
                    <img src={model.image} alt={model.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-extrabold uppercase tracking-tight" style={{ color: 'rgba(0,0,0,0.04)' }}>{model.name}</span>
                    </div>
                  )}
                  {model.badge && (
                    <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded"
                         style={{ background: COLORS.primary, color: '#000' }}>
                      {model.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: COLORS.accent }}>{model.type}</p>
                    {model.price && <span className="text-sm font-bold" style={{ color: COLORS.accent }}>{model.price}</span>}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.charcoal }}>{model.name}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4 py-3" style={{ borderTop: '1px solid #f0ebe5', borderBottom: '1px solid #f0ebe5' }}>
                    {Object.entries(model.specs).slice(0, 6).map(([k, v]) => (
                      <div key={k}>
                        <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(0,0,0,0.3)' }}>{k}</div>
                        <div className="text-xs font-medium" style={{ color: COLORS.charcoal }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {model.features.slice(0, 3).map(f => (
                      <span key={f} className="text-xs px-2 py-0.5 rounded"
                            style={{ background: `${COLORS.primary}08`, color: COLORS.charcoal + '88', border: `1px solid ${COLORS.primary}15` }}>
                        {f}
                      </span>
                    ))}
                    {model.features.length > 3 && (
                      <span className="text-xs px-2 py-0.5" style={{ color: 'rgba(0,0,0,0.25)' }}>+{model.features.length - 3} more</span>
                    )}
                  </div>
                  <button onClick={() => setSpecCart(model)}
                    className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider transition cursor-pointer"
                    style={{ background: 'transparent', color: COLORS.accent, border: `1px solid ${COLORS.accent}` }}
                    onMouseEnter={e => { e.target.style.background = COLORS.accent; e.target.style.color = '#000' }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = COLORS.accent }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/models" className="text-sm font-semibold uppercase tracking-wider hover:opacity-80 transition" style={{ color: COLORS.accent }}>
              View All Models &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>Happy Owners</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal rounded-xl p-6 shadow-sm" style={{ background: COLORS.cream, transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-0.5 mb-3">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <span key={j} style={{ color: COLORS.accent }}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.charcoal + 'aa' }}>"{t.text}"</p>
                <div>
                  <p className="text-sm font-bold" style={{ color: COLORS.charcoal }}>{t.name}</p>
                  <p className="text-xs" style={{ color: COLORS.charcoal + '66' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-20 px-6" style={{ background: COLORS.dark }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.primary }}>Financing</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{FINANCING.headline}</h2>
              <p className="text-white/50 leading-relaxed mb-8">{FINANCING.subheadline}</p>
              <ul className="space-y-3 mb-8">
                {FINANCING.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="font-bold mt-0.5" style={{ color: COLORS.primary }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/financing" className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                    style={{ background: COLORS.primary, color: '#000' }}>
                Learn About Financing
              </Link>
            </div>
            <div className="reveal delay-200 rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-xl font-bold text-white mb-1">Ready for a Test Drive?</h3>
              <p className="text-white/40 text-sm mb-6">Fill out the form and we'll set up your visit.</p>
              <LeadForm source="homepage" dark />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>Visit Our Showroom</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.charcoal }}>
            {DEALER.address}, {DEALER.city}, {DEALER.state} {DEALER.zip}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6 mb-8">
            {DEALER.hours.filter(h => h.hours !== 'Closed').map(h => (
              <div key={h.days}>
                <div className="text-sm font-semibold" style={{ color: COLORS.charcoal }}>{h.days}</div>
                <div className="text-xs" style={{ color: COLORS.charcoal + '66' }}>{h.hours}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                style={{ background: COLORS.primary, color: '#000' }}>
            Get Directions &amp; Contact Us
          </Link>
        </div>
      </section>

      {/* Spec Modal */}
      {specCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSpecCart(null)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-white" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-[16/10] flex items-center justify-center p-4" style={{ background: '#f0ebe5' }}>
              {specCart.image ? (
                <img src={specCart.image} alt={specCart.name} className="max-w-full max-h-full object-contain" />
              ) : (
                <span className="text-5xl font-extrabold uppercase tracking-tight" style={{ color: 'rgba(0,0,0,0.04)' }}>{specCart.name}</span>
              )}
              {specCart.badge && (
                <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded"
                     style={{ background: COLORS.primary, color: '#000' }}>{specCart.badge}</div>
              )}
              <button onClick={() => setSpecCart(null)} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-lg rounded-full cursor-pointer"
                      style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>&times;</button>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: COLORS.accent }}>{specCart.type}</p>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold" style={{ color: COLORS.charcoal }}>{specCart.name}</h3>
                {specCart.price && <span className="text-lg font-bold" style={{ color: COLORS.accent }}>{specCart.price}</span>}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: COLORS.accent }}>Specifications</h4>
              {Object.entries(specCart.specs).map(([k, v]) => (
                <div key={k} className="flex py-2" style={{ borderBottom: '1px solid #f0ebe5' }}>
                  <span className="w-28 text-xs uppercase tracking-wider" style={{ color: 'rgba(0,0,0,0.3)' }}>{k}</span>
                  <span className="text-sm font-medium" style={{ color: COLORS.charcoal }}>{v}</span>
                </div>
              ))}
              <h4 className="text-xs font-bold uppercase tracking-wider mt-5 mb-3" style={{ color: COLORS.accent }}>Available Colors</h4>
              <div className="flex flex-wrap gap-2 mb-5">
                {specCart.colors.map(c => (
                  <span key={c} className="text-xs px-3 py-1 rounded" style={{ background: '#f0ebe5', color: COLORS.charcoal }}>{c}</span>
                ))}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: COLORS.accent }}>Features</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {specCart.features.map(f => (
                  <span key={f} className="text-xs px-3 py-1.5 rounded" style={{ background: `${COLORS.primary}08`, color: COLORS.charcoal + 'aa', border: `1px solid ${COLORS.primary}15` }}>{f}</span>
                ))}
              </div>
              <Link to="/contact" onClick={() => setSpecCart(null)}
                className="block w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider transition"
                style={{ background: COLORS.primary, color: '#000' }}>
                Inquire About This Model
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
