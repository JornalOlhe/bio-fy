import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[330px] rounded-[2.75rem] border border-border bg-surface-2 p-[10px]",
        glow && "shadow-glow",
        className,
      )}
    >
      <div className="absolute left-1/2 top-[18px] z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-black/85" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.25rem] bg-black">
        <div className="no-scrollbar h-full w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
