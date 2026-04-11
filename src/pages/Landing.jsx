import { useState, useEffect } from 'react'
import { DEALER, COLORS, TESTIMONIALS } from '../config'
import LeadForm from '../components/LeadForm'

const TRUST_BADGES = [
  { label: 'PGA Show Winner', sub: 'Award-Winning Design' },
  { label: 'DOT Compliant', sub: 'Street Legal' },
  { label: 'Full Warranty', sub: 'Parts & Service' },
  { label: 'Financing Available', sub: 'Low Monthly Payments' },
]

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    document.title = `Exclusive Spring Offer | ${DEALER.name} — Save Up to $2,000`
  }, [])

  // Countdown: always shows time remaining until 14 days from now (rolling urgency)
  useEffect(() => {
    const getEnd = () => {
      const stored = sessionStorage.getItem('nxt_promo_end')
      if (stored) return parseInt(stored)
      const end = Date.now() + 14 * 24 * 60 * 60 * 1000
      sessionStorage.setItem('nxt_promo_end', end.toString())
      return end
    }
    const end = getEnd()
    const tick = () => {
      const diff = Math.max(0, end - Date.now())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const testimonial = TESTIMONIALS[0]

  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(180deg, ${COLORS.dark} 0%, ${COLORS.charcoal} 50%, ${COLORS.dark} 100%)` }}>
      {/* Top bar — urgency */}
      <div className="w-full py-3 text-center" style={{ background: COLORS.primary }}>
        <p className="text-xs font-bold uppercase tracking-widest text-black">
          Limited Time Offer — Ends Soon &bull; Only While Inventory Lasts
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Logo */}
        <div className="text-center mb-10" style={{ animation: 'fadeUp 0.7s ease forwards 0.1s', opacity: 0 }}>
          <div className="text-xl font-bold tracking-wide text-white uppercase inline-block">
            <span style={{ color: COLORS.primary }}>NXT</span> Level Carts
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Messaging */}
          <div>
            {/* Limited badge */}
            <div className="inline-block mb-6" style={{ animation: 'fadeUp 0.7s ease forwards 0.2s', opacity: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ background: COLORS.primary + '20', color: COLORS.primary, border: `1px solid ${COLORS.primary}40` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: COLORS.primary }} />
                Spring 2026 Exclusive
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
                style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
              Save Up to <span style={{ color: COLORS.primary }}>$2,000</span> on Select ICON Models
            </h1>

            <p className="text-base md:text-lg text-white/55 leading-relaxed mb-8"
               style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
              We have a limited number of award-winning ICON electric golf carts at exclusive spring pricing. Once they are gone, they are gone. Claim your offer before inventory runs out.
            </p>

            {/* Countdown */}
            <div className="mb-10" style={{ animation: 'fadeUp 0.7s ease forwards 0.6s', opacity: 0 }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Offer Expires In</p>
              <div className="flex gap-3">
                {[
                  { val: timeLeft.days, label: 'Days' },
                  { val: timeLeft.hours, label: 'Hours' },
                  { val: timeLeft.minutes, label: 'Min' },
                  { val: timeLeft.seconds, label: 'Sec' },
                ].map(t => (
                  <div key={t.label} className="text-center rounded-lg px-4 py-3"
                       style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-2xl font-extrabold text-white">{String(t.val).padStart(2, '0')}</div>
                    <div className="text-xs uppercase tracking-wider text-white/30 mt-0.5">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-10" style={{ animation: 'fadeUp 0.7s ease forwards 0.7s', opacity: 0 }}>
              {TRUST_BADGES.map(badge => (
                <div key={badge.label} className="flex items-center gap-3 rounded-lg px-4 py-3"
                     style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                       style={{ background: COLORS.primary + '20' }}>
                    <span className="text-sm font-bold" style={{ color: COLORS.primary }}>&#10003;</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{badge.label}</div>
                    <div className="text-xs text-white/35">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', animation: 'fadeUp 0.7s ease forwards 0.8s', opacity: 0 }}>
              <div className="flex gap-0.5 mb-3">
                {Array(testimonial.stars).fill(0).map((_, j) => (
                  <span key={j} className="text-sm" style={{ color: COLORS.primary }}>&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-3">"{testimonial.text}"</p>
              <div>
                <span className="text-sm font-bold text-white">{testimonial.name}</span>
                <span className="text-xs text-white/30 ml-2">{testimonial.location}</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ animation: 'fadeUp 0.7s ease forwards 0.4s', opacity: 0 }}>
            <div className="rounded-xl p-8 sticky top-8"
                 style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                     style={{ background: COLORS.primary, color: '#000' }}>
                  Free &mdash; No Obligation
                </div>
                <h2 className="text-xl font-bold text-white mb-1">Claim Your Spring Offer</h2>
                <p className="text-sm text-white/40">Submit your info and we will send your exclusive pricing.</p>
              </div>
              <LeadForm source="landing" dark />
            </div>

            {/* Phone */}
            <div className="text-center mt-6">
              <p className="text-xs text-white/25 mb-1">Prefer to call?</p>
              {DEALER.phone ? (
                <a href={`tel:${DEALER.phone}`} className="text-lg font-bold transition hover:opacity-80" style={{ color: COLORS.primary }}>
                  {DEALER.phone}
                </a>
              ) : (
                <a href={`mailto:${DEALER.email}`} className="text-sm font-bold transition hover:opacity-80" style={{ color: COLORS.primary }}>
                  {DEALER.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} {DEALER.name} &bull; {DEALER.address}, {DEALER.city}, {DEALER.state} {DEALER.zip}
          </p>
          <a href="/privacy" className="text-xs text-white/15 hover:text-white/30 transition mt-1 inline-block">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}
