import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Models from './pages/Models'
import About from './pages/About'
import Financing from './pages/Financing'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Landing from './pages/Landing'
import CookieConsent from './components/CookieConsent'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05, rootMargin: '50px 0px -20px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible')
        observer.observe(el)
      })
      // Double rAF ensures DOM is fully painted before checking visibility
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
              el.classList.add('visible')
            }
          })
        })
      })
    }, 50)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [pathname])
  return children
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        {/* Landing page — no header/footer */}
        <Route path="/promo" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/offer" element={<PageWrapper><Landing /></PageWrapper>} />

        {/* Main site */}
        <Route path="*" element={
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <PageWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/models" element={<Models />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/financing" element={<Financing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Routes>
              </PageWrapper>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </>
  )
}
