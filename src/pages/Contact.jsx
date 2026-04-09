import { useEffect } from 'react'
import { DEALER, COLORS } from '../config'
import LeadForm from '../components/LeadForm'

export default function Contact() {
  useEffect(() => {
    document.title = `Contact Us | ${DEALER.name} — ${DEALER.city}, ${DEALER.state}`
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
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ animation: 'fadeUp 0.7s ease forwards 0.3s', opacity: 0 }}>
            Contact <span style={{ color: COLORS.primary }}>Us</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto"
             style={{ animation: 'fadeUp 0.7s ease forwards 0.5s', opacity: 0 }}>
            Ready for a test drive? Have questions about a model? We are here to help. Reach out or stop by our showroom.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Info */}
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.primary }}>Our Showroom</p>
              <h2 className="text-3xl font-extrabold mb-8" style={{ color: COLORS.charcoal }}>
                Visit {DEALER.name}
              </h2>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                     style={{ background: COLORS.primary + '12' }}>
                  <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: COLORS.charcoal }}>Address</h3>
                  <p className="text-sm" style={{ color: COLORS.charcoal + 'aa' }}>
                    {DEALER.address}<br />
                    {DEALER.city}, {DEALER.state} {DEALER.zip}
                  </p>
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${DEALER.address}, ${DEALER.city}, ${DEALER.state} ${DEALER.zip}`)}`}
                     target="_blank" rel="noopener noreferrer"
                     className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider transition hover:opacity-80"
                     style={{ color: COLORS.primary }}>
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                     style={{ background: COLORS.primary + '12' }}>
                  <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: COLORS.charcoal }}>Email</h3>
                  <a href={`mailto:${DEALER.email}`} className="text-sm transition hover:opacity-80" style={{ color: COLORS.primary }}>
                    {DEALER.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                     style={{ background: COLORS.primary + '12' }}>
                  <svg className="w-5 h-5" style={{ color: COLORS.primary }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: COLORS.charcoal }}>Hours</h3>
                  <div className="space-y-1">
                    {DEALER.hours.map(h => (
                      <div key={h.days} className="flex justify-between gap-8 text-sm" style={{ color: COLORS.charcoal + 'aa' }}>
                        <span className="font-medium" style={{ color: COLORS.charcoal }}>{h.days}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                <iframe
                  title={`${DEALER.name} Location`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.5!2d-83.4855!3d42.2004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3a0e0b0b0b0b%3A0x0!2s574+W+Columbia+Ave%2C+Belleville%2C+MI+48111!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right — Lead Form */}
            <div className="reveal delay-200">
              <div className="rounded-xl p-8 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.charcoal }}>Send Us a Message</h3>
                <p className="text-sm mb-6" style={{ color: COLORS.charcoal + '88' }}>
                  Fill out the form below and a member of our team will get back to you shortly.
                </p>
                <LeadForm source="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
