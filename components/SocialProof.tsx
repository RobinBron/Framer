'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "We cut our design-to-dev handoff time by 60%. The team finally speaks the same language.",
    author: "Sarah Chen",
    role: "Head of Design, Linear",
    avatar: "SC",
  },
  {
    quote: "The component system is unlike anything I've used. Consistency that actually scales.",
    author: "Marcus Reid",
    role: "Engineering Lead, Vercel",
    avatar: "MR",
  },
  {
    quote: "Went from mockup to shipped in a single afternoon. This is what modern tooling should feel like.",
    author: "Priya Nair",
    role: "Founder, Craft Studio",
    avatar: "PN",
  },
]

const logos = ['Vercel', 'Linear', 'Figma', 'Stripe', 'Notion', 'Loom']

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '96px 24px', backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Trusted by teams at
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 40,
            marginBottom: 80,
          }}
        >
          {logos.map(logo => (
            <span key={logo} style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              letterSpacing: '-0.01em',
            }}>
              {logo}
            </span>
          ))}
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: 0.15 + i * 0.1 }}
              style={{
                padding: 32,
                borderRadius: 12,
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--color-accent)">
                    <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"/>
                  </svg>
                ))}
              </div>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text)',
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{t.author}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
