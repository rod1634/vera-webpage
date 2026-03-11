import { useTranslation } from 'react-i18next'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{
    number: string
    title: string
    description: string
  }>

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          {t('howItWorks.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-serif text-charcoal/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-charcoal/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
