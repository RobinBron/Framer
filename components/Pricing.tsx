'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    name: 'Hobby',
    price: '$0',
    period: 'forever',
    description: 'For individuals and side projects.',
    features: ['3 projects', 'Community support', 'Basic analytics', '1 GB storage'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For professionals who need more.',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', '50 GB storage', 'Custom domains', 'Team members (up to 5)'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$49',
    period: 'per month',
    description: 'For teams shipping together.',
    features: ['Everything in Pro', 'Unlimited team members', 'SSO / SAML', 'Audit logs', 'SLA guarantee', 'Dedicated support'],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} style={{ padding: '96px 24px', backgroundColor: 'var(--color-bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            Pricing
          </p>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: 12,
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: 'var(--color-text-subtle)', fontSize: '1rem' }}>
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: i * 0.1 }}
              style={{
                padding: 32,
                borderRadius: 12,
                border: plan.highlighted ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                backgroundColor: plan.highlighted ? 'var(--color-bg)' : 'var(--color-bg)',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-accent-fg)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: 999,
                }}>
                  Most popular
                </div>
              )}

              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-subtle)', marginBottom: 8 }}>{plan.name}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--color-text)' }}>{plan.price}</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>/ {plan.period}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-subtle)', marginBottom: 24 }}>{plan.description}</p>

              <a
                href="#"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '10px 20px',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  marginBottom: 28,
                  transition: 'opacity 150ms ease',
                  ...(plan.highlighted
                    ? { backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-fg)' }
                    : { border: '1px solid var(--color-border-strong)', color: 'var(--color-text)' }
                  ),
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {plan.cta}
              </a>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.features.map(feature => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" stroke="var(--color-success)" strokeWidth="1.5"/>
                      <path d="M5 8l2 2 4-4" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
