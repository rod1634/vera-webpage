import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/lib/useReveal'
import { WaitlistForm } from './WaitlistForm'

type Perk = { title: string; description: string }

export function Waitlist() {
  const { t } = useTranslation()
  const [pitchRef, pitchIn] = useReveal<HTMLDivElement>()
  const [formRef, formIn] = useReveal<HTMLDivElement>()
  const perks = t('waitlist.perks', { returnObjects: true }) as Perk[]

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden max-w-[1200px] mx-auto px-md md:px-lg py-20"
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          left: '-100px',
          top: '-100px',
          background: 'radial-gradient(circle, rgba(56,140,135,0.16), transparent 60%)',
        }}
      />

      <div className="relative z-[1] grid items-center gap-14 grid-cols-1 lg:grid-cols-2">
        {/* Left — pitch + perks */}
        <div ref={pitchRef} className={cn('reveal', pitchIn && 'in')}>
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.12em] uppercase text-accent-strong mb-4">
            <span className="inline-block w-6 h-[1.5px] bg-accent" />
            {t('waitlist.eyebrow')}
          </span>
          <h2
            className="font-bold tracking-[-0.02em] m-0 mb-4"
            style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', lineHeight: 1.1 }}
          >
            {t('waitlist.title')}{' '}
            <span className="italic font-semibold text-accent-strong">
              {t('waitlist.titleItalic')}
            </span>
            .
          </h2>
          <p className="text-body text-text-secondary leading-relaxed m-0 mb-7">
            {t('waitlist.subtitle')}
          </p>

          <ul className="flex flex-col gap-3.5 m-0 p-0 list-none">
            {perks.map((perk, i) => (
              <li
                key={i}
                className="flex items-start gap-3.5 p-3.5 rounded-[14px] border border-border-subtle"
                style={{ background: 'rgba(255,255,255,0.5)' }}
              >
                <span
                  className="flex items-center justify-center text-white shrink-0"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '9px',
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
                  }}
                >
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div className="flex-1 min-w-0">
                  <strong className="block text-callout font-bold text-text-primary mb-0.5">
                    {perk.title}
                  </strong>
                  <span className="text-caption text-text-secondary leading-snug block">
                    {perk.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form card */}
        <div
          ref={formRef}
          className={cn(
            'reveal w-full max-w-[480px] mx-auto lg:ml-auto bg-surface-elevated backdrop-blur-md border border-stroke-inner shadow-floating rounded-3xl',
            formIn && 'in',
          )}
          style={{
            outline: '1px solid var(--color-border-subtle)',
            outlineOffset: '-1px',
            padding: '32px',
          }}
        >
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent-strong mb-1.5">
            {t('waitlist.formEyebrow')}
          </p>
          <h3 className="text-title-2 font-bold tracking-[-0.015em] mb-5 m-0">
            {t('waitlist.formTitle')}
          </h3>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
