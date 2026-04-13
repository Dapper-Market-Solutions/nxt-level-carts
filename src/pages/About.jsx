import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DEALER, COLORS } from '../config'

export default function About() {
  useEffect(() => {
    document.title = `About Us | ${DEALER.name} — Belleville, MI`
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center pt-32 pb-20" style={{ background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.charcoal} 50%, ${COLORS.dark} 100%)` }}>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
             style={{ background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4"
             style={{ color: COLORS.primary, animation: 'fadeUp 0.7s ease forwards 0.1s', opacity: 0 }}>
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
            About <span style={{ color: COLORS.accent }}>{DEALER.name}</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto"
             style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
            A passion for electric vehicles, a commitment to our community, and the best golf carts on the market.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.accent }}>How We Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: COLORS.charcoal }}>
                Born in Belleville, Built on Passion
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>
                <p>
                  {DEALER.name} was founded right here in {DEALER.city}, {DEALER.state}, with a simple belief: personal electric vehicles should be as refined, reliable, and exciting as the people who drive them.
                </p>
                <p>
                  What started as a passion for electric vehicles quickly evolved into a mission. After researching every brand on the market, we chose to partner exclusively with ICON Electric Vehicles — the most awarded golf cart manufacturer in the industry. Their PGA Show-winning designs, cutting-edge technology, and uncompromising build quality aligned perfectly with our vision.
                </p>
                <p>
                  Today, we are proud to bring ICON's full lineup to Southeast Michigan. From the nimble i20 to the flagship Epic, every cart we sell comes loaded with features that used to be reserved for luxury automobiles: touchscreen displays, GPS navigation, backup cameras, Bluetooth audio, and full DOT street-legal compliance.
                </p>
                <p>
                  But we are more than a dealership. We are your neighbors, your partners, and your go-to resource for everything electric golf carts. Whether you need help choosing the right model, navigating financing, or scheduling service down the road — we are here for the long haul.
                </p>
              </div>
            </div>
            <div className="reveal delay-200 rounded-xl overflow-hidden aspect-[4/3]" style={{ background: '#e8e3de' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-extrabold uppercase tracking-tight" style={{ color: 'rgba(0,0,0,0.04)' }}>{DEALER.name}</span>
                  <p className="text-xs uppercase tracking-widest mt-3" style={{ color: COLORS.accent + '66' }}>Belleville, Michigan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: COLORS.dark }}>
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.accent }}>Come See Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
            Visit our showroom in {DEALER.city}, {DEALER.state} to see our full lineup of ICON electric golf carts in person. Test drives are always welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                  style={{ background: COLORS.primary, color: '#000' }}>
              Schedule a Visit
            </Link>
            <Link to="/models" className="px-8 py-4 text-sm font-medium uppercase tracking-wider transition hover:-translate-y-0.5 border-2"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>
              Browse Models
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
