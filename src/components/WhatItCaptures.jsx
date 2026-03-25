// Icon components for each capture feature (larger for bento grid)
const icons = {
  dom: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M5 5h6M5 8h4M5 11h5" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  lazy: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2.5" stroke="var(--amber)" strokeWidth="1.2" />
    </svg>
  ),
  css: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <path d="M3 2l1 10 4 2 4-2 1-10H3z" stroke="var(--amber)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5.5 6h5l-.5 4-2 .5-2-.5-.2-2" stroke="var(--amber)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  format: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="7" height="9" rx="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M7 2h3l2 2v9a1 1 0 01-1 1H7" stroke="var(--amber)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4.5 6h2M4.5 8h4M4.5 10h3" stroke="var(--amber)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  tracker: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  link: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <path d="M6.5 9.5a3 3 0 004.24 0l1.76-1.77a3 3 0 000-4.24 3 3 0 00-4.24 0L7 4.76" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.5 6.5a3 3 0 00-4.24 0L3.5 8.27a3 3 0 000 4.24 3 3 0 004.24 0L9 11.24" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  design: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="4" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="12" cy="4" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="4" cy="12" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <rect x="6.5" y="6.5" width="3" height="3" rx="0.75" stroke="var(--amber)" strokeWidth="1.2" />
    </svg>
  ),
  local: (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="10" width="12" height="4" rx="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M5 10V7l3-3 3 3v3" stroke="var(--amber)" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="11.5" cy="12" r="0.75" fill="var(--amber)" />
    </svg>
  ),
}

const features = [
  {
    icon: 'dom',
    title: 'Deep asset extraction',
    desc: 'HTML, CSS, JS, fonts, images, video, audio, documents. Scans shadow DOM, srcset, and ResourceTiming API.',
    span: false,
  },
  {
    icon: 'lazy',
    title: 'Lazy-load capture',
    desc: 'Scrolls the page automatically before scanning. Deferred images and content load first.',
    span: false,
  },
  {
    icon: 'css',
    title: 'Complete CSS rewriting',
    desc: 'All url() references — fonts, backgrounds, @imports — rewritten to local files. Works offline.',
    span: false,
  },
  {
    icon: 'format',
    title: 'Three output formats',
    desc: 'ZIP with folder structure, single HTML with everything inlined, or MHTML browser snapshot.',
    span: true,
  },
  {
    icon: 'tracker',
    title: 'Tracker blocking',
    desc: 'Google Analytics, Meta Pixel, Hotjar, Segment, and more. Stripped out during capture.',
    span: false,
  },
  {
    icon: 'link',
    title: 'Link rewriting',
    desc: 'Absolute URLs become relative paths. Internal links work offline. External links preserved.',
    span: false,
  },
  {
    icon: 'design',
    title: 'Design System export',
    desc: 'Extract colors, typography, and spacing as JSON, Markdown, or Tailwind config.',
    span: false,
  },
  {
    icon: 'local',
    title: '100% local, zero data',
    desc: 'Archives saved to Downloads folder. No account, no cloud, no telemetry. Settings stored in browser.',
    span: false,
  },
]

export default function WhatItCaptures() {
  return (
    <section id="what-it-captures" style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* Bento-style grid with varied spans */}
        <div
          className="feature-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {features.map(({ icon, title, desc, span }) => (
            <div
              key={title}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--glass-border)',
                borderRadius: 12,
                padding: span ? '32px' : '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                transition: 'border-color 0.15s',
                gridColumn: span ? 'span 2' : 'span 1',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              {/* Icon with circular background */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'var(--amber-a08)',
                border: '1px solid var(--amber-a15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                {icons[icon]}
              </div>

              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--tx-primary)', marginBottom: 8, letterSpacing: '-0.01em', fontFamily: 'var(--font-display)' }}>{title}</div>
              <p style={{ fontSize: 13, color: 'var(--tx-tertiary)', lineHeight: 1.55, fontFamily: 'var(--font-sans)' }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
