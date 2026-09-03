import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TITLE = "البيت الدافئ — عقارات فاخرة";
const DESCRIPTION =
  "شريكك الموثوق في إيجاد وتملك العقارات الفاخرة في السعودية. نقدم أفضل الخيارات السكنية والتجارية بأعلى معايير الجودة.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HomePage,
});

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                  */
/* ------------------------------------------------------------------ */
function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

/* ------------------------------------------------------------------ */
/*  Reusable section wrapper                                           */
/* ------------------------------------------------------------------ */
function Section({
  children,
  className,
  id,
  ref,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ref?: RefObject<HTMLElement | null>;
}) {
  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative overflow-hidden px-6 py-20 sm:px-12 sm:py-28 lg:px-20", className)}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا", href: "#services" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "لماذا نحن", href: "#why-us" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 shadow-[0_1px_0_var(--color-border)] backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            ب
          </span>
          البيت الدافئ
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button size="sm" className="btn-shine rounded-full px-5 text-sm font-medium">
              تسجيل دخول
            </Button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="فتح القائمة"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">فتح القائمة</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-foreground transition-all duration-300",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          menuOpen ? "max-h-96 border-b border-border/50 bg-background/95 backdrop-blur-lg" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button size="sm" className="w-full btn-shine rounded-full text-sm font-medium">
              تسجيل دخول
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Background image layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_95%)]" />
      </div>

      {/* Decorative floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute left-[12%] top-[18%] h-28 w-28 rounded-full border border-primary/20 bg-primary/5 blur-md" />
        <div className="animate-float-delayed absolute right-[10%] top-[30%] h-20 w-20 rounded-full border border-primary/15 bg-primary/8 blur-md" />
        <div className="animate-float absolute bottom-[20%] left-[8%] h-16 w-16 rounded-full border border-primary/10 bg-primary/5 blur-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-12">
        <p className="animate-fade-up mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-xs font-medium tracking-wide text-primary">
          شريكك الموثوق في العقارات الفاخرة
        </p>
        <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl [animation-delay:0.12s]">
          ابحث عن منزل أحلامك
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            مع البيت الدافئ
          </span>
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:0.24s]">
          نوفر لك أفضل الخيارات العقارية السكنية والتجارية في أرقى أحياء المملكة.
          فريقنا المتخصص يرافقك في كل خطوة لضمان تجربة سلسة وآمنة.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-4 [animation-delay:0.36s]">
          <Button size="lg" className="btn-shine rounded-full px-8 text-base font-medium shadow-xl shadow-primary/20">
            ابدأ البحث
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border/50 px-8 text-base font-medium backdrop-blur-sm"
          >
            تعرف علينا
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats bar                                                          */
/* ------------------------------------------------------------------ */
const stats = [
  { value: "580+", label: "عقار مباع" },
  { value: "95%", label: "رضا العملاء" },
  { value: "12+", label: "عام خبرة" },
  { value: "40+", label: "جائزة تميز" },
];

function StatsBar() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);

  return (
    <Section
      ref={ref}
      className="reveal border-y border-border/30 bg-accent/30"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-foreground sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "بيع وشراء العقارات",
    desc: "نساعدك في بيع أو شراء العقارات السكنية والتجارية بأفضل الأسعار وبأقل وقت وجهد.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",
  },
  {
    title: "إدارة الأملاك",
    desc: "نقدم خدمات إدارة شاملة للعقارات السكنية والتجارية تشمل الصيانة والتأجير والتحصيل.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z",
  },
  {
    title: "تقييم عقاري",
    desc: "خدمات تقييم عقاري احترافية معتمدة من الهيئة السعودية للمقيمين المعتمدين.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "استشارات عقارية",
    desc: "فريق استشاري متكامل يقدم النصائح القانونية والاستثمارية حول سوق العقارات السعودي.",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
];

