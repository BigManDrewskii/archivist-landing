import ExtensionMockup from './ExtensionMockup'

const GUMROAD_URL = 'https://nasus1.gumroad.com/l/mvaelh'

export default function Hero() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 64px)',
            fontWeight: 700,
            color: 'var(--tx-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            textAlign: 'center',
            marginBottom: 22,
            fontFamily: 'var(--font-display)',
          }}
        >
          The page you saved<br />is still there tomorrow.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 17,
            fontWeight: 400,
            color: 'var(--tx-tertiary)',
            lineHeight: 1.6,
            maxWidth: 480,
            textAlign: 'center',
            marginBottom: 40,
            fontFamily: 'var(--font-sans)',
          }}
        >
          A Chrome extension that pulls down HTML, CSS, fonts, images, and scripts into a folder you can open anytime. No account. No cloud. $9.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 14 }}>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: 48,
              padding: '0 24px',
              background: 'var(--amber)',
              color: '#000',
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.15s',
              border: 'none',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Name your price → from $9
          </a>
          <a
            href="#what-it-captures"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: 48,
              padding: '0 24px',
              background: 'transparent',
              color: 'var(--tx-tertiary)',
              fontSize: 14,
              fontWeight: 400,
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              border: '1px solid var(--glass-border)',
              transition: 'color 0.15s, border-color 0.15s',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--tx-primary)'
              e.currentTarget.style.borderColor = 'var(--ui-12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--tx-tertiary)'
              e.currentTarget.style.borderColor = 'var(--glass-border)'
            }}
          >
            See what it captures →
          </a>
        </div>

        {/* Tiny note */}
        <p style={{ fontSize: 11, color: 'var(--tx-muted)', marginBottom: 20, textAlign: 'center', letterSpacing: '-0.005em', fontFamily: 'var(--font-sans)' }}>
          ↳ Name your price. Minimum $9. One license, one person, forever.
        </p>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 52 }}>
          {[
            'v1.0.0 · Manifest V3',
            'Chrome · Edge · Brave · Arc',
            'No account. No cloud. Yours.',
          ].map((text) => (
            <div
              key={text}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--glass-border)',
                borderRadius: 4,
                padding: '4px 12px',
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

        {/* Extension mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ExtensionMockup />
        </div>

      </div>
    </section>
  )
}
