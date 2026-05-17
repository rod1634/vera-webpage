import { useTranslation } from 'react-i18next'
import { RefreshCw, Scale, Shield, Eye, Users, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/lib/useReveal'

const ICONS = [RefreshCw, Scale, Shield, Eye, Users, BarChart3]

type BenefitItem = { title: string; description: string }

export function Benefits() {
  const { t } = useTranslation()
  const [headRef, headIn] = useReveal<HTMLDivElement>()
  const [bentoRef, bentoIn] = useReveal<HTMLDivElement>()
  const benefits = t('benefits.items', { returnObjects: true }) as BenefitItem[]

  // Bento order: [wide-feature, std, std, std, std, wide-feature]
  // benefits order is: 0 Planes dinámicos, 1 Balance, 2 Seguridad, 3 Transparencia, 4 Nutricionista, 5 Datos
  // We want #0 and #5 as wide features.

  return (
    <section id="benefits" className="relative max-w-[1200px] mx-auto px-md md:px-lg py-24">
      <div
        ref={headRef}
        className={cn('reveal grid items-end gap-12 mb-20 grid-cols-1 lg:grid-cols-[1.3fr_1fr]', headIn && 'in')}
      >
        <div>
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.12em] uppercase text-accent-strong mb-4">
            <span className="inline-block w-6 h-[1.5px] bg-accent" />
            {t('benefits.eyebrow')}
          </span>
          <h2
            className="font-bold tracking-[-0.025em] m-0 max-w-[640px]"
            style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 1.06 }}
          >
            {t('benefits.title')}{' '}
            <span className="italic font-semibold text-accent-strong">
              {t('benefits.titleItalic')}
            </span>
            .
          </h2>
        </div>
        <p className="text-body text-text-secondary max-w-[360px] m-0 pb-1.5 leading-relaxed">
          {t('benefits.subtitle')}
        </p>
      </div>

      <div
        ref={bentoRef}
        className={cn(
          'reveal-stagger grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]',
          bentoIn && 'in',
        )}
      >
        {benefits.map((b, i) => {
          const Icon = ICONS[i]
          const isFeature = i === 0 || i === 5
          return (
            <div
              key={i}
              className={cn(
                'relative overflow-hidden p-6 rounded-[22px] shadow-soft backdrop-blur-md transition-all duration-medium hover:-translate-y-1 hover:shadow-floating',
                isFeature ? 'bento-feature' : 'bg-surface border border-stroke-inner',
              )}
              style={{
                gridColumn: isFeature ? 'span 2' : 'span 1',
                outline: '1px solid var(--color-border-subtle)',
                outlineOffset: '-1px',
                ...(isFeature
                  ? {
                      background:
                        'linear-gradient(135deg, rgba(56,140,135,0.12), rgba(41,95,97,0.06))',
                      border: '1px solid rgba(56,140,135,0.20)',
                    }
                  : {}),
              }}
            >
              <div
                className="flex items-center justify-center text-accent-strong mb-3.5"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(56,140,135,0.10)',
                }}
              >
                <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
              </div>
              <h3
                className={cn(
                  'font-bold tracking-[-0.01em] text-text-primary m-0 mb-1.5',
                  isFeature ? 'text-title-2' : 'text-headline',
                )}
              >
                {b.title}
              </h3>
              <p
                className={cn(
                  'text-text-secondary leading-relaxed m-0',
                  isFeature ? 'text-[14.5px] max-w-[320px]' : 'text-[13.5px]',
                )}
              >
                {b.description}
              </p>

              {/* Bottom-right visualization */}
              {i === 0 && <VizPlan />}
              {i === 5 && <VizData label={t('benefits.vizVariables')} />}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function VizPlan() {
  return (
    <div
      aria-hidden
      className="absolute pointer-events-none"
      style={{ right: '-20px', bottom: '-10px', width: '200px', height: '130px' }}
    >
      <svg viewBox="0 0 200 130" className="w-full h-full">
        <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="10" y1="60" x2="190" y2="60" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="10" y1="20" x2="190" y2="20" stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="3 3" />
        <path
          d="M 10 70 L 190 50"
          fill="none"
          stroke="var(--color-macro-protein)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          opacity="0.7"
        />
        <path
          d="M 10 90 Q 50 60 80 75 T 130 50 T 190 35"
          fill="none"
          stroke="var(--color-accent-strong)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="190" cy="35" r="6" fill="#fff" stroke="var(--color-accent-strong)" strokeWidth="2" />
        <circle cx="190" cy="35" r="3" fill="var(--color-accent-strong)" />
      </svg>
    </div>
  )
}

function VizData({ label }: { label: string }) {
  // 17 dots arranged in a 6-col grid with varied states
  const dots: ('on' | 'warn' | 'info' | 'fat')[] = [
    'on', 'on', 'warn', 'on', 'info', 'on',
    'on', 'fat', 'on', 'on', 'on', 'warn',
    'on', 'info', 'on', 'on', 'on',
  ]
  const colorFor = (d: typeof dots[number]) =>
    d === 'on'
      ? 'var(--color-accent)'
      : d === 'warn'
        ? 'var(--color-macro-protein)'
        : d === 'info'
          ? 'var(--color-macro-carbs)'
          : 'var(--color-macro-fats)'

  return (
    <div
      aria-hidden
      className="absolute pointer-events-none grid"
      style={{
        right: '24px',
        bottom: '24px',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '6px',
        width: '152px',
      }}
    >
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '4px',
            background: colorFor(d),
            boxShadow: d === 'on' ? '0 0 0 2px rgba(56,140,135,0.15)' : 'none',
          }}
        />
      ))}
      <span
        className="text-caption text-text-secondary uppercase tracking-[0.06em] mt-1 text-right"
        style={{ gridColumn: 'span 6' }}
      >
        <b className="text-text-primary text-[13px] font-bold">17</b> {label}
      </span>
    </div>
  )
}
