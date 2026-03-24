// Pixel-accurate recreation of the Archeo.dev Chrome extension popup
// Matches /Users/drewskii/Desktop/archeo/popup.html + popup.css exactly

export default function ExtensionMockup() {
  return (
    <div
      style={{
        width: 380,
        background: 'rgba(9,9,9,0.75)',
        backdropFilter: 'blur(16px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
        borderRadius: 10,
        border: '1px solid var(--glass-border)',
        boxShadow:
          '0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--tx-secondary)',
        letterSpacing: '-0.01em',
        userSelect: 'none',
      }}
    >
      {/* ── Header ─────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 52,
          padding: '0 16px',
          background: 'rgba(5,5,5,0.7)',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/archeo-logo.svg"
            alt="Archeo"
            style={{ width: 24, height: 24, display: 'block' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--tx-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            archeo
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--amber)',
              letterSpacing: '-0.01em',
            }}
          >
            .dev
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 34,
              height: 34,
              background: 'transparent',
              border: '1px solid transparent',
              borderRadius: 4,
              color: 'var(--tx-tertiary)',
            }}
          >
            <i className="hn hn-clock" style={{ fontSize: 16 }} />
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 34,
              height: 34,
              background: 'transparent',
              border: '1px solid transparent',
              borderRadius: 4,
              color: 'var(--tx-tertiary)',
            }}
          >
            <i className="hn hn-cog" style={{ fontSize: 16 }} />
          </div>
        </div>
      </div>

      {/* ── Context Strip ──────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 16px',
          background: 'rgba(12,12,12,0.6)',
          borderBottom: '1px solid var(--glass-border)',
          minHeight: 56,
        }}
      >
        {/* Globe favicon fallback */}
        <div
          style={{
            position: 'relative',
            width: 20,
            height: 20,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--tx-dim)',
          }}
        >
          <i className="hn hn-globe" style={{ fontSize: 15 }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--tx-primary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Google Fonts
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--tx-tertiary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: 2,
            }}
          >
            fonts.google.com
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 3,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              padding: '2px 6px',
              border: '1px solid var(--green-a22, rgba(34,197,94,0.22))',
              borderRadius: 4,
              color: 'var(--green, #22c55e)',
              background: 'var(--green-a08, rgba(34,197,94,0.08))',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            https
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              padding: '2px 6px',
              border: '1px solid var(--glass-border)',
              borderRadius: 4,
              color: 'var(--tx-tertiary)',
              background: 'var(--glass-bg)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            34{' '}
            <span style={{ opacity: 0.55 }}>assets</span>
          </span>
        </div>
      </div>

      {/* ── Main Panel ────────────────────────── */}
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column' }}>
        {/* Section Label: Output Format */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--tx-muted)',
            paddingBottom: 6,
            borderBottom: '1px solid var(--glass-border)',
            marginBottom: 10,
          }}
        >
          Output Format
        </div>

        {/* Format pills */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {[
            { icon: 'hn-download-alt', label: 'ZIP Archive', active: true },
            { icon: 'hn-code', label: 'Single HTML', active: false },
            { icon: 'hn-file-import', label: 'MHTML', active: false },
          ].map(({ icon, label, active }) => (
            <div
              key={label}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                padding: '10px 6px',
                background: active ? 'var(--amber-a12)' : 'var(--glass-bg)',
                border: `1px solid ${active ? 'var(--amber-a30)' : 'var(--glass-border)'}`,
                borderRadius: 6,
                color: active ? 'var(--amber-soft, oklch(79% 0.164 30.1))' : 'var(--tx-muted)',
                fontSize: 12,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                boxShadow: active ? '0 0 0 1px var(--amber-a12)' : 'none',
              }}
            >
              <i className={`hn ${icon}`} style={{ fontSize: 15 }} />
              {label}
            </div>
          ))}
        </div>

        {/* Section Label: Assets */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--tx-muted)',
            paddingBottom: 6,
            borderBottom: '1px solid var(--glass-border)',
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          Assets
        </div>

        {/* Asset toggle pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            marginBottom: 6,
          }}
        >
          {[
            { label: 'CSS', checked: true },
            { label: 'JS', checked: true },
            { label: 'Images', checked: true },
            { label: 'Fonts', checked: true },
            { label: 'Video/Audio', checked: false },
            { label: 'Docs', checked: false },
          ].map(({ label, checked }) => (
            <div
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 10px',
                background: checked ? 'var(--amber-a12)' : 'var(--glass-bg)',
                border: `1px solid ${checked ? 'var(--amber-a30)' : 'var(--glass-border)'}`,
                borderRadius: 4,
                color: checked
                  ? 'var(--amber-soft, oklch(79% 0.164 30.1))'
                  : 'var(--tx-muted)',
                fontSize: 12,
                fontWeight: 500,
                boxShadow: checked ? '0 0 0 1px var(--amber-a12)' : 'none',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Advanced Options toggle */}
        <div style={{ padding: '8px 0 4px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: 'var(--tx-muted)',
            }}
          >
            <i
              className="hn hn-arrow-right"
              style={{ fontSize: 12, color: 'var(--tx-dim)' }}
            />
            Advanced Options
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            margin: '12px 0 0',
            border: '1px solid var(--glass-border)',
            borderRadius: 6,
            background: 'rgba(12,12,12,0.5)',
            overflow: 'hidden',
          }}
        >
          {[
            { icon: 'hn-paragraph', val: '12', label: 'css' },
            { icon: 'hn-code', val: '8', label: 'js' },
            { icon: 'hn-image', val: '47', label: 'img' },
            { icon: 'hn-text', val: '3', label: 'fonts' },
          ].map(({ icon, val, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flex: 1,
                padding: '10px 4px',
                borderRight: '1px solid var(--glass-border)',
              }}
            >
              <i
                className={`hn ${icon}`}
                style={{ fontSize: 14, color: 'var(--tx-dim)', lineHeight: 1 }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--tx-primary)',
                  lineHeight: 1,
                }}
              >
                {val}
              </span>
              <small
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--tx-tertiary)',
                }}
              >
                {label}
              </small>
            </div>
          ))}
          <div
            style={{
              width: 1,
              background: 'var(--glass-border)',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              flex: 1,
              padding: '10px 4px',
            }}
          >
            <i
              className="hn hn-box-usd"
              style={{ fontSize: 14, color: 'var(--tx-dim)', lineHeight: 1 }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--amber)',
                lineHeight: 1,
              }}
            >
              ~4.2 MB
            </span>
            <small
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--tx-tertiary)',
              }}
            >
              est.
            </small>
          </div>
        </div>

        {/* ── Action Buttons ─────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginTop: 32,
          }}
        >
          {/* Primary CTA */}
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              height: 48,
              background: 'var(--amber)',
              border: '1px solid var(--amber)',
              borderRadius: 6,
              color: '#000',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'default',
              letterSpacing: '-0.01em',
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)',
            }}
          >
            <i className="hn hn-download" style={{ fontSize: 17 }} />
            Download Archive
          </button>

          {/* Design system export */}
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              height: 48,
              padding: '0 16px',
              background: 'var(--bg-elevated, #171717)',
              border: '1px solid var(--amber)',
              borderRadius: 6,
              color: 'var(--amber)',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'default',
              letterSpacing: '-0.01em',
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)',
            }}
          >
            <i className="hn hn-code-block" style={{ fontSize: 17 }} />
            Extract Design System
          </button>
        </div>
      </div>
    </div>
  )
}
