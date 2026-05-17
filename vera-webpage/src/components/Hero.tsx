import { useEffect, useRef } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Button } from './ui/button'
import { ArrowRight, Check } from 'lucide-react'

const FOOD_PHOTO = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80'

export function Hero() {
  const { t, i18n } = useTranslation()
  const kcalRef = useRef<HTMLSpanElement>(null)

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const el = kcalRef.current
    if (!el) return
    const target = 1840
    const duration = 1400
    const start = performance.now() + 900
    let raf = 0
    const locale = i18n.language === 'en' ? 'en-US' : 'es-ES'
    const tick = (time: number) => {
      const p = Math.max(0, Math.min(1, (time - start) / duration))
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = Math.round(eased * target).toLocaleString(locale)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [i18n.language])

  return (
    <section className="relative overflow-hidden pt-16">
      {/* Atmospheric glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          width: '720px',
          height: '720px',
          left: '-200px',
          top: '20%',
          background: 'radial-gradient(circle, rgba(245,210,150,0.35), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          width: '640px',
          height: '640px',
          right: '-160px',
          top: '-120px',
          background: 'radial-gradient(circle, rgba(56,140,135,0.18), transparent 60%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-md md:px-lg py-xl grid items-center gap-14 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — text + trust */}
          <div>
            <span
              className="inline-flex items-center gap-2.5 bg-surface-subtle backdrop-blur-md border border-stroke-inner rounded-full pl-2.5 pr-3.5 py-1.5 mb-lg text-callout font-medium text-text-secondary"
              style={{ animation: 'rise 600ms var(--ease-spring) 50ms both' }}
            >
              <span className="relative inline-block w-[7px] h-[7px] rounded-full bg-accent">
                <span
                  className="absolute rounded-full"
                  style={{
                    inset: '-4px',
                    background: 'rgba(56,140,135,0.28)',
                    animation: 'pulse-dot 2s ease-in-out infinite',
                  }}
                />
              </span>
              {t('hero.tagline')}
            </span>

            <h1
              className="mb-md font-bold tracking-[-0.028em]"
              style={{
                fontSize: 'clamp(40px, 5.4vw, 64px)',
                lineHeight: 1.04,
                animation: 'rise 700ms var(--ease-spring) 150ms both',
              }}
            >
              {t('hero.title')}
              <span className="block italic font-semibold text-accent-strong">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p
              className="text-body sm:text-headline text-text-secondary mb-lg max-w-[500px] leading-relaxed font-normal"
              style={{ animation: 'rise 700ms var(--ease-spring) 250ms both' }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className="flex flex-row items-center gap-md mb-xl"
              style={{ animation: 'rise 700ms var(--ease-spring) 350ms both' }}
            >
              <Button onClick={scrollToWaitlist} size="lg" variant="primaryGradient" className="group">
                {t('hero.cta')}
                <ArrowRight
                  className="ml-2 h-[18px] w-[18px] group-hover:translate-x-1 transition-transform duration-fast"
                  strokeWidth={1.75}
                />
              </Button>
              <span className="text-caption text-text-secondary whitespace-pre-line leading-tight">
                {t('hero.ctaSubtext')}
              </span>
            </div>

            {/* Trust strip — only honest claims (no fake counters or testimonials) */}
            <div
              className="flex flex-wrap items-center gap-x-lg gap-y-sm pt-lg border-t border-border-subtle"
              style={{ animation: 'rise 700ms var(--ease-spring) 450ms both' }}
            >
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-accent/15 text-accent-strong">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>{t('hero.trust.beta')}</span>
              </div>
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <span aria-hidden className="text-[15px] leading-none">🇻🇪</span>
                <span>{t('hero.trust.country')}</span>
              </div>
              <div className="flex items-center gap-2 text-caption text-text-secondary">
                <span aria-hidden className="text-accent">✦</span>
                <span>{t('hero.trust.noRigidDiets')}</span>
              </div>
            </div>
          </div>

          {/* Right — artifact collage */}
          <ArtifactCollage kcalRef={kcalRef} />
        </div>
      </div>
    </section>
  )
}

function ArtifactCollage({ kcalRef }: { kcalRef: React.RefObject<HTMLSpanElement | null> }) {
  const { t } = useTranslation()

  const cardBase: React.CSSProperties = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.55)',
    outline: '1px solid rgba(0,0,0,0.06)',
    outlineOffset: '-1px',
    borderRadius: '20px',
    boxShadow: '0 24px 48px -18px rgba(18,18,18,0.22), 0 4px 14px rgba(18,18,18,0.06)',
    transition: 'transform 400ms var(--ease-spring)',
  }

  return (
    <div
      className="relative w-full mx-auto lg:ml-auto"
      style={{ aspectRatio: '1 / 1.05', maxWidth: '460px' }}
    >
      {/* Chat bubble — top */}
      <div
        className="hover:!rotate-0 hover:-translate-y-1"
        style={{
          ...cardBase,
          top: 0,
          left: 0,
          width: '78%',
          padding: '16px 18px 14px 42px',
          zIndex: 3,
          transform: 'rotate(-3deg)',
          ['--rot' as string]: '-3deg',
          animation: 'rise-rotate 800ms var(--ease-spring) 300ms both',
        }}
      >
        <span
          aria-hidden
          className="absolute flex items-center justify-center text-white font-bold"
          style={{
            top: '-14px',
            left: '14px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
            fontSize: '14px',
            border: '2px solid #fff',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          V
        </span>
        <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-secondary mb-1">
          {t('hero.artifact.label')}
        </p>
        <p className="text-[14px] leading-[1.5] text-text-primary m-0">
          <Trans
            i18nKey="hero.artifact.message"
            components={[
              <b key="0" className="text-accent-strong font-semibold" />,
              <b key="1" className="text-accent-strong font-semibold" />,
            ]}
          />
        </p>
      </div>

      {/* Food photo — center, circular */}
      <div
        className="hover:!rotate-0 hover:-translate-y-1 hover:scale-[1.02]"
        style={{
          ...cardBase,
          padding: 0,
          top: '24%',
          right: '-2%',
          width: '60%',
          aspectRatio: '1',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '7px solid #fff',
          zIndex: 2,
          transform: 'rotate(4deg)',
          ['--rot' as string]: '4deg',
          animation: 'rise-rotate 800ms var(--ease-spring) 500ms both',
        }}
      >
        <img
          src={FOOD_PHOTO}
          alt={t('hero.artifact.photoCaption')}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <span
          className="absolute text-[11px] font-semibold text-text-primary whitespace-nowrap"
          style={{
            bottom: '14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            padding: '5px 12px',
            borderRadius: '999px',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          🥗 {t('hero.artifact.photoCaption')}
        </span>
      </div>

      {/* Macro ring card — bottom */}
      <div
        className="hover:!rotate-0 hover:-translate-y-1"
        style={{
          ...cardBase,
          bottom: 0,
          left: 0,
          width: '68%',
          padding: '18px 20px',
          zIndex: 3,
          transform: 'rotate(-2deg)',
          ['--rot' as string]: '-2deg',
          animation: 'rise-rotate 800ms var(--ease-spring) 700ms both',
        }}
      >
        <div className="flex items-baseline justify-between mb-3.5">
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-text-secondary">
            {t('hero.artifact.macrosTitle')}
          </span>
          <span className="text-[11px] text-text-secondary tabular-nums">
            {t('hero.artifact.macrosTime')}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <MacroRing kcalRef={kcalRef} kcalLabel={t('hero.artifact.kcalLabel')} />
          <div className="flex flex-col gap-[7px] flex-1 min-w-0">
            <MacroRow color="var(--color-macro-protein)" name={t('hero.artifact.protein')} value="98g" />
            <MacroRow color="var(--color-macro-carbs)" name={t('hero.artifact.carbs')} value="186g" />
            <MacroRow color="var(--color-macro-fats)" name={t('hero.artifact.fats')} value="42g" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MacroRow({ color, name, value }: { color: string; name: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[11.5px]">
      <span className="flex items-center gap-[7px] text-text-secondary">
        <span
          className="inline-block w-[7px] h-[7px] rounded-full shrink-0"
          style={{ background: color }}
        />
        {name}
      </span>
      <span className="font-bold text-text-primary tabular-nums">{value}</span>
    </div>
  )
}

function MacroRing({
  kcalRef,
  kcalLabel,
}: {
  kcalRef: React.RefObject<HTMLSpanElement | null>
  kcalLabel: string
}) {
  return (
    <div className="relative shrink-0" style={{ width: '84px', height: '84px' }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r="42" fill="none" strokeWidth="7" stroke="rgba(0,0,0,0.06)" />
        <circle cx="50" cy="50" r="32" fill="none" strokeWidth="7" stroke="rgba(0,0,0,0.06)" />
        <circle cx="50" cy="50" r="22" fill="none" strokeWidth="7" stroke="rgba(0,0,0,0.06)" />
        <circle
          cx="50" cy="50" r="42"
          fill="none" strokeWidth="7"
          stroke="var(--color-macro-protein)"
          strokeLinecap="round"
          strokeDasharray="263.9"
          strokeDashoffset="263.9"
          style={{
            ['--target' as string]: 66,
            animation: 'draw-ring 1.2s var(--ease-spring) 900ms forwards',
          }}
        />
        <circle
          cx="50" cy="50" r="32"
          fill="none" strokeWidth="7"
          stroke="var(--color-macro-carbs)"
          strokeLinecap="round"
          strokeDasharray="201.1"
          strokeDashoffset="201.1"
          style={{
            ['--target' as string]: 80,
            animation: 'draw-ring 1.2s var(--ease-spring) 1050ms forwards',
          }}
        />
        <circle
          cx="50" cy="50" r="22"
          fill="none" strokeWidth="7"
          stroke="var(--color-macro-fats)"
          strokeLinecap="round"
          strokeDasharray="138.2"
          strokeDashoffset="138.2"
          style={{
            ['--target' as string]: 90,
            animation: 'draw-ring 1.2s var(--ease-spring) 1200ms forwards',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span ref={kcalRef} className="text-[16px] font-bold text-text-primary leading-none tabular-nums">
          0
        </span>
        <span className="text-[9px] text-text-secondary tracking-[0.08em] uppercase mt-[3px]">
          {kcalLabel}
        </span>
      </div>
    </div>
  )
}
