import { useEffect } from 'react'
import { DEALER, COLORS } from '../config'

const SECTIONS = [
  {
    title: 'Who We Are',
    content: `${DEALER.name} operates an electric golf cart dealership located at ${DEALER.address}, ${DEALER.city}, ${DEALER.state} ${DEALER.zip}. This privacy policy explains how we collect, use, and protect your personal information when you visit our website or interact with our business.`,
  },
  {
    title: 'Information We Collect',
    content: `We may collect the following types of personal information when you interact with our website or submit a form:\n\n- **Name** — to identify you and personalize communications\n- **Email address** — to respond to your inquiries and send updates\n- **Phone number** — to contact you regarding your request\n- **Model interest** — to tailor our recommendations to your needs\n- **UTM parameters and referrer data** — to understand how you found us\n- **Browser and device information** — collected automatically for analytics purposes`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information is used to:\n\n- Respond to your inquiries and schedule test drives\n- Provide information about our products and financing options\n- Improve our website and customer experience\n- Send occasional updates about new models or promotions (with your consent)\n- Comply with applicable legal obligations\n\nWe will never sell your personal information to third parties.`,
  },
  {
    title: 'Cookies and Tracking',
    content: `Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. These may include:\n\n- **Essential cookies** — required for basic site functionality\n- **Analytics cookies** — to understand how visitors interact with our site\n- **Advertising cookies** — if you arrived via an ad, tracking pixels may be used to measure campaign effectiveness\n\nYou can control cookie settings through your browser preferences. Disabling cookies may affect site functionality.`,
  },
  {
    title: 'Third-Party Services',
    content: `We may use third-party services that collect or process data on our behalf, including:\n\n- **Google Maps** — for displaying our location\n- **Google Analytics / Google Tag Manager** — for website traffic analysis and conversion tracking\n- **Form processing services** — for handling lead submissions securely\n- **UserWay** — for accessibility compliance and assistive technology\n\nThese services have their own privacy policies. We encourage you to review them. We only share the minimum information necessary for these services to function.`,
  },
  {
    title: 'DapperIQ Data Services',
    content: `This website is built and managed by **Dapper Market Solutions** ("DMS") using the **DapperIQ** platform. DMS may process certain data on behalf of ${DEALER.name} to support website operations, lead management, and analytics.\n\n- **Data processed by DMS** includes form submissions (name, email, phone, model interest), website analytics, and campaign attribution data.\n- **Purpose** — DMS processes this data solely to operate and improve the website and lead delivery services on behalf of ${DEALER.name}.\n- **Retention** — Lead data is retained for as long as necessary to fulfill the business relationship. You may request deletion at any time.\n- **No independent use** — DMS does not use your personal data for its own marketing purposes. Data is processed only as directed by ${DEALER.name}.\n\nFor questions about how your data is handled, contact us using the information in the Contact Us section below.`,
  },
  {
    title: 'Data Security',
    content: `We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. Form submissions are transmitted securely and stored in systems with appropriate access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:\n\n- **Access** the personal information we hold about you\n- **Correct** inaccurate or incomplete information\n- **Delete** your personal data (subject to legal obligations)\n- **Opt out** of marketing communications at any time\n- **Request** a copy of your data in a portable format\n\nTo exercise any of these rights, contact us using the information below.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this privacy policy or how we handle your personal information, please contact us:\n\n**${DEALER.name}**\n${DEALER.address}, ${DEALER.city}, ${DEALER.state} ${DEALER.zip}\nEmail: ${DEALER.email}`,
  },
]

export default function Privacy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${DEALER.name}`
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center pt-32 pb-16" style={{ background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.charcoal} 50%, ${COLORS.dark} 100%)` }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3"
              style={{ animation: 'fadeUp 0.7s ease forwards 0.2s', opacity: 0 }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-white/40"
             style={{ animation: 'fadeUp 0.7s ease forwards 0.4s', opacity: 0 }}>
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.charcoal }}>{section.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: COLORS.charcoal + 'aa' }}>
                  {section.content.split('**').map((part, j) =>
                    j % 2 === 1
                      ? <strong key={j} style={{ color: COLORS.charcoal }}>{part}</strong>
                      : <span key={j}>{part}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p className="text-xs" style={{ color: COLORS.charcoal + '66' }}>
              &copy; {new Date().getFullYear()} {DEALER.name}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
