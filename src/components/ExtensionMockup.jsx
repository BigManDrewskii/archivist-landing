// Pixel-accurate recreation of the Archeo.dev Chrome extension popup
// Matches /Users/drewskii/Desktop/archeo-dev-v1.0/popup.html + popup.css exactly

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
          '0 12px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--tx-secondary)',
        letterSpacing: '-0.01em',
        userSelect: 'none',
        transform: 'perspective(1200px) rotateY(-4deg) scale(1.02)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* ── Header ─────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 52,
          padding: '0 20px',
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
          padding: '12px 20px',
          background: 'rgba(12,12,12,0.6)',
          borderBottom: '1px solid var(--glass-border)',
          minHeight: 52,
        }}
      >
        {/* Globe favicon fallback */}
        <div
          style={{
            position: 'relative',
            width: 16,
            height: 16,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--tx-dim)',
          }}
        >
          <i className="hn hn-globe" style={{ fontSize: 12 }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 12,
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
              fontSize: 10,
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
              fontSize: 9,
              fontWeight: 500,
              padding: '2px 4px',
              border: '1px solid var(--green-a22, rgba(34,197,94,0.22))',
              borderRadius: 4,
              color: 'var(--green, #22c55e)',
              background: 'var(--green-a08, rgba(34,197,94,0.08))',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
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
              fontSize: 9,
              fontWeight: 500,
              padding: '2px 4px',
              border: '1px solid var(--glass-border)',
              borderRadius: 4,
              color: 'var(--tx-tertiary)',
              background: 'var(--glass-bg)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            34<span style={{ opacity: 0.55 }}> assets</span>
          </span>
        </div>
      </div>

      {/* ── Main Panel ────────────────────────── */}
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
        {/* ── Hero Action (NEW - primary action at top) ──── */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              height: 56,
              background: 'var(--amber)',
              border: '1px solid var(--amber)',
              borderRadius: 6,
              color: '#0c0a08',
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              boxShadow:
                '0 2px 8px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <i className="hn hn-download" style={{ fontSize: 18, flexShrink: 0 }} />
            <span>Download Archive</span>
          </div>
          <div
            style={{
              marginTop: 8,
              textAlign: 'center',
              fontSize: 12,
              color: 'var(--tx-muted)',
            }}
          >
            One-click page capture with all assets
          </div>
        </div>

        {/* ── Quick Settings (NEW - collapsed by default) ── */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: 8,
              padding: '12px 16px',
              background: 'rgba(12,12,12,0.6)',
              border: '1px solid var(--glass-border)',
              borderRadius: 6,
            }}
          >
            <i
              className="hn hn-sliders"
              style={{ fontSize: 16, color: 'var(--tx-tertiary)', flexShrink: 0 }}
            />
            <span
              style={{
                flex: 1,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Output: ZIP Archive
            </span>
            <i
              className="hn hn-chevron-down"
              style={{ fontSize: 14, color: 'var(--tx-tertiary)', flexShrink: 0 }}
            />
          </div>

          {/* ── Settings Panel (shown expanded for demo) ───── */}
          <div
            style={{
              marginTop: 12,
            }}
          >
            {/* Output Format */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--tx-muted)',
                  paddingBottom: 8,
                  borderBottom: '1px solid var(--glass-border)',
                  marginBottom: 12,
                }}
              >
                Output Format
              </div>

              <div style={{ display: 'flex', gap: 6 }}>
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
                      color: active ? 'var(--amber-soft, oklch(82% 0.14 35.0))' : 'var(--tx-muted)',
                      fontSize: 12,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      boxShadow: active
                        ? '0 0 0 1px var(--amber-a12), 0 1px 3px rgba(0,0,0,0.15)'
                        : 'none',
                    }}
                  >
                    <i className={`hn ${icon}`} style={{ fontSize: 15 }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Assets */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--tx-muted)',
                  paddingBottom: 8,
                  borderBottom: '1px solid var(--glass-border)',
                  marginBottom: 12,
                }}
              >
                Assets
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: 12,
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
                        ? 'var(--amber-soft, oklch(82% 0.14 35.0))'
                        : 'var(--tx-muted)',
                      fontSize: 12,
                      fontWeight: 500,
                      boxShadow: checked
                        ? '0 0 0 1px var(--amber-a12), 0 1px 2px rgba(0,0,0,0.12)'
                        : 'none',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Options */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 12,
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
          </div>
        </div>

        {/* ── Stats Bar (simplified) ─────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '16px 0 0',
            padding: '12px 16px',
            border: '1px solid var(--glass-border)',
            borderRadius: 6,
            background: 'rgba(12,12,12,0.6)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 4,
              flex: 1,
            }}
          >
            <i className="hn hn-box-usd" style={{ fontSize: 14, color: 'var(--tx-dim)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--tx-primary)',
              }}
            >
              70
            </span>
            <small
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--tx-tertiary)',
              }}
            >
              assets
            </small>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 4,
              flex: 1,
            }}
          >
            <i className="hn hn-box-usd" style={{ fontSize: 14, color: 'var(--tx-dim)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--amber)',
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

        {/* ── Secondary Action (demoted) ────────────────────── */}
        <div
          style={{
            marginTop: 32,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              height: 40,
              padding: '0 16px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--ui-10)',
              borderRadius: 6,
              color: 'var(--tx-secondary)',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            <i className="hn hn-code-block" style={{ fontSize: 16, flexShrink: 0 }} />
            <span>Extract Design System</span>
          </div>
          <small
            style={{
              display: 'block',
              marginTop: 8,
              fontSize: 11,
              color: 'var(--tx-dim)',
            }}
          >
            For designers & developers
          </small>
        </div>
      </div>
    </div>
  )
}
