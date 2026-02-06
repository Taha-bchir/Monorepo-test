'use client'

import Link from 'next/link'
import { useAuthStore } from '@/stores/auth'
import { ROUTES } from '@repo/constants'

const primaryBtn =
  'inline-flex min-h-[44px] min-w-[120px] items-center justify-center rounded-xl bg-(--accent) px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-(--accent-muted) focus:ring-offset-2 focus:ring-offset-(--background)'

const secondaryBtn =
  'inline-flex min-h-[44px] min-w-[120px] items-center justify-center rounded-xl border border-(--border) bg-transparent px-8 py-3.5 text-base font-semibold text-(--foreground) transition-colors hover:bg-(--card) focus:outline-none focus:ring-2 focus:ring-(--ring) focus:ring-offset-2 focus:ring-offset-(--background)'

export function LandingCta() {
  const authStatus = useAuthStore(state => state.authStatus)
  const isAuthenticated = authStatus === 'authenticated'

  if (isAuthenticated) {
    return (
      <Link href={ROUTES.APP_DASHBOARD} className={primaryBtn}>
        Go to Dashboard
      </Link>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link href={ROUTES.AUTH_SIGNUP} className={primaryBtn}>
        Get started
      </Link>
      <Link href={ROUTES.AUTH_LOGIN} className={secondaryBtn}>
        Log in
      </Link>
    </div>
  )
}
