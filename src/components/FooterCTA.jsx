const GUMROAD_URL = 'https://nasus1.gumroad.com/l/archeo'

export default function FooterCTA() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: 'var(--tx-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 18,
            fontFamily: 'var(--font-display)',
          }}
        >
          That link will 404.<br />Your archive won't.
        </h2>

        <p
          style={{
            fontSize: 16,
            color: 'var(--tx-tertiary)',
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 460,
            fontFamily: 'var(--font-sans)',
          }}
        >
          Pay what you want, minimum $9. Yours forever — no subscription, no renewal.
        </p>

        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: 48,
            padding: '0 32px',
            background: 'var(--amber)',
            color: '#000',
            fontSize: 14,
            fontWeight: 600,
            borderRadius: 6,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            marginBottom: 14,
            transition: 'opacity 0.15s ease-out, box-shadow 0.15s ease-out',
            border: 'none',
            fontFamily: 'var(--font-sans)',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)'}
          onBlur={e => e.currentTarget.style.boxShadow = 'none'}
        >
          Get Archeo → from $9
        </a>

        <p style={{ fontSize: 11, color: 'var(--tx-muted)', letterSpacing: '-0.005em', fontFamily: 'var(--font-sans)' }}>
          ↳ Name your price at checkout. Single-user lifetime license.
        </p>

      </div>
    </section>
  )
}
