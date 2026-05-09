'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] as const }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="/" style={{
          fontWeight: 700,
          fontSize: '1.125rem',
          color: 'var(--color-text)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}>
          Framer
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-subtle)',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-subtle)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#pricing"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-subtle)',
              textDecoration: 'none',
              padding: '8px 16px',
            }}
          >
            Log in
          </a>
          <a
            href="#pricing"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-primary-fg)',
              backgroundColor: 'var(--color-primary)',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: 8,
              transition: 'opacity 150ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Get started
          </a>
        </div>
      </div>
    </motion.header>
  )
}
