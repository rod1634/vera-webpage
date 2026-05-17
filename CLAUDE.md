# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

The actual app lives inside `vera-webpage/vera-webpage/` — the outer `vera-webpage/` directory is the git repo root. All commands below must be run from `vera-webpage/vera-webpage/`.

## Commands

```bash
cd vera-webpage/vera-webpage

npm run dev        # start dev server (Vite)
npm run build      # type-check + production build
npm run lint       # ESLint
npm run preview    # preview production build locally
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Both are required at startup; the Supabase client (`src/lib/supabase.ts`) reads them via `import.meta.env`.

## Architecture

Single-page React 19 app built with Vite + TypeScript + Tailwind CSS v4. No routing — it's a landing page with sections rendered sequentially in `App.tsx`: Header → Hero → HowItWorks → Benefits → Waitlist → FAQ → Footer.

**Path alias:** `@/` maps to `src/` (configured in `vite.config.ts`).

**Styling:** Tailwind v4 with a custom theme in `src/index.css`. Design tokens:
- Colors: `cream`, `cream-dark`, `sage`, `sage-light`, `charcoal`, `charcoal-light`
- Fonts: `font-serif` (Playfair Display) for headings, `font-sans` (Inter) for body
- The visual language follows the Vēra styling guide adopted in `becc33d`: glass surfaces and an iOS-style chat preview pattern. Preserve these conventions when adding UI.

**i18n:** Spanish-first (`lng: 'es'`, fallback `'es'`). Translations live in `src/locales/es.json` and `src/locales/en.json`. Use `useTranslation()` hook from `react-i18next` in components.

**Supabase integration:** `src/lib/supabase.ts` exports a `joinWaitlist()` function that inserts into a `waitlist` table (columns: `name`, `email`, `user_type`). Error code `23505` means duplicate email. User types are `'athlete' | 'nutritionist' | 'active_person'`.

**Waitlist section:** `Waitlist.tsx` is the section/layout wrapper; `WaitlistForm.tsx` owns form state and calls `joinWaitlist()`. Edit the form in `WaitlistForm.tsx`.

**UI primitives:** Shadcn-style components (`Button`, `Input`, `Label`) live in `src/components/ui/` and use `class-variance-authority` + `clsx`/`tailwind-merge` (via `src/lib/utils.ts`).

## Verification

No test framework is configured. `npm run build` (tsc + vite) and `npm run lint` are the only verification steps.

## Notes

The repo-root `README.md` (`# cashin.ai`) is unrelated to the app's branding — the product is "Vēra".
