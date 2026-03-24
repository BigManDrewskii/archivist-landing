import Nav from './components/Nav'
import Hero from './components/Hero'
import VideoBanner from './components/VideoBanner'
import HowItWorks from './components/HowItWorks'
import WhatItCaptures from './components/WhatItCaptures'
import Formats from './components/Formats'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0f0f10' }}>
      <Nav />
      <main>
        <Hero />
        <VideoBanner />
        <HowItWorks />
        <WhatItCaptures />
        <Formats />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  )
}
