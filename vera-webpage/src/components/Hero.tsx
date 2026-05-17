import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="w-full max-w-6xl mx-auto px-md md:px-lg py-xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-xs bg-surface-subtle backdrop-blur-md border border-stroke-inner rounded-full px-md py-1.5 mb-lg">
            <Sparkles className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} />
            <span className="text-callout font-medium text-text-secondary">
              {t('hero.tagline')}
            </span>
          </div>

          <h1 className="text-display sm:!text-[44px] lg:!text-[56px] sm:!leading-[1.08] lg:!leading-[1.05] mb-md">
            {t('hero.title')}
            <br />
            <span className="text-accent-strong">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="text-body sm:text-headline text-text-secondary mb-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-sm">
            <Button onClick={scrollToWaitlist} size="lg" variant="primaryGradient" className="group">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-[18px] w-[18px] group-hover:translate-x-1 transition-transform duration-fast" strokeWidth={1.75} />
            </Button>
          </div>

          <p className="mt-sm text-caption text-text-secondary">
            {t('hero.ctaSubtext')}
          </p>
        </div>

        {/* iOS-style chat preview — guide §9 */}
        <div
          className="mt-xl mx-auto"
          style={{ width: '100%', maxWidth: '380px' }}
        >
          {/* User bubble */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <div
              style={{
                background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-accent-strong))',
                color: 'var(--color-text-on-accent)',
                borderRadius: '20px 20px 8px 20px',
                padding: '10px 16px',
                maxWidth: '260px',
                fontSize: '15px',
                lineHeight: '1.5',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              ¿Cómo voy hoy con mis macros?
            </div>
          </div>

          {/* Assistant bubble */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(to bottom right, var(--color-accent), var(--color-accent-strong))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <Sparkles style={{ width: '14px', height: '14px', color: 'var(--color-text-on-accent)' }} strokeWidth={2} />
            </div>
            <div
              style={{
                flex: '1 1 0%',
                minWidth: 0,
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.55)',
                outline: '1px solid rgba(0,0,0,0.06)',
                outlineOffset: '-1px',
                borderRadius: '20px 20px 20px 8px',
                padding: '12px 16px',
                fontSize: '15px',
                lineHeight: '1.5',
                color: 'var(--color-text-primary)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                Vēra
              </p>
              <p style={{ margin: 0 }}>
                Vas bien en proteína pero las grasas están algo bajas. Considera agregar{' '}
                <span style={{ color: 'var(--color-accent-strong)', fontWeight: 600 }}>aguacate</span> o{' '}
                <span style={{ color: 'var(--color-accent-strong)', fontWeight: 600 }}>frutos secos</span> a tu próxima comida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
