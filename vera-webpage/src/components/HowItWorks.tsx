import { useTranslation } from 'react-i18next'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{
    number: string
    title: string
    description: string
  }>

  return (
    <section id="how-it-works" className="py-xl md:py-24">
      <div className="max-w-6xl mx-auto px-md md:px-lg">
        <h2 className="text-title sm:!text-[34px] sm:!leading-[1.12] text-center mb-xl">
          {t('howItWorks.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-surface backdrop-blur-md border border-stroke-inner outline outline-1 outline-border-subtle -outline-offset-1 rounded-lg p-lg shadow-soft transition-transform duration-medium hover:-translate-y-0.5"
            >
              <div className="text-title-2 font-bold text-accent mb-sm tabular-nums">
                {step.number}
              </div>
              <h3 className="text-headline mb-1 text-text-primary">{step.title}</h3>
              <p className="text-callout text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
