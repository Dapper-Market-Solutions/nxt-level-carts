import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DEALER, COLORS, FINANCING } from '../config'
import LeadForm from '../components/LeadForm'

const STEPS = [
  {
    num: '01',
    title: 'Choose Your Model',
    desc: 'Browse our full lineup of ICON, EPIC, and Denago electric golf carts and find the one that fits your lifestyle — from compact 2-seaters to spacious 6-passenger cruisers.',
  },
  {
    num: '02',
    title: 'Apply Online',
    desc: 'Fill out our quick financing application. Most applications take just a few minutes. We work with multiple lenders to find you the best rate.',
  },
  {
    num: '03',
    title: 'Get Approved',
    desc: 'Most applications are approved same day. We will walk you through your options, monthly payment, and terms so there are no surprises.',
  },
  {
    num: '04',
    title: 'Drive Home',
    desc: `Sign the paperwork, grab the keys, and take your new golf cart home. It is that simple. Welcome to ${DEALER.name}.`,
  },
]

const FAQ = [
  {
    q: 'What credit score do I need to qualify for financing?',
    a: 'We work with multiple lenders to accommodate a range of credit profiles. While a higher credit score can help you secure better rates, we encourage everyone to apply — you might be surprised at the options available to you.',
  },
  {
    q: 'How long are the financing terms?',
    a: 'We offer flexible terms ranging from 12 to 72 months. Shorter terms mean lower total cost, while longer terms keep your monthly payments manageable. We will help you find the right balance.',
  },
  {
    q: 'Do you accept trade-ins?',
    a: 'Yes. We accept trade-ins of golf carts and other personal vehicles. Bring yours in and we will give you a fair market appraisal that can be applied directly to your new ICON cart.',
  },
  {
    q: 'Is there a down payment required?',
    a: 'Down payment requirements vary by lender and credit profile. In many cases, a down payment can lower your monthly payment and help you secure a better interest rate. We will work with you to find the best structure.',
  },
  {
    q: 'Can I pay off my loan early without penalties?',
    a: 'Absolutely. We believe in no prepayment penalties. If you want to pay off your cart early and save on interest, you are free to do so at any time with no extra fees.',
  },
]

export default function Financing() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = `Financing | ${DEALER.name} — Flexible Payment Options`
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
            Easy Payments
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
            {FINANCING.headline}
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto"
             style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
            {FINANCING.subheadline}
          </p>
        </div>
      </section>

      {/* Financing Features */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>Why Finance With Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Getting Your Cart Should Be <span style={{ color: COLORS.accent }}>Simple</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {FINANCING.features.map((f, i) => (
              <div key={i} className="reveal flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm"
                   style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                     style={{ background: COLORS.primary + '12' }}>
                  <span className="text-sm font-bold" style={{ color: COLORS.accent }}>&#10003;</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Four Simple Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: COLORS.accent + '18' }}>{step.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.charcoal }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-2xl" style={{ color: COLORS.accent + '30' }}>&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: COLORS.accent }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.charcoal }}>
              Common Questions
            </h2>
          </div>
          <div className="space-y-3 reveal">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer">
                  <span className="text-sm font-semibold" style={{ color: COLORS.charcoal }}>{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform"
                        style={{
                          background: openFaq === i ? COLORS.primary : COLORS.primary + '12',
                          color: openFaq === i ? '#000' : COLORS.accent,
                          transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}>
                    +
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300"
                     style={{ maxHeight: openFaq === i ? '200px' : '0px', opacity: openFaq === i ? 1 : 0 }}>
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: COLORS.charcoal + 'aa' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className="py-20 px-6" style={{ background: COLORS.dark }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.accent }}>Get Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Make It Happen?
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Tell us what you are looking for and we will reach out with financing options tailored to your budget. No obligation, no pressure — just the information you need to make the right decision.
              </p>
              <ul className="space-y-3">
                {['Quick same-day approvals', 'Multiple lender options', 'Trade-ins welcome', 'No prepayment penalties'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="font-bold" style={{ color: COLORS.accent }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal delay-200 rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-xl font-bold text-white mb-1">Get Your Financing Quote</h3>
              <p className="text-white/40 text-sm mb-6">Fill out the form and we will get back to you with options.</p>
              <LeadForm source="financing" dark />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
