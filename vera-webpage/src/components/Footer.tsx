import { useTranslation } from 'react-i18next'
import { Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/lib/useReveal'

const INSTAGRAM_URL = 'https://www.instagram.com/verafitness.ai?igsh=MXY1Z2hib3ViazB4NQ=='

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const [wordmarkRef, wordmarkIn] = useReveal<HTMLDivElement>()

  const sections = [
    {
      title: t('footer.columns.product'),
      links: [
        { label: t('footer.links.howItWorks'), href: '#how-it-works' },
        { label: t('footer.links.benefits'), href: '#benefits' },
        { label: t('footer.links.waitlist'), href: '#waitlist' },
      ],
    },
    {
      title: t('footer.columns.company'),
      links: [
        { label: t('footer.links.about'), href: '#' },
        { label: t('footer.links.contact'), href: '#' },
        { label: t('footer.links.press'), href: '#' },
      ],
    },
    {
      title: t('footer.columns.legal'),
      links: [
        { label: t('footer.links.privacy'), href: '#' },
        { label: t('footer.links.terms'), href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative overflow-hidden pt-24 pb-10 px-md md:px-lg">
      <div
        ref={wordmarkRef}
        className={cn('reveal text-center mx-auto select-none', wordmarkIn && 'in')}
        style={{
          fontSize: 'clamp(120px, 22vw, 280px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(28,36,46,0.10)',
          lineHeight: 0.85,
          marginBottom: '60px',
        }}
        aria-hidden
      >
        V
        <span
          style={{
            color: 'var(--color-accent-strong)',
            WebkitTextStroke: '0',
            fontWeight: 700,
          }}
        >
          Ē
        </span>
        RA
      </div>

      <div
        className="max-w-[1200px] mx-auto grid gap-10 pb-8 border-b border-border-subtle"
        style={{ gridTemplateColumns: 'minmax(0, 2fr) repeat(3, minmax(0, 1fr))' }}
      >
        <div className="max-w-[320px] footer-brand-col">
          <div className="flex items-center gap-2.5 mb-3.5">
            <img
              src="/logo.vera.jpeg"
              alt="Vēra"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                objectFit: 'cover',
                display: 'block',
                boxShadow: 'var(--shadow-soft)',
              }}
            />
            <span style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
              Vēra
            </span>
          </div>
          <p className="text-callout text-text-secondary m-0 mb-4 leading-relaxed">
            {t('footer.tagline')}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-caption text-text-secondary">
              <span aria-hidden>🇻🇪</span>
              {t('footer.flag')}
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-text-secondary hover:text-accent-strong transition-colors duration-fast"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '9px',
                background: 'rgba(56,140,135,0.10)',
              }}
              aria-label="Vēra en Instagram"
            >
              <Instagram className="h-[16px] w-[16px]" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-[12px] font-bold tracking-[0.12em] uppercase text-text-primary m-0 mb-3.5">
              {section.title}
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-callout text-text-secondary hover:text-accent-strong transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-caption text-text-secondary">
        <span>
          © {currentYear} Vēra. {t('footer.rights')}
        </span>
        <span>
          <span className="italic text-text-primary">vēra</span> · {t('footer.latin')}
        </span>
      </div>
    </footer>
  )
}
