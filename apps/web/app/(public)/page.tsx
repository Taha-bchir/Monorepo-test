import Link from 'next/link'
import { ROUTES } from '@repo/constants'
import { LandingCta } from '@/src/components/LandingCta'

const features = [
  {
    title: 'Secure auth',
    description:
      'Sign up and sign in with email and password, backed by Supabase.',
  },
  {
    title: 'Monorepo',
    description:
      'Shared packages for database, types, and constants across API and web.',
  },
  {
    title: 'Type-safe API',
    description:
      'Hono API with Prisma and shared TypeScript types end to end.',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-(--background) text-(--foreground)">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-(--border) bg-(--background)/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 md:px-10">
          <Link
            href={ROUTES.HOME}
            className="text-lg font-semibold tracking-tight sm:text-xl"
          >
            App
          </Link>
          <nav className="flex items-center justify-end gap-4">
            <Link
              href={ROUTES.AUTH_LOGIN}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-(--muted-foreground) transition-colors hover:bg-(--card) hover:text-(--foreground)"
            >
              Log in
            </Link>
            <Link
              href={ROUTES.AUTH_SIGNUP}
              className="rounded-lg bg-(--accent) px-4 py-2.5 text-sm font-semibold text-(--accent-foreground) transition-opacity hover:opacity-90"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
          <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center sm:gap-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Build faster with{' '}
              <span className="text-(--accent)">one stack</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-(--muted-foreground) sm:text-lg md:text-xl">
              Monorepo with Hono, Next.js, Prisma and Supabase. Shared types and
              constants so you ship without duplication.
            </p>
            <div className="flex flex-col items-center justify-center pt-2 sm:flex-row sm:gap-4">
              <LandingCta />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full border-t border-(--border) bg-(--card) px-6 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 sm:gap-5">
            <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
              What you get
            </h2>
            <p className="text-center text-sm text-(--muted-foreground) sm:text-base">
              Everything you need to ship a full-stack app.
            </p>
            <ul className="mx-auto mt-8 grid w-full max-w-4xl list-none grid-cols-1 gap-6 p-0 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="flex flex-col gap-2 rounded-xl border border-(--border) bg-(--background) p-6 transition-colors hover:border-(--muted-foreground)/40"
                >
                  <h3 className="text-base font-semibold sm:text-lg">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-(--muted-foreground)">
                    {f.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full border-t border-(--border) px-6 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border border-(--border) bg-(--card) px-8 py-14 text-center sm:gap-5 sm:px-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="text-sm text-(--muted-foreground) sm:text-base">
              Create an account and go to your dashboard in seconds.
            </p>
            <div className="flex flex-col items-center justify-center pt-2 sm:flex-row sm:gap-4">
              <LandingCta />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-(--border) py-6">
        <div className="mx-auto flex w-full max-w-6xl justify-center px-6 sm:px-8 md:px-10">
          <p className="text-center text-sm text-(--muted-foreground)">
            Built with Turborepo, Hono, Next.js, Prisma & Supabase.
          </p>
        </div>
      </footer>
    </div>
  )
}
