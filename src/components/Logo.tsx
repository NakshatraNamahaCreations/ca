import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/brand/logo.jpg";
import { cn } from "./ui";

/**
 * Brand lockup. The supplied logo is a JPEG with a white background, so it is
 * always placed on a white tile - that keeps it legible on the dark video
 * banner and in dark mode without needing a cut-out version of the artwork.
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
      <span
        className={cn(
          "grid shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm",
          onDark ? "ring-1 ring-white/25" : "ring-1 ring-[var(--line)]"
        )}
      >
        <Image
          src={logo}
          alt=""
          width={40}
          height={30}
          priority
          className="h-7 w-auto object-contain"
        />
      </span>

      {showText ? (
        <span
          className={cn(
            "text-[15px] leading-tight font-bold",
            onDark && "text-white"
          )}
        >
          Radiant
          <span className={onDark ? "text-white/85" : "text-brand-600"}>
            {" "}
            Company Services
          </span>
        </span>
      ) : null}
    </Link>
  );
}
