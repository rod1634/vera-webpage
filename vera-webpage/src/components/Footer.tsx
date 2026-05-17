import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-lg border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-md md:px-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-sm">
          <div className="flex items-center gap-sm">
            <span className="text-headline font-semibold tracking-tight text-text-primary">Vēra</span>
            <span className="text-caption text-text-secondary">
              — {t('footer.tagline')}
            </span>
          </div>

          <p className="text-caption text-text-secondary">
            © {currentYear} Vēra. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
