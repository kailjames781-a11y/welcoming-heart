/**
 * Presentational hero that welcomes the visitor in Arabic.
 * Purely visual — no data or side effects.
 */
export function GreetingHero() {
  return (
    <section
      aria-labelledby="greeting-title"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-16 text-center"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute start-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,var(--background)_85%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary">
          أهلاً وسهلاً
        </span>

        <h1
          id="greeting-title"
          className="bg-gradient-to-b from-foreground to-primary bg-clip-text text-6xl font-bold leading-[1.15] text-transparent sm:text-7xl md:text-8xl"
        >
          أهلاً
        </h1>

        <p className="max-w-md text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          واجهة بسيطة وأنيقة ترحّب بك. مصمّمة بعناية لتعمل بسلاسة على كل الشاشات.
        </p>

        <div className="mt-2 h-px w-24 bg-gradient-to-l from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
}
