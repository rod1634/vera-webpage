import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6 text-charcoal" />
            <span className="font-serif text-lg">Vēra</span>
            <span className="text-charcoal/50 text-sm">
              — {t('footer.tagline')}
            </span>
          </div>

          <p className="text-sm text-charcoal/50">
            © {currentYear} Vēra. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
