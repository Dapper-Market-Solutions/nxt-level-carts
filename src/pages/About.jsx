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
                  Next Level Carts isn't just a dealership — it's a story that's been building for a long time.
                </p>
                <p>
                  What started as a father-and-daughter idea quickly turned into something bigger: a place where passion for vehicles, community roots, and a little bit of fun all come together. Located right in the heart of Belleville, our showroom has seen a lot over the years. Long before golf carts lined the floor, this building was home to the original Atchinson Ford dealership, and after the building served as a go-kart repair shop — so you could say we're carrying on a tradition of wheels and innovation.
                </p>
                <p>
                  Before opening our doors as a dealership in 2025, we operated our commercial property management company out of this very space. But with a deep background in the automotive industry — including hands-on experience with one of the earliest electric cart brands — the pull toward starting something new (and exciting) was hard to ignore.
                </p>
                <p>
                  Today, Next Level Carts is proud to bring that history full circle. We specialize in high-quality golf carts and street-legal LSVs, offering brands like Denago, Epic, and Icon to customers across Metro Detroit. Whether you're cruising your neighborhood, upgrading your lifestyle, or just stopping by to see what's new, we're here to help you find the perfect ride.
                </p>
              </div>
            </div>
            <div className="reveal delay-200 rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/dealership-about.jpg" alt={`${DEALER.name} showroom in ${DEALER.city}, ${DEALER.state}`} className="w-full h-full object-cover" />
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
            Visit our showroom in {DEALER.city}, {DEALER.state} to see our full lineup of ICON, EPIC, and Denago electric golf carts and LSVs in person. Test drives are always welcome.
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
