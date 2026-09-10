import { cn } from "@/lib/utils";

/**
 * شعار "البيت الدافئ"
 * يعرض شعاراً مستقلاً بصيغة SVG.
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
        src="/welcoming-heart-logo.svg"
        alt="شعار البيت الدافئ"
        className={cn("h-10 w-10 shrink-0 object-contain", imgClassName)}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
