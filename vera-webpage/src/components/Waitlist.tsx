import { useTranslation } from 'react-i18next'
import { WaitlistForm } from './WaitlistForm'

export function Waitlist() {
  const { t } = useTranslation()

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              {t('waitlist.title')}
            </h2>
            <p className="text-charcoal/70">
              {t('waitlist.subtitle')}
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-charcoal/5">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}
