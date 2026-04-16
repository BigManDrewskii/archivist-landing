import { useEffect, useRef } from 'react'

const URL_FREE = 'https://nasus1.gumroad.com/l/archeo'
const URL_PRO  = 'https://nasus1.gumroad.com/l/archeo-pro'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/ascii-hero-bg.js'
    script.async = true
    script.onload = () => {
      if (window.initAsciiHeroBg && heroRef.current) {
        window.initAsciiHeroBg(heroRef.current)
      }
    }
    document.head.appendChild(script)
    return () => script.remove()
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
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 120,
          paddingBottom: 96,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontWeight: 700,
              color: 'var(--tx-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: 20,
              fontFamily: 'var(--font-display)',
              textShadow: '0 2px 20px rgba(0,0,0,0.7)',
            }}
          >
            Archive the web.
            <br />
            Feed it to AI.
          </h1>

          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: 'var(--tx-secondary)',
              lineHeight: 1.65,
              maxWidth: 480,
              margin: '0 auto 32px',
              fontFamily: 'var(--font-sans)',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            Archive any web page as a pixel-perfect offline copy. Clean HTML ready for LLM analysis, RAG pipelines, and design system extraction. Start free.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 24,
            }}
          >
            <a
              href={URL_FREE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 48,
                height: 48,
                padding: '0 28px',
                background: 'var(--amber)',
                color: '#000',
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'opacity 0.15s ease-out, box-shadow 0.15s ease-out',
                border: 'none',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              Try free — 5 archives
            </a>
            <a
              href={URL_PRO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 48,
                height: 48,
                padding: '0 28px',
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
                transition: 'color 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.15s ease-out',
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
              onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              Get Pro → from $9
            </a>
          </div>

          <p
            style={{
              fontSize: 12,
              color: 'var(--tx-muted)',
              marginBottom: 32,
              letterSpacing: '-0.005em',
              fontFamily: 'var(--font-sans)',
              textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            }}
          >
            Free: 5 archives · Pro: unlimited, $9 lifetime
          </p>

          <div className="stat-pills" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              'v1.0.1 · Manifest V3',
              'Chrome · Edge · Brave · Arc',
              'Zero data collection',
            ].map((text) => (
              <div
                key={text}
                style={{
                  background: 'rgba(17,17,17,0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 4,
                  padding: '6px 12px',
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
      </div>
    </section>
  )
}