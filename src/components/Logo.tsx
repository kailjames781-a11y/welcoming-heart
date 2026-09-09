import { cn } from "@/lib/utils";

/**
 * شعار "البيت الدافئ"
 * يعرض ملف اللوجو الرسمي (public/logo.svg) مع الاسم بجانبه.
 */
export function Logo({
  className,
  imgClassName,
  showName = true,
}: {
  className?: string;
  imgClassName?: string;
  showName?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <img
        src="/logo.svg"
        alt="شعار البيت الدافئ"
        aria-hidden={showName ? true : undefined}
        className={cn("h-9 w-9 shrink-0", imgClassName)}
        loading="eager"
        decoding="async"
      />
      {showName ? (
        <span className="text-lg font-bold tracking-tight text-foreground">
          البيت الدافئ
        </span>
      ) : null}
    </span>
  );
}
