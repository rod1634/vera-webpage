import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = t('faq.items', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>

  return (
    <section id="faq" className="py-xl md:py-24">
      <div className="max-w-3xl mx-auto px-md md:px-lg">
        <h2 className="text-title sm:!text-[34px] sm:!leading-[1.12] text-center mb-xl">
          {t('faq.title')}
        </h2>

        <div className="space-y-sm">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  "bg-surface backdrop-blur-md border border-stroke-inner outline outline-1 -outline-offset-1 rounded-lg overflow-hidden transition-all duration-medium",
                  open ? "outline-accent/30 shadow-soft" : "outline-border-subtle"
                )}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="w-full flex items-center justify-between p-md text-left gap-sm"
                >
                  <span className="text-headline text-text-primary pr-sm">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-text-secondary transition-transform duration-medium flex-shrink-0',
                      open && 'rotate-180 text-accent'
                    )}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-medium ease-out',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-md pb-md text-body text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
