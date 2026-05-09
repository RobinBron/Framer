'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Is there a free plan?', a: 'Yes — the Hobby plan is free forever. No credit card required. You get 3 projects, community support, and basic analytics to get started.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. There are no long-term contracts. Cancel your subscription at any time and you\'ll retain access until the end of your billing period.' },
  { q: 'How does the free trial work?', a: 'Start a 14-day free trial of the Pro plan with no credit card required. If you decide to continue, you\'ll be billed at the end of the trial. Cancel anytime before and you won\'t be charged.' },
  { q: 'Do you support team collaboration?', a: 'Yes. Pro supports up to 5 team members with real-time collaboration. The Team plan removes the seat limit and adds SSO, audit logs, and dedicated support.' },
  { q: 'What happens to my projects if I downgrade?', a: 'Your projects are never deleted. If you exceed the limits of your new plan, projects will become read-only until you either upgrade or reduce usage below the limit.' },
]

function FAQItem({ q, a, i, inView }: { q: string; a: string; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] as const, delay: i * 0.07 }}
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text)' }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, color: 'var(--color-text-muted)' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--color-text-subtle)',
              lineHeight: 1.7,
              paddingBottom: 20,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} style={{ padding: '96px 24px', backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--color-accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            FAQ
          </p>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
          }}>
            Common questions
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
