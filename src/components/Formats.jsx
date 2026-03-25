const formats = [
  {
    title: 'ZIP Archive',
    recommended: true,
    desc: 'Maintains original folder structure. Open index.html to browse offline. Best for sharing and preserving site organization.',
    tag: 'index.html · assets/ · _cdn/',
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
    <section style={{ paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        <div
          className="format-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {formats.map(({ title, recommended, desc, tag }) => (
            <div
              key={title}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--glass-border)',
                borderRadius: 8,
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              {/* Title + badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--tx-primary)', letterSpacing: '-0.01em', fontFamily: 'var(--font-display)' }}>{title}</span>
                {recommended && (
                  <span style={{
                    fontSize: 10,
                    color: 'var(--amber)',
                    background: 'var(--amber-a10)',
                    border: '1px solid var(--amber-a20)',
                    padding: '2px 7px',
                    borderRadius: 3,
                    fontWeight: 600,
                    letterSpacing: '-0.005em',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    Recommended
                  </span>
                )}
              </div>

              <p style={{ fontSize: 13, color: 'var(--tx-tertiary)', lineHeight: 1.55, flex: 1, fontFamily: 'var(--font-sans)' }}>{desc}</p>

              <div style={{
                fontSize: 11,
                color: 'var(--tx-muted)',
                fontFamily: 'var(--font-mono)',
                paddingTop: 10,
                borderTop: '1px solid var(--glass-border)',
                letterSpacing: '0',
              }}>
                {tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
