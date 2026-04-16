import { useRef, useState, useEffect } from 'react'

export default function VideoBanner() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isPlaying) {
            videoRef.current?.play().then(() => {
              setIsPlaying(true)
            }).catch(() => {
              // Auto-play was prevented, user needs to interact
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isPlaying])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        paddingTop: 96,
        paddingBottom: 96,
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Video frame */}
        <div
          className="video-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 900,
            margin: '0 auto',
            borderRadius: 12,
            overflow: 'hidden',
            background: '#000',
            boxShadow: '0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          <video
            ref={videoRef}
            src="/archeo-banner-video.webm"
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              cursor: 'pointer',
            }}
            onClick={togglePlay}
            aria-label="Demo video showing Archeo page capture in action"
          />

          {/* Play/pause overlay */}
          <div
            onClick={togglePlay}
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                togglePlay()
              }
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: isPlaying ? 0 : 1,
              transition: 'opacity 0.2s',
              background: isPlaying ? 'transparent' : 'rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              if (!isPlaying) {
                e.currentTarget.style.background = 'rgba(0,0,0,0.2)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isPlaying) {
                e.currentTarget.style.background = 'rgba(0,0,0,0.3)'
              }
            }}
            onFocus={(e) => {
              if (!isPlaying) {
                e.currentTarget.style.outline = 'none'
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--amber-a25)'
              }
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {!isPlaying && (
              <div style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="#000" />
                </svg>
              </div>
            )}
          </div>

          {/* Click to play hint */}
          {!isPlaying && (
            <div style={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 11,
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.02em',
              pointerEvents: 'none',
            }}>
              Click to play
            </div>
          )}
        </div>

        {/* Caption */}
        <p style={{
          fontSize: 13,
          color: 'var(--tx-tertiary)',
          textAlign: 'center',
          marginTop: 24,
          maxWidth: 540,
          margin: '24px auto 0',
          lineHeight: 1.6,
          fontFamily: 'var(--font-sans)',
        }}>
          Archive any page in seconds. Click the extension icon, choose your format, and download a complete offline copy — all assets included.
        </p>

      </div>
    </section>
  )
}
