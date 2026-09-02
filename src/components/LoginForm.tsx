import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder: actual auth logic goes here
  }

  return (
    <section
      aria-labelledby="login-title"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6"
    >
      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute start-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute start-1/3 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 end-1/3 h-48 w-48 rounded-full bg-primary/8 blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_90%)]" />
      </div>

      {/* Login card */}
      <div className="relative z-10 mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h1
              id="login-title"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              تسجيل الدخول
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              أدخل بيانات حسابك للوصول إلى لوحة التحكم
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                البريد الإلكتروني
              </Label>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="pe-3 ps-10"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  كلمة المرور
                </Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="pe-3 ps-10"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={remember}
                onClick={() => setRemember(!remember)}
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                  remember
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input bg-background hover:border-muted-foreground",
                )}
              >
                {remember && (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                )}
              </button>
              <Label
                htmlFor="remember"
                className="cursor-pointer select-none text-sm text-muted-foreground"
                onClick={() => setRemember(!remember)}
              >
                تذكرني
              </Label>
            </div>

            <Button type="submit" className="w-full py-2.5 text-base font-medium">
              دخول
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card/60 px-3 text-muted-foreground">أو</span>
            </div>
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-muted-foreground">
            ليس لديك حساب؟{" "}
            <button
              type="button"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              إنشاء حساب جديد
            </button>
          </p>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          واجهة آمنة ومشفرة. جميع الحقوق محفوظة.
        </p>
      </div>
    </section>
  );
}