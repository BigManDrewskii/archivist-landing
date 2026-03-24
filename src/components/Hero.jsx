import { useEffect, useRef } from 'react'
import ExtensionMockup from './ExtensionMockup'

const GUMROAD_URL = 'https://nasus1.gumroad.com/l/archeo'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Load ASCII background script
    const script = document.createElement('script')
    script.src = '/ascii-hero-bg.js'
    script.async = true
    script.onload = () => {
      if (window.initAsciiHeroBg && heroRef.current) {
        const destroy = window.initAsciiHeroBg(heroRef.current)
        return destroy
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup script and animation
      script.remove()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 120,
          paddingBottom: 96,
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {/* ── Left: Text content ──────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: 'var(--tx-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: 16,
                fontFamily: 'var(--font-display)',
                textShadow: '0 2px 20px rgba(0,0,0,0.7)',
              }}
            >
              The page you saved
              <br />
              is still there tomorrow.
            </h1>

            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--tx-secondary)',
                lineHeight: 1.65,
                maxWidth: 440,
                marginBottom: 32,
                fontFamily: 'var(--font-sans)',
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}
            >
              A Chrome extension that archives any web page as a pixel-perfect
              offline copy. Captures HTML, CSS, fonts, images, video, audio,
              and scripts. Choose ZIP, single HTML, or MHTML. No account.
              No cloud.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: 16,
              }}
            >
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: 48,
                  height: 48,
                  padding: '0 24px',
                  background: 'var(--amber)',
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 8,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'opacity 0.15s ease-out',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Name your price → from $9
              </a>
              <a
                href="#what-it-captures"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: 48,
                  height: 48,
                  padding: '0 24px',
                  background: 'rgba(9,9,9,0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  color: 'var(--tx-tertiary)',
                  fontSize: 14,
                  fontWeight: 400,
                  borderRadius: 8,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  border: '1px solid var(--glass-border)',
                  transition:
                    'color 0.15s ease-out, border-color 0.15s ease-out',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--tx-primary)'
                  e.currentTarget.style.borderColor = 'var(--ui-12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--tx-tertiary)'
                  e.currentTarget.style.borderColor = 'var(--glass-border)'
                }}
              >
                See what it captures →
              </a>
            </div>

            {/* Pricing note */}
            <p
              style={{
                fontSize: 11,
                color: 'var(--tx-muted)',
                marginBottom: 24,
                letterSpacing: '-0.005em',
                fontFamily: 'var(--font-sans)',
                textShadow: '0 1px 6px rgba(0,0,0,0.4)',
              }}
            >
              Name your price. Minimum $9. One license, one person, forever.
            </p>

            {/* Stat pills */}
            <div className="stat-pills" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[
                'v1.0.1 · Manifest V3',
                'Chrome · Edge · Brave · Arc',
                'Zero data collection. Yours forever.',
              ].map((text) => (
                <div
                  key={text}
                  style={{
                    background: 'rgba(17,17,17,0.6)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 4,
                    padding: '5px 12px',
                    fontSize: 11,
                    color: 'var(--tx-tertiary)',
                    letterSpacing: '-0.005em',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Extension mockup ─────────── */}
          <div className="mockup-col">
            <ExtensionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
