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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-charcoal/5 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-sage" />
            <span className="text-sm font-medium text-charcoal/80">
              {t('hero.tagline')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            {t('hero.title')}
            <br />
            <span className="italic text-sage">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="text-lg sm:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToWaitlist} size="lg" className="group">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="mt-4 text-sm text-charcoal/50">
            {t('hero.ctaSubtext')}
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10" />
          <div className="bg-white rounded-2xl shadow-xl border border-charcoal/5 p-6 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-cream" />
              </div>
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-wide">Vēra • Insight del día</p>
              </div>
            </div>
            <p className="text-charcoal/80 leading-relaxed">
              Vas bien en proteína pero las grasas están algo bajas. Considera agregar{' '}
              <span className="text-sage font-medium">aguacate</span> o{' '}
              <span className="text-sage font-medium">frutos secos</span> a tu próxima comida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
