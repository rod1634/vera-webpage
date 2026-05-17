import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/lib/useReveal'

export function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [headRef, headIn] = useReveal<HTMLDivElement>()
  const [listRef, listIn] = useReveal<HTMLDivElement>()

  const faqs = t('faq.items', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>

  return (
    <section id="faq" className="max-w-[760px] mx-auto px-md md:px-lg pb-24">
      <div ref={headRef} className={cn('reveal text-center mb-12', headIn && 'in')}>
        <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-accent-strong">
          {t('faq.eyebrow')}
        </span>
        <h2
          className="font-bold tracking-[-0.02em] mt-2 mb-0"
          style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}
        >
          {t('faq.title')}
        </h2>
      </div>

      <div ref={listRef} className={cn('reveal-stagger space-y-3', listIn && 'in')}>
        {faqs.map((faq, index) => {
          const open = openIndex === index
          return (
            <div
              key={index}
              className={cn(
                'bg-surface backdrop-blur-md border border-stroke-inner outline outline-1 -outline-offset-1 rounded-2xl overflow-hidden transition-all duration-medium',
                open ? 'outline-accent/30 shadow-soft' : 'outline-border-subtle',
              )}
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full flex items-center justify-between p-md text-left gap-sm cursor-pointer"
              >
                <span className="text-headline font-semibold text-text-primary pr-sm">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-text-secondary transition-transform duration-medium flex-shrink-0',
                    open && 'rotate-180 text-accent-strong',
                  )}
                  strokeWidth={1.75}
                />
              </button>
              <div
                className={cn(
                  'grid transition-[grid-template-rows] duration-medium ease-out',
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-md pb-md text-body text-text-secondary leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
