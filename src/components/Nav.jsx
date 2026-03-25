import { useState, useEffect } from 'react'

const GUMROAD_URL = 'https://nasus1.gumroad.com/l/archeo'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What it captures', href: '#what-it-captures' },
  { label: 'Formats', href: '#formats' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="nav-float"
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 720,
        width: 'calc(100% - 32px)',
        height: 48,
        padding: '0 20px',
        background: scrolled
          ? 'rgba(9, 9, 9, 0.92)'
          : 'rgba(9, 9, 9, 0.78)',
        backdropFilter: 'blur(24px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
        border: '1px solid var(--nav-border)',
        borderRadius: 999,
        boxShadow: scrolled
          ? '0 2px 20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)'
          : '0 4px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.03)',
        transition: 'background 0.2s ease-out, box-shadow 0.2s ease-out',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        className="nav-logo"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <img
          src="/archeo-logo.svg"
          alt="Archeo"
          style={{ width: 18, height: 18, display: 'block' }}
        />
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--tx-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-display)',
            whiteSpace: 'nowrap',
          }}
        >
          archeo
          <span style={{ color: 'var(--amber)' }}>.dev</span>
        </span>
      </a>

      {/* Center links */}
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            style={{
              padding: '8px 16px',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--tx-tertiary)',
              textDecoration: 'none',
              borderRadius: 999,
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-sans)',
              transition: 'color 0.15s ease-out, background 0.15s ease-out, box-shadow 0.15s ease-out',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--tx-primary)'
              e.currentTarget.style.background = 'var(--ui-06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--tx-tertiary)'
              e.currentTarget.style.background = 'transparent'
            }}
            onFocus={e => {
              e.currentTarget.style.color = 'var(--tx-primary)'
              e.currentTarget.style.background = 'var(--ui-06)'
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)'
            }}
            onBlur={e => {
              e.currentTarget.style.color = 'var(--tx-tertiary)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={GUMROAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: 36,
          height: 36,
          padding: '0 16px',
          background: 'var(--amber)',
          color: '#000',
          fontSize: 12,
          fontWeight: 600,
          borderRadius: 999,
          border: 'none',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          fontFamily: 'var(--font-sans)',
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.opacity = '0.88'
          e.currentTarget.style.transform = 'scale(0.97)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.transform = 'scale(1)'
        }}
        onFocus={e => {
          e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)'
        }}
        onBlur={e => {
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        Get it — from $9
      </a>
    </nav>
  )
}
