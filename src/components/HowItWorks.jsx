const steps = [
  {
    num: '01',
    title: 'Install',
    desc: 'Load the extension in Chrome. No sign-in, no account. Done.',
  },
  {
    num: '02',
    title: 'Archive',
    desc: 'Click the icon. Archivist fetches every asset on the page — CSS, fonts, images, scripts, lazy-loaded content, shadow DOM — and saves it locally.',
  },
  {
    num: '03',
    title: 'Open offline',
    desc: 'Unzip, open index.html. It looks the same. No requests go out, nothing is missing.',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <p style={{
          fontSize: 11,
          color: 'var(--tx-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: 28,
          fontFamily: 'var(--font-display)',
        }}>
          How it works
        </p>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 12,
          }}
        >
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--glass-border)',
                borderRadius: 8,
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              <div style={{ fontSize: 11, color: 'var(--amber)', marginBottom: 10, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{num}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--tx-primary)', marginBottom: 8, letterSpacing: '-0.01em', fontFamily: 'var(--font-display)' }}>{title}</div>
              <p style={{ fontSize: 13, color: 'var(--tx-tertiary)', lineHeight: 1.55, fontFamily: 'var(--font-sans)' }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
