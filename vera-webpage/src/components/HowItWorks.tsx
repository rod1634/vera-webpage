import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { useReveal } from '@/lib/useReveal'

const STEP_PHOTOS = [
  'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80',
  'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
]

type Step = { number: string; tag: string; title: string; description: string }

export function HowItWorks() {
  const { t } = useTranslation()
  const [headRef, headIn] = useReveal<HTMLDivElement>()
  const [timelineRef, timelineIn] = useReveal<HTMLDivElement>()
  const [closingRef, closingIn] = useReveal<HTMLDivElement>()
  const steps = t('howItWorks.steps', { returnObjects: true }) as Step[]

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="relative max-w-[1200px] mx-auto px-md md:px-lg py-24">
      <div
        ref={headRef}
        className={cn('reveal grid items-end gap-12 mb-20 grid-cols-1 lg:grid-cols-[1.3fr_1fr]', headIn && 'in')}
      >
        <div>
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.12em] uppercase text-accent-strong mb-4">
            <span className="inline-block w-6 h-[1.5px] bg-accent" />
            {t('howItWorks.eyebrow')}
          </span>
          <h2
            className="font-bold tracking-[-0.025em] m-0 max-w-[640px]"
            style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 1.06 }}
          >
            {t('howItWorks.title')}{' '}
            <span className="italic font-semibold text-accent-strong">
              {t('howItWorks.titleItalic')}
            </span>
            .
          </h2>
        </div>
        <p className="text-body text-text-secondary max-w-[360px] m-0 pb-1.5 leading-relaxed">
          {t('howItWorks.subtitle')}
        </p>
      </div>

      <div
        ref={timelineRef}
        className={cn(
          'relative reveal-stagger grid gap-6 grid-cols-1 lg:grid-cols-4',
          timelineIn && 'in',
        )}
      >
        {/* Connecting line — desktop horizontal, mobile vertical */}
        <span
          aria-hidden
          className="absolute pointer-events-none origin-left lg:origin-left"
          style={{
            top: '76px',
            left: '10%',
            right: '10%',
            height: '2px',
            background:
              'linear-gradient(to right, transparent 0%, var(--color-accent) 6%, var(--color-accent) 94%, transparent 100%)',
            opacity: 0.35,
            transform: timelineIn ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1.6s var(--ease-spring) 200ms',
          }}
        />

        {steps.map((step, i) => (
          <div key={i} className="relative z-[1] flex flex-col items-center text-center lg:flex-col">
            <div className="relative group/node cursor-pointer mb-9 transition-transform duration-medium hover:-translate-y-1.5 hover:scale-[1.04]">
              <span
                className="absolute z-[2] flex items-center justify-center text-white font-bold tabular-nums"
                style={{
                  top: '-14px',
                  right: '-14px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
                  fontSize: '14px',
                  border: '4px solid var(--color-page-cream)',
                  boxShadow: '0 6px 18px -4px rgba(40,90,90,0.35)',
                }}
              >
                {step.number}
              </span>
              <div
                className="overflow-hidden"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  border: '6px solid #fff',
                  boxShadow: 'var(--shadow-floating)',
                }}
              >
                <img
                  src={STEP_PHOTOS[i]}
                  alt=""
                  className="block w-full h-full object-cover transition-transform duration-spring group-hover/node:scale-110"
                />
              </div>
            </div>
            <span className="inline-flex items-center text-[10px] font-bold tracking-[0.12em] uppercase text-accent-strong bg-accent/10 px-2.5 py-1 rounded-full mb-2.5">
              {step.tag}
            </span>
            <h3 className="text-headline font-bold tracking-[-0.01em] text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-callout text-text-secondary leading-relaxed m-0 max-w-[220px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={closingRef}
        className={cn(
          'reveal mt-24 px-8 py-7 bg-surface backdrop-blur-md border border-stroke-inner rounded-xl shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md',
          closingIn && 'in',
        )}
        style={{
          outline: '1px solid var(--color-border-subtle)',
          outlineOffset: '-1px',
        }}
      >
        <p className="text-body text-text-primary m-0 font-medium">
          {t('howItWorks.closing')}{' '}
          <b className="text-accent-strong font-bold">{t('howItWorks.closingHighlight')}</b>
        </p>
        <button
          onClick={scrollToWaitlist}
          className="inline-flex items-center gap-1.5 text-callout font-semibold text-accent-strong px-md py-2.5 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all duration-fast hover:translate-x-0.5 whitespace-nowrap cursor-pointer"
        >
          {t('howItWorks.closingCta')} →
        </button>
      </div>
    </section>
  )
}
