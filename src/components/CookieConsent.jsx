import { useState, useEffect } from 'react'
import { COLORS } from '../config'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    if (document.cookie.includes('nxtlevel_cookie_consent=')) {
      setHasConsented(true)
    } else {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    document.cookie = 'nxtlevel_cookie_consent=accepted;path=/;max-age=31536000;SameSite=Lax'
    setVisible(false)
    setHasConsented(true)
  }

  function decline() {
    document.cookie = 'nxtlevel_cookie_consent=declined;path=/;max-age=31536000;SameSite=Lax'
    setVisible(false)
    setHasConsented(true)
  }

  function reopenBanner() {
    document.cookie = 'nxtlevel_cookie_consent=;path=/;max-age=0'
    setHasConsented(false)
    setVisible(true)
  }

  return (
    <>
      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4"
          style={{ animation: 'fadeUp 0.4s ease forwards' }}
        >
          <div
            className="max-w-3xl mx-auto p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-xl shadow-2xl"
            style={{ background: COLORS.dark, border: `1px solid ${COLORS.primary}30` }}
          >
            <div className="flex-1">
              <p className="text-white text-base font-bold mb-1">Cookie Preferences</p>
              <p className="text-white/50 text-sm leading-relaxed">
                We use cookies and similar technologies to analyze site traffic and improve your experience.
                No tracking cookies are set until you provide consent.
                By clicking "Accept All", you consent to analytics and marketing cookies.{' '}
                <a href="/privacy" className="underline hover:text-white transition" style={{ color: COLORS.primary }}>Privacy Policy</a>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer rounded"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={(e) => e.target.style.borderColor = COLORS.primary}
                onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
              >
                Essential Only
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-sm font-bold transition-all cursor-pointer rounded"
                style={{ background: COLORS.primary, color: '#000' }}
                onMouseEnter={(e) => e.target.style.background = COLORS.primaryLight}
                onMouseLeave={(e) => e.target.style.background = COLORS.primary}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {hasConsented && !visible && (
        <button
          onClick={reopenBanner}
          className="fixed bottom-4 left-4 z-[9998] flex items-center gap-2 px-3 py-2 text-xs backdrop-blur-sm rounded-full hover:text-white transition-all cursor-pointer"
          style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
          aria-label="Cookie Settings"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="9" r="1.5" fill="currentColor" />
            <circle cx="15" cy="7" r="1" fill="currentColor" />
            <circle cx="10" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="13" r="1.5" fill="currentColor" />
          </svg>
          Cookie Settings
        </button>
      )}
    </>
  )
}
