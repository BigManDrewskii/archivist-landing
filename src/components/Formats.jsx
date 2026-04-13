const formats = [
  {
    title: 'ZIP Archive',
    recommended: true,
    desc: 'Maintains original folder structure. Open index.html to browse offline. Best for sharing and preserving site organization.',
    tag: 'index.html · assets/ · _cdn/',
    highlight: 'Most flexible',
  },
  {
    title: 'Single HTML',
    recommended: false,
    desc: 'All assets inlined as base64. One file, no dependencies. Email it, add to Notion, or open anywhere without internet.',
    tag: 'archive.html',
  },
  {
    title: 'MHTML',
    recommended: false,
    desc: 'Browser-native snapshot. Opens in Chrome, Edge, and Opera. Exact capture of page state without JavaScript execution.',
    tag: '.mhtml',
  },
]

export default function Formats() {
  return (
    <section id="formats" style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* Split layout: recommended large, two alternatives stacked */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>

          {/* Left: Recommended format (large) */}
          <div style={{
            background: 'linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-surface) 100%)',
            border: '2px solid var(--amber-a30)',
            borderRadius: 16,
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a40)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--amber-a30)'}
          >
            {/* Recommended badge */}
            <div style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'var(--amber)',
              color: '#000',
              fontSize: 11,
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 6,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
            }}>
              Most popular
            </div>

            <div style={{ marginBottom: 16 }}>
              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                color: 'var(--tx-primary)',
                marginBottom: 12,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-display)',
              }}>
                {formats[0].title}
              </h3>
              <p style={{
                fontSize: 15,
                color: 'var(--tx-tertiary)',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
              }}>
                {formats[0].desc}
              </p>
            </div>

            <div style={{
              marginTop: 'auto',
              paddingTop: 20,
              borderTop: '1px solid var(--glass-border)',
            }}>
              <div style={{
                fontSize: 12,
                color: 'var(--tx-muted)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
                marginBottom: 8,
              }}>
                {formats[0].tag}
              </div>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                color: 'var(--amber)',
                background: 'var(--amber-a08)',
                padding: '4px 10px',
                borderRadius: 4,
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-sans)',
              }}>
                {formats[0].highlight}
              </div>
            </div>
          </div>

          {/* Right: Two alternatives stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {formats.slice(1).map((format) => (
              <div
                key={format.title}
                style={{
                  flex: 1,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 12,
                  padding: '24px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                  transition: 'border-color 0.15s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
              >
                <h4 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--tx-primary)',
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                  fontFamily: 'var(--font-display)',
                }}>
                  {format.title}
                </h4>
                <p style={{
                  fontSize: 13,
                  color: 'var(--tx-tertiary)',
                  lineHeight: 1.55,
                  flex: 1,
                  fontFamily: 'var(--font-sans)',
                  marginBottom: 12,
                }}>
                  {format.desc}
                </p>
                <div style={{
                  fontSize: 11,
                  color: 'var(--tx-muted)',
                  fontFamily: 'var(--font-mono)',
                  paddingTop: 12,
                  borderTop: '1px solid var(--glass-border)',
                  letterSpacing: '0.01em',
                }}>
                  {format.tag}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
