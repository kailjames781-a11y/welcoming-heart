import { cn } from "@/lib/utils";

/**
 * شعار "البيت الدافئ"
 * يعرض الملف الرسمي للوجو (public/logo.jpg) بدون نص بجانبه.
 */
export function Logo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src="/logo.jpg"
        alt="شعار البيت الدافئ"
        className={cn("h-10 w-10 shrink-0 object-contain", imgClassName)}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
