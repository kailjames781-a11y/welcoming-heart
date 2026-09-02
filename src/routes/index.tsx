import { createFileRoute } from "@tanstack/react-router";

import { GreetingHero } from "@/components/GreetingHero";

const TITLE = "أهلاً — واجهة ترحيب";
const DESCRIPTION =
  "صفحة ترحيب عربية بتصميم داكن أنيق، متجاوبة بالكامل ومهيأة لتجربة استخدام سلسة على جميع الأجهزة.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <GreetingHero />
      <footer className="pb-4 text-center text-xs text-muted-foreground">
        Powered by Elite AI.
      </footer>
    </main>
  );
}
