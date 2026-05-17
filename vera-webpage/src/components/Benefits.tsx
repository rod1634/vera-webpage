import { useTranslation } from 'react-i18next'
import {
  RefreshCw,
  Scale,
  Shield,
  Eye,
  Users,
  BarChart3
} from 'lucide-react'

const icons = [RefreshCw, Scale, Shield, Eye, Users, BarChart3]

export function Benefits() {
  const { t } = useTranslation()

  const benefits = t('benefits.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section id="benefits" className="py-xl md:py-24">
      <div className="max-w-6xl mx-auto px-md md:px-lg">
        <h2 className="text-title sm:!text-[34px] sm:!leading-[1.12] text-center mb-xl">
          {t('benefits.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
          {benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-surface backdrop-blur-md border border-stroke-inner outline outline-1 outline-border-subtle -outline-offset-1 rounded-lg p-lg shadow-soft transition-transform duration-medium hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-md bg-surface-subtle border border-stroke-inner flex items-center justify-center mb-sm">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-headline mb-1 text-text-primary">{benefit.title}</h3>
                <p className="text-callout text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
