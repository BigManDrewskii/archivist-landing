// Icon components for each capture feature
const icons = {
  dom: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M5 5h6M5 8h4M5 11h5" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  lazy: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2.5" stroke="var(--amber)" strokeWidth="1.2" />
    </svg>
  ),
  css: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2l1 10 4 2 4-2 1-10H3z" stroke="var(--amber)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5.5 6h5l-.5 4-2 .5-2-.5-.2-2" stroke="var(--amber)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  format: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="7" height="9" rx="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M7 2h3l2 2v9a1 1 0 01-1 1H7" stroke="var(--amber)" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4.5 6h2M4.5 8h4M4.5 10h3" stroke="var(--amber)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  tracker: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="var(--amber)" strokeWidth="1.2" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  link: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6.5 9.5a3 3 0 004.24 0l1.76-1.77a3 3 0 000-4.24 3 3 0 00-4.24 0L7 4.76" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.5 6.5a3 3 0 00-4.24 0L3.5 8.27a3 3 0 000 4.24 3 3 0 004.24 0L9 11.24" stroke="var(--amber)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  design: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="4" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="12" cy="4" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="4" cy="12" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" stroke="var(--amber)" strokeWidth="1.2" />
      <rect x="6.5" y="6.5" width="3" height="3" rx="0.75" stroke="var(--amber)" strokeWidth="1.2" />
    </svg>
  ),
  local: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
  },
  {
    icon: 'lazy',
    title: 'Lazy-load capture',
    desc: 'Scrolls the page automatically before scanning. Deferred images and content load first.',
  },
  {
    icon: 'css',
    title: 'Complete CSS rewriting',
    desc: 'All url() references — fonts, backgrounds, @imports — rewritten to local files. Works offline.',
  },
  {
    icon: 'format',
    title: 'Three output formats',
    desc: 'ZIP with folder structure, single HTML with everything inlined, or MHTML browser snapshot.',
  },
  {
    icon: 'tracker',
    title: 'Tracker blocking',
    desc: 'Google Analytics, Meta Pixel, Hotjar, Segment, and more. Stripped out during capture.',
  },
  {
    icon: 'link',
    title: 'Link rewriting',
    desc: 'Absolute URLs become relative paths. Internal links work offline. External links preserved.',
  },
  {
    icon: 'design',
    title: 'Design System export',
    desc: 'Extract colors, typography, and spacing as JSON, Markdown, or Tailwind config.',
  },
  {
    icon: 'local',
    title: '100% local, zero data',
    desc: 'Archives saved to Downloads folder. No account, no cloud, no telemetry. Settings stored in browser.',
  },
]

export default function WhatItCaptures() {
  return (
    <section id="what-it-captures" style={{ paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontSize: 11, color: 'var(--tx-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-display)' }}>
            What it captures
          </p>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--tx-primary)', letterSpacing: '-0.02em', marginBottom: 6, fontFamily: 'var(--font-display)' }}>
            More than Save Page As
          </h2>
          <p style={{ fontSize: 14, color: 'var(--tx-tertiary)', fontFamily: 'var(--font-sans)' }}>The stuff the browser misses. All of it.</p>
        </div>

        {/* Grid */}
        <div
          className="feature-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 10,
          }}
        >
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--glass-border)',
                borderRadius: 8,
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--amber-a15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              <div style={{ marginBottom: 10 }}>{icons[icon]}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--tx-primary)', marginBottom: 5, letterSpacing: '-0.01em', fontFamily: 'var(--font-display)' }}>{title}</div>
              <p style={{ fontSize: 12, color: 'var(--tx-tertiary)', lineHeight: 1.55, fontFamily: 'var(--font-sans)' }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
