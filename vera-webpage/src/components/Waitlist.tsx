import { useTranslation } from 'react-i18next'
import { WaitlistForm } from './WaitlistForm'

export function Waitlist() {
  const { t } = useTranslation()

  return (
    <section id="waitlist" className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="mx-auto" style={{ maxWidth: '480px', width: '100%' }}>
          <div className="text-center mb-8">
            <h2 className="text-title sm:!text-[34px] sm:!leading-[1.12] mb-3">
              {t('waitlist.title')}
            </h2>
            <p className="text-body text-text-secondary">
              {t('waitlist.subtitle')}
            </p>
          </div>

          <div
            className="backdrop-blur-md rounded-xl shadow-soft"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.55)',
              outline: '1px solid rgba(0,0,0,0.08)',
              outlineOffset: '-1px',
              padding: '28px',
            }}
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}
