import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-charcoal" />
            <span className="font-serif text-xl font-semibold">Vēra</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#benefits" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
              {t('nav.benefits')}
            </a>
            <a href="#faq" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">
              {t('nav.faq')}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm text-charcoal/70 hover:text-charcoal transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{i18n.language}</span>
            </button>
            <Button onClick={scrollToWaitlist} size="sm">
              {t('nav.joinWaitlist')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
