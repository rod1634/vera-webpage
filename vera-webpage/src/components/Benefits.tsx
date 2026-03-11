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
    <section id="benefits" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          {t('benefits.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-charcoal/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-sage" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">
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
