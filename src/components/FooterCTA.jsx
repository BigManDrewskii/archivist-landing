const GUMROAD_URL = 'https://nasus1.gumroad.com/l/archeo'

export default function FooterCTA() {
  return (
    <section style={{
      paddingTop: 120,
      paddingBottom: 120,
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--mesh-gradient)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: 'var(--amber-a10)',
          border: '1px solid var(--amber-a20)',
          borderRadius: 99,
          marginBottom: 24,
        }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--amber)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
          }}>
            Last chance
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            color: 'var(--tx-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 20,
            fontFamily: 'var(--font-display)',
          }}
        >
          That link will 404.<br />Your archive won't.
        </h2>

        <p
          style={{
            fontSize: 17,
            color: 'var(--tx-tertiary)',
            lineHeight: 1.6,
            marginBottom: 40,
            maxWidth: 480,
            fontFamily: 'var(--font-sans)',
          }}
        >
          Start with 5 free archives. Upgrade to Pro for unlimited — from $9, one license, forever. No subscription, no cloud.
        </p>

        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            padding: '0 40px',
            background: 'var(--amber)',
            color: '#000',
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 8,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            marginBottom: 16,
            transition: 'opacity 0.15s ease-out, box-shadow 0.15s ease-out, transform 0.15s ease-out',
            border: 'none',
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          onFocus={e => e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25), 0 4px 16px rgba(0,0,0,0.3)'}
          onBlur={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)'}
        >
          Try 5 free → Upgrade anytime
        </a>

        <p style={{ fontSize: 12, color: 'var(--tx-muted)', letterSpacing: '-0.005em', fontFamily: 'var(--font-sans)' }}>
          ↳ Free tier with 5 archives. Pro unlimited from $9. Single-user lifetime license.
        </p>

      </div>
    </section>
  )
}
