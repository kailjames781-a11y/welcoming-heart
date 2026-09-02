import { createFileRoute } from "@tanstack/react-router";

import { LoginForm } from "@/components/LoginForm";

const TITLE = "تسجيل الدخول — واجهة آمنة";
const DESCRIPTION =
  "صفحة تسجيل دخول عربية بتصميم داكن أنيق، متجاوبة بالكامل وآمنة.";

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
      <LoginForm />
    </main>
  );
}