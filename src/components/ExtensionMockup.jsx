// Pixel-accurate extension popup mockup

function ToggleItem({ label, checked }) {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          border: checked ? 'none' : '1px solid var(--ui-08)',
          background: checked ? 'var(--amber)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span style={{ fontSize: 11, color: checked ? 'var(--tx-primary)' : 'var(--tx-muted)', letterSpacing: '-0.01em', fontFamily: 'var(--font-sans)' }}>{label}</span>
    </div>
  )
}

export default function ExtensionMockup() {
  return (
    <div
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--glass-border)',
        borderRadius: 10,
        boxShadow: '0 4px 32px rgba(0,0,0,0.6), 0 0 0 1px var(--amber-a07)',
        width: 320,
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          {/* Archivist logo */}
          <img
            src="/archivist-logo.svg"
            alt="Archivist"
            style={{ width: 16, height: 16, display: 'block' }}
          />
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--tx-primary)', letterSpacing: '-0.01em', fontFamily: 'var(--font-display)' }}>
            archivist<span style={{ color: 'var(--amber)' }}>.dev</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Clock icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="var(--tx-muted)" strokeWidth="1.1" />
            <path d="M7 4.5V7l1.5 1.5" stroke="var(--tx-muted)" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          {/* Gear icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2" stroke="var(--tx-muted)" strokeWidth="1.1" />
            <path d="M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.1 3.1l.7.7M10.2 10.2l.7.7M3.1 10.9l.7-.7M10.2 3.8l.7-.7" stroke="var(--tx-muted)" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Context strip */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        {/* Globe */}
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="6.5" cy="6.5" r="5.2" stroke="var(--tx-muted)" strokeWidth="1.1" />
          <ellipse cx="6.5" cy="6.5" rx="2.4" ry="5.2" stroke="var(--tx-muted)" strokeWidth="1.1" />
          <path d="M1.5 6.5h10" stroke="var(--tx-muted)" strokeWidth="1.1" />
        </svg>
        <span style={{ fontSize: 11, color: 'var(--tx-tertiary)', flex: 1, letterSpacing: '-0.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          example.com/article
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
          <span style={{
            fontSize: 10,
            color: '#4ade80',
            background: 'rgba(74,222,128,0.08)',
            padding: '2px 6px',
            borderRadius: 3,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}>https</span>
          <span style={{
            fontSize: 10,
            color: 'var(--amber)',
            background: 'var(--amber-a08)',
            padding: '2px 6px',
            borderRadius: 3,
            fontWeight: 500,
            letterSpacing: '-0.01em',
          }}>34 assets</span>
        </div>
      </div>

      {/* Format row */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          padding: '10px 14px',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        {[
          { label: 'ZIP Archive', active: true },
          { label: 'Single HTML', active: false },
          { label: 'MHTML', active: false },
        ].map(({ label, active }) => (
          <div
            key={label}
            style={{
              fontSize: 11,
              fontWeight: active ? 600 : 400,
              color: active ? 'var(--amber)' : 'var(--tx-tertiary)',
              background: active ? 'var(--amber-a10)' : 'var(--bg-subtle)',
              border: active ? '1px solid var(--amber-a20)' : '1px solid var(--glass-border)',
              padding: '4px 9px',
              borderRadius: 4,
              cursor: 'default',
              letterSpacing: '-0.01em',
              userSelect: 'none',
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Asset toggles */}
      <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '7px 0' }}>
          <ToggleItem label="CSS" checked={true} />
          <ToggleItem label="JS" checked={true} />
          <ToggleItem label="Images" checked={true} />
          <ToggleItem label="Fonts" checked={true} />
          <ToggleItem label="Video/Audio" checked={false} />
          <ToggleItem label="Docs" checked={false} />
        </div>
      </div>

      {/* Archive button */}
      <div style={{ padding: '10px 14px 0 14px' }}>
        <button
          style={{
            width: '100%',
            height: 36,
            background: 'var(--amber)',
            color: '#000',
            fontSize: 13,
            fontWeight: 600,
            border: 'none',
            borderRadius: 6,
            cursor: 'default',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Archive Page
        </button>
      </div>

      {/* Footer line */}
      <div style={{
        padding: '7px 14px 12px',
        fontSize: 11,
        color: 'var(--tx-muted)',
        letterSpacing: '-0.01em',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
      }}>
        34 files · ~4.2 MB est.
      </div>
    </div>
  )
}
