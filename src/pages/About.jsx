import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DEALER, COLORS } from '../config'

const VALUES = [
  {
    title: 'Quality',
    desc: 'We only carry ICON — the most awarded electric golf cart brand in the industry. Every cart meets our rigorous standards before it reaches you.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    title: 'Service',
    desc: 'From your first test drive to years down the road, we stand behind every cart we sell with expert service, maintenance, and genuine parts.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
  },
  {
    title: 'Community',
    desc: 'Belleville is our home. We are proud to sponsor local events, support our neighbors, and build lasting relationships with every customer we serve.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'ICON carts lead the industry with touchscreen displays, GPS navigation, backup cameras, and DOT street-legal compliance straight from the factory.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
      </svg>
    ),
  },
]

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
            About <span style={{ color: COLORS.primary }}>{DEALER.name}</span>
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.primary }}>How We Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: COLORS.charcoal }}>
                Born in Belleville, Built on Passion
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>
                <p>
                  NXT Level Carts was founded right here in Belleville, Michigan, with a simple belief: personal electric vehicles should be as refined, reliable, and exciting as the people who drive them.
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
                  <span className="text-6xl font-extrabold uppercase tracking-tight" style={{ color: 'rgba(0,0,0,0.04)' }}>NXT Level</span>
                  <p className="text-xs uppercase tracking-widest mt-3" style={{ color: COLORS.primary + '66' }}>Belleville, Michigan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.primary }}>The Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Meet the People Behind <span style={{ color: COLORS.primary }}>NXT Level</span>
            </h2>
          </div>
          <div className="max-w-sm mx-auto reveal">
            <div className="rounded-xl overflow-hidden shadow-sm" style={{ background: COLORS.cream }}>
              <div className="aspect-square" style={{ background: '#e8e3de' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: COLORS.primary + '15' }}>
                    <span className="text-3xl font-extrabold" style={{ color: COLORS.primary }}>AJ</span>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.charcoal }}>Andrew Jones</h3>
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: COLORS.primary }}>Owner</p>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>
                  Andrew founded NXT Level Carts with a hands-on approach to customer service and a deep knowledge of electric vehicles. He personally ensures every customer finds the right cart for their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.primary }}>What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                   style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                     style={{ background: COLORS.primary + '12', color: COLORS.primary }}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.charcoal }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: COLORS.dark }}>
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.primary }}>Come See Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experience the NXT Level Difference
          </h2>
          <p className="text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
            Visit our showroom in {DEALER.city}, {DEALER.state} to see our full lineup of ICON electric golf carts in person. Test drives are always welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                  style={{ background: COLORS.primary, color: '#fff' }}>
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
