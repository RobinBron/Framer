'use client'
import { motion } from 'framer-motion'

const easeOut = [0, 0, 0.2, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut, delay },
})

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '96px 24px 64px',
      textAlign: 'center',
      backgroundColor: 'var(--color-bg)',
    }}>
      <motion.div {...fadeUp(0)} style={{ marginBottom: 16 }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-accent)',
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
          padding: '4px 12px',
          borderRadius: 999,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Now in public beta
        </span>
      </motion.div>

      <motion.h1 {...fadeUp(0.08)} style={{
        fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        color: 'var(--color-text)',
        maxWidth: 800,
        marginBottom: 24,
      }}>
        Build beautiful products{' '}
        <span style={{ color: 'var(--color-accent)' }}>faster</span>
      </motion.h1>

      <motion.p {...fadeUp(0.16)} style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        color: 'var(--color-text-subtle)',
        maxWidth: 560,
        lineHeight: 1.6,
        marginBottom: 40,
      }}>
        The modern tool for teams who care about craft. Ship production-ready interfaces without sacrificing quality or velocity.
      </motion.p>

      <motion.div {...fadeUp(0.24)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="#pricing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            borderRadius: 8,
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-primary-fg)',
            fontWeight: 500,
            fontSize: '0.9375rem',
            textDecoration: 'none',
            transition: 'opacity 150ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Start for free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#features"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            borderRadius: 8,
            border: '1px solid var(--color-border-strong)',
            color: 'var(--color-text)',
            fontWeight: 500,
            fontSize: '0.9375rem',
            textDecoration: 'none',
            transition: 'border-color 150ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-text-subtle)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border-strong)')}
        >
          See how it works
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
        style={{
          marginTop: 64,
          padding: '4px',
          borderRadius: 16,
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-subtle)',
          overflow: 'hidden',
          maxWidth: 960,
          width: '100%',
        }}
      >
        <div style={{
          borderRadius: 12,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1a1a1a 100%)',
          height: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Ground reflection */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(220,38,38,0.08), transparent)',
          }} />
          {/* Spotlight */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          }} />
          <motion.svg
            viewBox="0 0 800 300"
            style={{ width: '90%', maxWidth: 720, position: 'relative', zIndex: 1 }}
            aria-label="Red Ferrari"
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            {/* Animated headlight glow */}
            <motion.ellipse
              cx="122" cy="165" rx="22" ry="8"
              fill="rgba(255,240,180,0.0)"
              animate={{ fill: ['rgba(255,240,180,0.0)', 'rgba(255,240,180,0.4)', 'rgba(255,240,180,0.0)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
            {/* Shadow */}
            <ellipse cx="400" cy="270" rx="280" ry="18" fill="rgba(0,0,0,0.5)" />
            {/* Main body */}
            <path
              d="M120,230 L120,190 Q125,160 160,150 L200,130 Q230,105 280,100 L360,95 Q410,92 450,98 L530,108 Q580,118 620,140 L660,158 Q690,170 700,190 L700,230 Z"
              fill="#DC2626"
            />
            {/* Roof / cabin */}
            <path
              d="M250,130 Q270,85 310,75 L420,72 Q460,72 490,82 Q520,92 540,110 L560,130 Z"
              fill="#B91C1C"
            />
            {/* Windshield */}
            <path
              d="M258,128 Q278,88 315,79 L415,76 Q448,76 472,86 Q498,96 516,114 L534,128 Z"
              fill="rgba(150,200,255,0.18)"
              stroke="rgba(150,200,255,0.25)"
              strokeWidth="1"
            />
            {/* Side window */}
            <path
              d="M268,128 L282,100 Q295,84 318,80 L350,78 L350,128 Z"
              fill="rgba(150,200,255,0.12)"
            />
            {/* Hood scoop / vents */}
            <path d="M440,108 L460,100 L520,105 L510,112 Z" fill="#991B1B" />
            <path d="M455,115 L470,108 L510,112 L500,118 Z" fill="#7F1D1D" />
            {/* Front bumper */}
            <path
              d="M120,190 Q100,200 95,215 L95,235 L130,235 L130,190 Z"
              fill="#B91C1C"
            />
            {/* Air intake front */}
            <path d="M96,208 Q98,200 108,198 L120,198 L120,210 L100,212 Z" fill="#1a1a1a" />
            {/* Rear */}
            <path
              d="M700,190 Q715,198 720,212 L720,232 L695,232 L695,190 Z"
              fill="#B91C1C"
            />
            {/* Rear diffuser */}
            <path d="M700,220 L720,218 L720,232 L700,232 Z" fill="#7F1D1D" />
            {/* Side skirt */}
            <path
              d="M200,225 L600,225 L600,235 Q590,242 570,242 L230,242 Q210,242 200,235 Z"
              fill="#991B1B"
            />
            {/* Front wheel arch */}
            <ellipse cx="230" cy="238" rx="58" ry="18" fill="#111" />
            <ellipse cx="230" cy="238" rx="52" ry="15" fill="#222" />
            <ellipse cx="230" cy="238" rx="38" ry="11" fill="#333" />
            <ellipse cx="230" cy="238" rx="18" ry="6" fill="#555" />
            <line x1="212" y1="232" x2="248" y2="244" stroke="#666" strokeWidth="2"/>
            <line x1="212" y1="244" x2="248" y2="232" stroke="#666" strokeWidth="2"/>
            <line x1="230" y1="227" x2="230" y2="249" stroke="#666" strokeWidth="2"/>
            <line x1="212" y1="238" x2="248" y2="238" stroke="#666" strokeWidth="2"/>
            {/* Rear wheel arch */}
            <ellipse cx="570" cy="238" rx="62" ry="18" fill="#111" />
            <ellipse cx="570" cy="238" rx="54" ry="15" fill="#222" />
            <ellipse cx="570" cy="238" rx="40" ry="11" fill="#333" />
            <ellipse cx="570" cy="238" rx="20" ry="6" fill="#555" />
            <line x1="550" y1="232" x2="590" y2="244" stroke="#666" strokeWidth="2"/>
            <line x1="550" y1="244" x2="590" y2="232" stroke="#666" strokeWidth="2"/>
            <line x1="570" y1="227" x2="570" y2="249" stroke="#666" strokeWidth="2"/>
            <line x1="550" y1="238" x2="590" y2="238" stroke="#666" strokeWidth="2"/>
            {/* Headlights */}
            <path d="M122,168 Q130,158 148,155 L180,155 L175,170 L125,172 Z" fill="rgba(255,240,180,0.9)" />
            <path d="M123,168 Q131,159 148,157 L178,157 L174,168 Z" fill="rgba(255,250,220,0.6)" />
            {/* Taillights */}
            <path d="M698,165 Q706,160 714,162 L718,175 L695,175 Z" fill="rgba(255,50,50,0.9)" />
            {/* Ferrari badge area */}
            <rect x="388" y="96" width="24" height="14" rx="2" fill="#FFD700" opacity="0.9" />
            {/* Door line */}
            <path d="M270,128 Q280,200 275,225" stroke="#991B1B" strokeWidth="1.5" fill="none" />
            <path d="M430,125 Q435,200 432,225" stroke="#991B1B" strokeWidth="1.5" fill="none" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  )
}
