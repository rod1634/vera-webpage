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

    if (!formData.name.trim()) {
      newErrors.name = t('waitlist.errors.required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('waitlist.errors.required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('waitlist.errors.invalid_email')
    }

    if (!formData.user_type) {
      newErrors.user_type = t('waitlist.errors.required')
    }

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
        <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-sage" />
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2">
          {t('waitlist.success.title')}
        </h3>
        <p className="text-charcoal/70">{t('waitlist.success.message')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{t('waitlist.form.name')}</Label>
        <Input
          id="name"
          type="text"
          placeholder={t('waitlist.form.namePlaceholder')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t('waitlist.form.email')}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t('waitlist.form.emailPlaceholder')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>{t('waitlist.form.userType')}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {userTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setFormData({ ...formData, user_type: type.value })}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                formData.user_type === type.value
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-charcoal/20 hover:border-charcoal/40'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
        {errors.user_type && (
          <p className="text-sm text-red-500">{errors.user_type}</p>
        )}
      </div>

      {errorMessage && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('waitlist.form.submitting')}
          </>
        ) : (
          t('waitlist.form.submit')
        )}
      </Button>
    </form>
  )
}
