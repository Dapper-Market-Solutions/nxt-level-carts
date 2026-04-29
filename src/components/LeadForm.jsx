import { useState } from 'react'
import { DEALER, COLORS, MODELS } from '../config'

export default function LeadForm({ source = 'website', compact = false, dark = false, showModel = true }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', models: [] })
  const [done, setDone] = useState(false)

  function toggleModel(name) {
    setForm(f => ({
      ...f,
      models: f.models.includes(name) ? f.models.filter(x => x !== name) : [...f.models, name],
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const params = new URLSearchParams(window.location.search)
    try {
      await fetch(DEALER.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          models: form.models,
          model: form.models.join(', '),
          source,
          pageUrl: window.location.pathname,
          referrer: document.referrer || 'direct',
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
          utm_content: params.get('utm_content') || '',
        }),
      })
    } catch (_) {}
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'NXT Level Carts Lead',
        content_category: form.models.join(', ') || source,
      })
    }
    setDone(true)
  }

  const inputClass = dark
    ? 'w-full px-4 py-3 rounded bg-white/10 text-white text-sm border border-white/10 focus:outline-none focus:border-red-400 transition placeholder-white/25'
    : 'w-full px-4 py-3 rounded border text-sm focus:outline-none transition'

  const inputStyle = dark ? {} : { borderColor: '#d1d5db', color: COLORS.charcoal }

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4" style={{ color: COLORS.accent }}>✓</div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : ''}`} style={{ color: dark ? '#fff' : COLORS.charcoal }}>We Got Your Info!</h3>
        <p className={`text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>A member of our team will reach out shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? '' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <input type="text" name="name" required placeholder="Your Name *" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className={inputClass} style={inputStyle}
          onFocus={e => e.target.style.borderColor = COLORS.accent}
          onBlur={e => e.target.style.borderColor = dark ? 'rgba(255,255,255,0.1)' : '#d1d5db'} />
        <input type="tel" name="phone" required placeholder="Phone Number *" value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className={inputClass} style={inputStyle}
          onFocus={e => e.target.style.borderColor = COLORS.accent}
          onBlur={e => e.target.style.borderColor = dark ? 'rgba(255,255,255,0.1)' : '#d1d5db'} />
      </div>
      <input type="email" name="email" required placeholder="Email Address *" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className={inputClass} style={inputStyle}
        onFocus={e => e.target.style.borderColor = COLORS.accent}
        onBlur={e => e.target.style.borderColor = dark ? 'rgba(255,255,255,0.1)' : '#d1d5db'} />
      {showModel && (
        <div>
          <p className={`text-sm font-medium mb-2 ${dark ? 'text-white/70' : 'text-gray-600'}`}>
            What are you interested in? <span className="font-normal text-xs opacity-75">(select all that apply)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {[...MODELS.map(m => m.name), 'Not sure — help me choose'].map(name => {
              const selected = form.models.includes(name)
              return (
                <button key={name} type="button" onClick={() => toggleModel(name)}
                  className="px-3.5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition cursor-pointer border"
                  style={selected
                    ? { background: COLORS.accent, color: '#fff', borderColor: COLORS.accent }
                    : (dark
                        ? { borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.04)' }
                        : { borderColor: '#d1d5db', color: COLORS.charcoal, background: '#fff' })
                  }>
                  {name}
                </button>
              )
            })}
          </div>
        </div>
      )}
      <button type="submit"
        className="w-full py-4 rounded text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer"
        style={{ background: COLORS.primary, color: '#000' }}>
        {source === 'landing' ? 'Claim My Offer' : 'Schedule My Test Drive'}
      </button>
      <p className={`text-center text-xs leading-relaxed ${dark ? 'text-white/25' : 'text-gray-400'}`}>
        By submitting, you consent to receive communications from {DEALER.name}. We don't spam — promise. Unsubscribe anytime.{' '}
        <a href="/privacy" className={`underline ${dark ? 'text-white/35 hover:text-white/50' : 'text-gray-400 hover:text-gray-600'} transition`}>Privacy Policy</a>
      </p>
    </form>
  )
}
