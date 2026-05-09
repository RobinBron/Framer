'use client'

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-bg)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr repeat(3, 1fr)',
          gap: 48,
          marginBottom: 64,
        }}>
          <div>
            <p style={{
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>
              Framer
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-subtle)',
              lineHeight: 1.65,
              maxWidth: 240,
            }}>
              The modern tool for teams who care about craft.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-subtle)',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-subtle)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Framer. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            Built with Claude Code
          </p>
        </div>
      </div>
    </footer>
  )
}
