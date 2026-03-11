import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserType = 'athlete' | 'nutritionist' | 'active_person'

export interface WaitlistEntry {
  name: string
  email: string
  user_type: UserType
}

export async function joinWaitlist(entry: WaitlistEntry): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('waitlist')
    .insert([entry])

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'email_exists' }
    }
    return { success: false, error: 'unknown_error' }
  }

  return { success: true }
}
