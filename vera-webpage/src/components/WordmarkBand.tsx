import { useTranslation } from 'react-i18next'

export function WordmarkBand() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden px-md md:px-lg" style={{ padding: '100px 0 120px' }}>
      <div
        aria-hidden
        className="absolute pointer-events-none select-none font-extrabold"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(180px, 28vw, 340px)',
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(28,36,46,0.09)',
          whiteSpace: 'nowrap',
          lineHeight: 0.85,
        }}
      >
        V
        <span
          style={{
            color: 'var(--color-accent-strong)',
            WebkitTextStroke: '0',
            fontWeight: 700,
          }}
        >
          Ē
        </span>
        RA
      </div>

      <div
        className="relative z-[2] mx-auto bg-surface-elevated backdrop-blur-md border border-stroke-inner shadow-floating"
        style={{
          maxWidth: '640px',
          outline: '1px solid var(--color-border-subtle)',
          outlineOffset: '-1px',
          borderRadius: '24px',
          padding: '32px',
        }}
      >
        <p className="text-headline sm:text-title-2 text-text-primary leading-snug mb-md font-medium">
          {t('manifesto.body')}
        </p>
        <p className="text-caption text-text-secondary tracking-[0.06em] uppercase">
          — {t('manifesto.signature')}
        </p>
      </div>
    </section>
  )
}
