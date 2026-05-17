import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { joinWaitlist, type UserType } from '@/lib/supabase'
import { CheckCircle2, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function WaitlistForm() {
  const { t } = useTranslation()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    user_type: '' as UserType | '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const userTypes: { value: UserType; label: string }[] = [
    { value: 'athlete', label: t('waitlist.form.userTypes.athlete') },
    { value: 'nutritionist', label: t('waitlist.form.userTypes.nutritionist') },
    { value: 'active_person', label: t('waitlist.form.userTypes.active_person') },
  ]

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = t('waitlist.errors.required')
    if (!formData.email.trim()) {
      newErrors.email = t('waitlist.errors.required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('waitlist.errors.invalid_email')
    }
    if (!formData.user_type) newErrors.user_type = t('waitlist.errors.required')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    setErrorMessage('')
    const result = await joinWaitlist({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      user_type: formData.user_type as UserType,
    })
    if (result.success) {
      setFormState('success')
    } else {
      setFormState('error')
      setErrorMessage(t(`waitlist.errors.${result.error}`))
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div
          className="flex items-center justify-center mx-auto mb-4"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.46)',
            border: '1px solid rgba(255,255,255,0.55)',
          }}
        >
          <CheckCircle2 className="h-7 w-7 text-success" strokeWidth={1.75} />
        </div>
        <h3 className="text-title-2 mb-1">{t('waitlist.success.title')}</h3>
        <p className="text-body text-text-secondary">{t('waitlist.success.message')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Name */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="name">{t('waitlist.form.name')}</Label>
        <Input
          id="name"
          type="text"
          placeholder={t('waitlist.form.namePlaceholder')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={errors.name ? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30' : ''}
        />
        {errors.name && <p className="text-caption text-destructive">{errors.name}</p>}
      </div>

      {/* Email */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="email">{t('waitlist.form.email')}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t('waitlist.form.emailPlaceholder')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30' : ''}
        />
        {errors.email && <p className="text-caption text-destructive">{errors.email}</p>}
      </div>

      {/* User type */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label>{t('waitlist.form.userType')}</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {userTypes.map((type) => {
            const active = formData.user_type === type.value
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => setFormData({ ...formData, user_type: type.value })}
                style={{
                  padding: '10px 8px',
                  borderRadius: '12px',
                  border: active ? '1px solid var(--color-accent)' : '1px solid rgba(0,0,0,0.12)',
                  background: active ? 'var(--color-accent)' : 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(8px)',
                  color: active ? '#ffffff' : 'var(--color-text-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 160ms ease',
                  boxShadow: active ? 'var(--shadow-soft)' : 'none',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {type.label}
              </button>
            )
          })}
        </div>
        {errors.user_type && <p className="text-caption text-destructive">{errors.user_type}</p>}
      </div>

      {errorMessage && (
        <div
          style={{
            background: 'rgba(204,94,87,0.08)',
            border: '1px solid rgba(204,94,87,0.3)',
            borderRadius: '12px',
            padding: '10px 14px',
            fontSize: '14px',
            color: 'var(--color-destructive)',
          }}
        >
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primaryGradient"
        className="w-full"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" strokeWidth={2} />
            {t('waitlist.form.submitting')}
          </>
        ) : (
          t('waitlist.form.submit')
        )}
      </Button>
    </form>
  )
}
