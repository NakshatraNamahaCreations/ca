import Image from "next/image";
import Link from "next/link";
import mark from "@/../public/brand/mark.png";
import { cn } from "./ui";

/**
 * Brand lockup: the gold eagle mark cut out of the Apex Radiant brand artwork,
 * with the wordmark set in type beside it.
 *
 * The mark is a transparent PNG, so it needs no backing tile - gold reads
 * cleanly on both the dark video banner and the white header.
 */
export default function Logo({
  onDark = false,
  className,
  showText = true,
}: {
  onDark?: boolean;
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <Image
        src={mark}
        alt=""
        priority
        sizes="96px"
        className="h-9 w-auto shrink-0 object-contain sm:h-10"
      />

      {showText ? (
        <span className="leading-none">
          <span
            className={cn(
              "block text-[15px] font-bold tracking-[0.06em] sm:text-base",
              onDark ? "text-white" : "text-brand-900"
            )}
          >
            <span className="text-accent-600">APEX</span> RADIANT
          </span>
          <span
            className={cn(
              "mt-1 block text-[9px] font-semibold tracking-[0.28em] sm:text-[10px]",
              onDark ? "text-white/65" : "text-ink-muted"
            )}
          >
            CONSULTANT LLP
          </span>
        </span>
      ) : null}
    </Link>
  );
}
