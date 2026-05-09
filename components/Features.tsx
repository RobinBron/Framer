'use client'
import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Component-first design',
    description: 'Build with reusable components that stay in sync across your entire project. Change once, update everywhere.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ship at the speed of thought',
    description: 'From idea to production in minutes. Our zero-config setup gets you from blank canvas to deployed product instantly.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Built for teams',
    description: 'Real-time collaboration, version history, and granular permissions. Design and engineering working from the same source of truth.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0], delay: i * 0.1 },
  }),
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} style={{
      padding: '96px 24px',
      backgroundColor: 'var(--color-bg-subtle)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--color-accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Features
          </p>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--color-text)',
          }}>
            Everything your team needs
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                padding: 32,
                borderRadius: 12,
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-subtle)',
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
