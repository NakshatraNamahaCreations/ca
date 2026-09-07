import Link from "next/link";
import { Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  body,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  breadcrumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b bg-[var(--bg-2)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45rem 22rem at 72% -20%, color-mix(in oklab, var(--color-brand-500) 18%, transparent), transparent 65%), radial-gradient(26rem 16rem at 6% 120%, color-mix(in oklab, var(--color-accent-500) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x relative py-14 sm:py-20">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="muted mb-5 text-xs">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  <Link href={crumb.href} className="hover:text-brand-600">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {body ? (
          <p className="muted mt-5 max-w-2xl text-lg leading-relaxed text-pretty">
            {body}
          </p>
        ) : null}
      </div>
    </section>
  );
}
