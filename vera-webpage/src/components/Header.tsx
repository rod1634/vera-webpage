import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function Header() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-elevated backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-md md:px-lg">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/logo.vera.jpeg"
              alt="Vēra logo"
              style={{ height: '32px', width: '32px', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
            />
            <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>Vēra</span>
          </div>

          <nav className="hidden md:flex items-center gap-lg">
            <a href="#how-it-works" className="text-callout text-text-secondary hover:text-text-primary transition-colors duration-fast">
              {t('nav.howItWorks')}
            </a>
            <a href="#benefits" className="text-callout text-text-secondary hover:text-text-primary transition-colors duration-fast">
              {t('nav.benefits')}
            </a>
            <a href="#faq" className="text-callout text-text-secondary hover:text-text-primary transition-colors duration-fast">
              {t('nav.faq')}
            </a>
          </nav>

          <div className="flex items-center gap-sm">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-callout text-text-secondary hover:text-text-primary transition-colors duration-fast"
              aria-label="Toggle language"
            >
              <Globe className="h-[18px] w-[18px]" strokeWidth={1.75} />
              <span className="uppercase">{i18n.language}</span>
            </button>
            <Button onClick={scrollToWaitlist} size="sm" variant="primary">
              {t('nav.joinWaitlist')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
