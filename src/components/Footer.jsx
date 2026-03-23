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
      <span style={{ fontSize: 12, color: 'var(--tx-muted)', letterSpacing: '-0.01em', fontFamily: 'var(--font-mono)' }}>archivist.dev</span>
      <a
        href="mailto:hello@archivist.dev"
        style={{
          fontSize: 12,
          color: 'var(--tx-muted)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          transition: 'color 0.15s',
          fontFamily: 'var(--font-sans)',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--tx-tertiary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--tx-muted)'}
      >
        hello@archivist.dev
      </a>
    </footer>
  )
}
