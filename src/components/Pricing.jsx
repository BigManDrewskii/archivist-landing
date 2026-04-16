const URL_FREE = 'https://nasus1.gumroad.com/l/archeo'
const URL_PRO  = 'https://nasus1.gumroad.com/l/archeo-pro'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l3 3 7-7" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: 'var(--amber-a10)',
          border: '1px solid var(--amber-a20)',
          borderRadius: 99,
          marginBottom: 24,
        }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--amber)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
          }}>
            PRICING
          </span>
        </div>

        {/* Section heading */}
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: 'var(--tx-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 48,
          fontFamily: 'var(--font-display)',
        }}>
          Start free. Go unlimited when you're ready.
        </h2>

        {/* Two-column pricing cards */}
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
        }}>

          {/* Free card */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--glass-border)',
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'var(--ui-06)',
              border: '1px solid var(--ui-10)',
              borderRadius: 6,
              marginBottom: 20,
              alignSelf: 'flex-start',
            }}>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--tx-tertiary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
              }}>
                FREE
              </span>
            </div>

            {/* Heading */}
            <h3 style={{
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--tx-primary)',
              marginBottom: 8,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-display)',
            }}>
              Try Archeo
            </h3>

            {/* Price */}
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: 'var(--tx-primary)',
              marginBottom: 8,
              fontFamily: 'var(--font-display)',
            }}>
              $0
            </div>

            {/* Subtext */}
            <p style={{
              fontSize: 14,
              color: 'var(--tx-tertiary)',
              marginBottom: 24,
              fontFamily: 'var(--font-sans)',
            }}>
              5 archive credits included
            </p>

            {/* Features */}
            <div style={{ marginBottom: 32, flex: 1 }}>
              {[
                '5 full-quality archives',
                'All 3 output formats (ZIP, HTML, MHTML)',
                'Design system export',
                'Manual install via Developer Mode',
                'All settings and options',
              ].map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <CheckIcon />
                  <span style={{
                    fontSize: 12,
                    color: 'var(--tx-tertiary)',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={URL_FREE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
                padding: '0 24px',
                background: 'transparent',
                color: 'var(--tx-secondary)',
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                border: '1px solid var(--glass-border)',
                transition: 'color 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.15s ease-out',
                fontFamily: 'var(--font-sans)',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--tx-primary)'
                e.currentTarget.style.borderColor = 'var(--amber-a25)'
                e.currentTarget.style.boxShadow = '0 0 0 1px var(--amber-a10)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--tx-secondary)'
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              Download free
            </a>
          </div>

          {/* Pro card */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--amber-a25)',
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 0 0 1px var(--amber-a10), 0 4px 24px rgba(0,0,0,0.5)',
            position: 'relative',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'var(--amber)',
              border: '1px solid var(--amber)',
              borderRadius: 6,
              marginBottom: 20,
              alignSelf: 'flex-start',
            }}>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#000',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
              }}>
                PRO
              </span>
            </div>

            {/* Heading */}
            <h3 style={{
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--tx-primary)',
              marginBottom: 8,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-display)',
            }}>
              Archeo Pro
            </h3>

            {/* Price */}
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: 'var(--tx-primary)',
              marginBottom: 8,
              fontFamily: 'var(--font-display)',
            }}>
              From $9
            </div>

            {/* Subtext */}
            <p style={{
              fontSize: 14,
              color: 'var(--tx-tertiary)',
              marginBottom: 24,
              fontFamily: 'var(--font-sans)',
            }}>
              One license, one person, forever
            </p>

            {/* Features */}
            <div style={{ marginBottom: 32, flex: 1 }}>
              {[
                'Unlimited archives',
                'Priority support',
                'All future updates included',
                'Single-user lifetime license',
              ].map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <CheckIcon />
                  <span style={{
                    fontSize: 12,
                    color: 'var(--tx-tertiary)',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={URL_PRO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
                padding: '0 24px',
                background: 'var(--amber)',
                color: '#000',
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                border: 'none',
                transition: 'opacity 0.15s ease-out, box-shadow 0.15s ease-out',
                fontFamily: 'var(--font-sans)',
                width: '100%',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25), 0 4px 16px rgba(0,0,0,0.3)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2)')}
            >
              Get Pro → from $9
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
