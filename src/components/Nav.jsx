export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 52,
        borderBottom: '1px solid var(--glass-border)',
        background: 'rgba(9,9,9,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Wordmark with logo */}
      <a href="#" className="flex items-center gap-2 no-underline" style={{ textDecoration: 'none' }}>
        <img
          src="/archeo-logo.svg"
          alt="Archeo"
          style={{ width: 20, height: 20, display: 'block' }}
        />
        <span style={{
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--tx-primary)',
          letterSpacing: '-0.01em',
          fontFamily: 'var(--font-display)',
        }}>
          archeo<span style={{ color: 'var(--amber)' }}>.dev</span>
        </span>
      </a>

      {/* CTA */}
      <a
        href="https://nasus1.gumroad.com/l/mvaelh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
        style={{
          background: 'var(--amber)',
          color: '#000',
          fontSize: 12,
          fontWeight: 600,
          padding: '0 14px',
          height: 32,
          borderRadius: 6,
          border: 'none',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          transition: 'opacity 0.15s',
          fontFamily: 'var(--font-sans)',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Get it — from $9
      </a>
    </nav>
  )
}
