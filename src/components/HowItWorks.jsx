const steps = [
  {
    num: '1',
    title: 'Install',
    desc: 'Download and unzip. Open chrome://extensions, enable Developer Mode, click Load unpacked, select the folder. Takes 30 seconds — no account, no sign-in.',
  },
  {
    num: '2',
    title: 'Scan (optional)',
    desc: 'Preview what will be captured — all assets on the page. See images, fonts, scripts, and lazy-loaded content before downloading.',
  },
  {
    num: '3',
    title: 'Archive',
    desc: 'Click to download. Archeo fetches HTML, CSS, fonts, images, video, audio, and scripts. All links rewritten for offline use.',
  },
  {
    num: '4',
    title: 'Open anytime',
    desc: 'Your archive is saved locally. Open index.html (ZIP), the HTML file, or MHTML in your browser. No internet needed.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 24px' }}>

        {/* Steps as timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            left: 19,
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(to bottom, var(--amber-a30), var(--glass-border))',
          }} />

          {steps.map((step, index) => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                gap: 20,
                marginBottom: index < steps.length - 1 ? 32 : 0,
                position: 'relative',
              }}
            >
              {/* Step number circle */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--amber)',
                border: '4px solid var(--bg-base)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 16,
                color: '#000',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}>
                {step.num}
              </div>

              {/* Step content */}
              <div style={{ flex: 1, paddingTop: 4 }}>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'var(--tx-primary)',
                  marginBottom: 8,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-display)',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  color: 'var(--tx-tertiary)',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
