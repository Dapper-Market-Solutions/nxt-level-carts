import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DEALER, COLORS, MODELS } from '../config'
import LeadForm from '../components/LeadForm'

const CATEGORIES = ['All', '4-Seat', '6-Seat']
const BRANDS = ['All', ...new Set(MODELS.map(m => m.brand))]

export default function Models() {
  const [filter, setFilter] = useState('All')
  const [brandFilter, setBrandFilter] = useState('All')
  const [specCart, setSpecCart] = useState(null)
  const filtered = MODELS.filter(m =>
    (filter === 'All' || m.category === filter) &&
    (brandFilter === 'All' || m.brand === brandFilter)
  )

  useEffect(() => {
    document.title = `Our Models | ${DEALER.name} — ICON, EPIC & Denago Electric Golf Carts`
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center pt-32 pb-20" style={{ background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.charcoal} 50%, ${COLORS.dark} 100%)` }}>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
             style={{ background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
             style={{ color: COLORS.primary, animation: 'fadeUp 0.7s ease forwards 0.1s', opacity: 0 }}>
            The Full Collection
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
            Our <span style={{ color: COLORS.primary }}>Models</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto"
             style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
            Premium electric golf carts and LSVs from ICON, EPIC, and Denago — from 4-passenger cruisers to spacious 6-seat models. Find the one that fits your lifestyle.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-4 reveal">
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
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
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

          <p className="text-center text-sm mb-2" style={{ color: COLORS.charcoal + '66' }}>
            Showing {filtered.length} model{filtered.length !== 1 ? 's' : ''}
          </p>
          <p className="text-center text-sm mb-8" style={{ color: COLORS.charcoal + '88' }}>
            Additional models, configurations, and colors available — <Link to="/contact" style={{ color: COLORS.accent }}>contact us</Link> for details.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((model, i) => (
              <div key={model.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                   style={{ animation: `fadeUp 0.5s ease forwards ${i * 80}ms`, opacity: 0 }}>
                <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center p-4" style={{ background: '#f0ebe5' }}>
                  {model.image ? (
                    <img src={model.image} alt={model.name} loading="lazy" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" />
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
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: COLORS.accent }}>{model.type}</p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: COLORS.dark }}>
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.accent }}>Ready to Ride?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Find Your Perfect ICON Cart
          </h2>
          <p className="text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
            Not sure which model is right for you? Schedule a test drive and our team will help you pick the cart that fits your lifestyle and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                  style={{ background: COLORS.primary, color: '#000' }}>
              Schedule a Test Drive
            </Link>
            <Link to="/financing" className="px-8 py-4 text-sm font-medium uppercase tracking-wider transition hover:-translate-y-0.5 border-2"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>
              Explore Financing
            </Link>
          </div>
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
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.charcoal }}>{specCart.name}</h3>
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
