export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <span style={{ fontSize: 12, color: 'var(--tx-muted)', letterSpacing: '-0.01em', fontFamily: 'var(--font-mono)' }}>archeo.dev</span>
      <a
        href="mailto:hello@archeo.dev"
        style={{
          fontSize: 12,
          color: 'var(--tx-muted)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          transition: 'color 0.15s ease-out, box-shadow 0.15s ease-out',
          fontFamily: 'var(--font-sans)',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--tx-tertiary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--tx-muted)'}
        onFocus={e => {
          e.currentTarget.style.color = 'var(--tx-tertiary)'
          e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)'
        }}
        onBlur={e => {
          e.currentTarget.style.color = 'var(--tx-muted)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        hello@archeo.dev
      </a>
    </footer>
  )
}
