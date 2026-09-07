"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ButtonLink, cn } from "./ui";
import { ArrowRight, Phone } from "./Icons";

export default function Faq({
  items,
  eyebrow = "FAQ",
  title = "Questions we get asked a lot",
  body = "Quick answers about our financial, compliance, and legal services. If you need anything else, our team is a call away.",
  alt = false,
  support = true,
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  body?: string;
  alt?: boolean;
  /** Show the "still have questions" card beside the list. */
  support?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-24",
        alt ? "bg-[var(--bg-2)]" : "bg-white"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(38rem 22rem at 0% 0%, rgba(24,88,136,.06), transparent 62%), radial-gradient(28rem 18rem at 100% 100%, rgba(245,121,33,.05), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.3fr] lg:gap-16">
          {/* Intro column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
              {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.5rem]">
              {title}
            </h2>
            <span
              aria-hidden
              className="mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-600 via-accent-500 to-leaf-500"
            />
            {body ? (
              <p className="mt-6 text-base leading-relaxed text-pretty text-ink-muted">
                {body}
              </p>
            ) : null}

            {support ? (
              <div className="mt-9 overflow-hidden rounded-2xl bg-brand-700 p-6 shadow-xl shadow-brand-900/20">
                <h3 className="text-base font-bold text-white">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">
                  Share your requirement and our experts will guide you with the
                  right compliance, tax, and legal plan.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                  <ButtonLink href="/contact" variant="accent" className="w-full sm:w-auto lg:w-full xl:w-auto">
                    Book consultation
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href={site.phoneHref}
                    className="w-full border border-white/25 bg-white/10 text-white shadow-none hover:bg-white/20 sm:w-auto lg:w-full xl:w-auto"
                  >
                    <Phone className="h-4 w-4" />
                    Call now
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-brand-200 shadow-[0_18px_40px_-16px_rgba(24,88,136,.25)]"
                      : "border-[#e6edf3] hover:border-brand-200 hover:shadow-[0_10px_24px_-14px_rgba(24,88,136,.2)]"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-bold transition-colors duration-300",
                          isOpen
                            ? "bg-brand-600 text-white"
                            : "bg-brand-50 text-brand-600"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={cn(
                          "flex-1 text-[15px] leading-snug font-semibold transition-colors duration-300 sm:text-base",
                          isOpen ? "text-brand-700" : "text-ink"
                        )}
                      >
                        {item.q}
                      </span>

                      {/* Plus turns into a minus */}
                      <span
                        aria-hidden
                        className={cn(
                          "relative mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                          isOpen
                            ? "bg-brand-600 text-white"
                            : "bg-[var(--bg-2)] text-brand-600"
                        )}
                      >
                        <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                        <span
                          className={cn(
                            "absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-300",
                            isOpen ? "scale-y-0" : "scale-y-100"
                          )}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-ink-muted sm:px-6 sm:pb-6 sm:pl-[4.5rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