function Services() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);

  return (
    <Section id="services" ref={ref} className="reveal">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            خدماتنا
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            كل ما تحتاجه في رحلة عقارك
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            نقدم مجموعة متكاملة من الخدمات العقارية المصممة خصيصاً لتلبية احتياجاتك
            وضمان تجربة سلسة من البداية إلى النهاية.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border/40 bg-card/50 p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */
const projects = [
  {
    title: "واحة النخيل",
    location: "الرياض - حي النخيل",
    desc: "فلل فاخرة بمساحات واسعة وحدائق خاصة مع إطلالة على الواحات الخضراء.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    tag: "قيد التطوير",
  },
  {
    title: "مارينا الساحل",
    location: "جدة - الشاطئ",
    desc: "شقق سكنية راقية على الواجهة البحرية بمواصفات عالمية وإطلالة بحرية ساحرة.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    tag: "جاهز للتسليم",
  },
  {
    title: "الوادي الأخضر",
    location: "الدمام - حي الوادي",
    desc: "مجمع سكني متكامل بمساحات خضراء ومرافق ترفيهية وتعليمية على أعلى مستوى.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tag: "قيد التطوير",
  },
];

function Projects() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);

  return (
    <Section id="projects" ref={ref} className="reveal bg-accent/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            مشاريعنا
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            أبرز مشاريعنا العقارية
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            نفتخر بتقديم مجموعة من أرقى المشاريع السكنية والتجارية في مختلف مدن المملكة.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-border/40 bg-background/60 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary">{p.location}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full border-border/50 px-8 text-sm font-medium">
            عرض جميع المشاريع
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Us                                                            */
/* ------------------------------------------------------------------ */
const reasons = [
  {
    title: "خبرة ممتدة",
    desc: "أكثر من 12 عاماً من الخبرة في سوق العقارات السعودي تمنحنا فهمًا عميقًا للسوق المحلي.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "فريق متخصص",
    desc: "مستشارون عقاريون معتمدون بخبرات متنوعة في التقييم والتسويق والتفاوض والقانون.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "ضمانات شفافة",
    desc: "عقود واضحة وضمانات قانونية تغطي جميع مراحل الشراء والبيع والإيجار.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "خدمة ما بعد البيع",
    desc: "دعم متواصل بعد إتمام الصفقة لضمان رضاك التام وتذليل أي صعوبات مستقبلية.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

function WhyUs() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);

  return (
    <Section id="why-us" ref={ref} className="reveal">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            لماذا البيت الدافئ
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            نضع ثقتك في المقام الأول
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            نلتزم بأعلى معايير النزاهة والشفافية والاحترافية في كل ما نقدمه.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */
function Cta() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);

  return (
    <Section ref={ref} className="reveal bg-accent/30">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          هل أنت مستعد لبدء رحلتك العقارية؟
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          تواصل معنا اليوم للحصول على استشارة مجانية مع أحد خبرائنا العقاريين.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="btn-shine rounded-full px-8 text-base font-medium shadow-xl shadow-primary/20">
            تواصل معنا
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border/50 px-8 text-base font-medium"
          >
            احجز موعد
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-12 lg:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                ب
              </span>
              البيت الدافئ
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              شريكك الموثوق في عالم العقارات الفاخرة في المملكة العربية السعودية.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {["الرئيسية", "خدماتنا", "مشاريعنا", "اتصل بنا"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">خدماتنا</h4>
            <ul className="space-y-2.5">
              {["بيع وشراء", "إدارة أملاك", "تقييم عقاري", "استشارات"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">تواصل معنا</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>الرياض - المملكة العربية السعودية</li>
              <li dir="ltr">+966 55 123 4567</li>
              <li>info@albaitaldafea.sa</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/20 pt-8 text-center text-xs text-muted-foreground">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} البيت الدافئ للعقارات
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Projects />
      <WhyUs />
      <Cta />
      <Footer />
    </main>
  );
}