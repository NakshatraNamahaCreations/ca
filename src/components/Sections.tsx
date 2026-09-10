import Image from "next/image";
import Link from "next/link";
import ctaImage from "@/../public/media/cta.jpg";
import aboutMain from "@/../public/media/about/main.jpg";
import aboutInset from "@/../public/media/about/inset.jpg";
import coverageImage from "@/../public/media/coverage.jpg";
import {
  aboutIntro,
  areas,
  assurances,
  caseStudies,
  highlights,
  posts,
  site,
  stats,
  testimonials,
} from "@/data/site";
import { ButtonLink, Section, SectionHeading } from "./ui";
import { ArrowRight, Check, MapPin, Phone, Shield } from "./Icons";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 24rem at 0% 0%, rgba(29,60,107,.06), transparent 60%), radial-gradient(28rem 18rem at 100% 92%, rgba(195,154,69,.06), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
              About {site.name}
            </span>
            <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
              Financial and legal support built for growing businesses
            </h2>
            <span
              aria-hidden
              className="mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-700 via-accent-500 to-accent-300"
            />

            <p className="mt-7 text-base leading-relaxed text-pretty text-ink-muted">
              {aboutIntro}
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-accent-500/12 text-accent-600 ring-1 ring-accent-500/20">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/about" size="lg">
                Know about us
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Image composition */}
          <div className="relative lg:pl-6">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/20 ring-1 ring-black/5">
              <Image
                src={aboutMain}
                alt="Our consultants reviewing client documents"
                placeholder="blur"
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="aspect-4/5 w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,13,28,.42) 0%, transparent 45%)",
                }}
              />
            </div>

            {/* Overlapping inset photo */}
            <div className="absolute -bottom-8 -left-2 hidden overflow-hidden rounded-2xl shadow-xl shadow-brand-900/25 ring-4 ring-white sm:block lg:-left-8">
              <Image
                src={aboutInset}
                alt=""
                placeholder="blur"
                sizes="11rem"
                className="h-40 w-40 object-cover lg:h-44 lg:w-44"
              />
            </div>

            {/* Floating trust card */}
            <div className="absolute -top-5 -right-2 max-w-[15rem] rounded-2xl bg-brand-700 p-5 shadow-xl shadow-brand-900/30 lg:-right-6">
              <Shield className="h-6 w-6 text-accent-400" />
              <h3 className="mt-3 text-sm font-bold text-white">
                Professionalism, Trust and Quality
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-100">
                The foundation we work on, at a competitive cost.
              </p>
            </div>
          </div>
        </div>

        {/* Stats rail */}
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#ece5d9] ring-1 ring-[#ece5d9] sm:mt-24 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white px-6 py-8 text-center transition-colors hover:bg-brand-50"
            >
              <dt className="text-3xl font-bold text-brand-600 sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-xs tracking-wide text-ink-muted uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// The process block is an animated client component; re-exported here so pages
// that already import { HowItWorks } from "./Sections" keep working.
export { default as HowItWorks } from "./ProcessSteps";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 22rem at 100% 0%, rgba(29,60,107,.06), transparent 62%), radial-gradient(30rem 18rem at 0% 100%, rgba(195,154,69,.05), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
            Case studies
          </span>
          <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
            Real outcomes delivered with clarity and compliance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-ink-muted">
            Explore how {site.name} supports businesses with structured finance,
            accurate filings, and strong compliance systems.
          </p>
          <span
            aria-hidden
            className="mx-auto mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-700 via-accent-500 to-accent-300"
          />
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article
              key={c.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ece5d9] bg-white shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_44px_-14px_rgba(29,60,107,.28)]"
            >
              {/* Image with the headline sitting on it */}
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,13,28,.92) 0%, rgba(6,13,28,.55) 42%, rgba(6,13,28,.18) 72%, rgba(6,13,28,.30) 100%)",
                  }}
                />

                <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-wide text-brand-700 uppercase shadow-sm backdrop-blur-sm">
                    {c.category}
                  </span>
                  <span className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                    {c.client}
                  </span>
                </div>

                <h3 className="absolute right-5 bottom-5 left-5 text-lg leading-snug font-bold text-balance text-white">
                  {c.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-[#f2ece1] pt-5">
                  {c.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2.5 text-sm font-medium text-ink"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent-500/12 text-accent-600 ring-1 ring-accent-500/20">
                        <Check className="h-3 w-3" />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-[#ece5d9] bg-[var(--bg-2)] p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-ink">
              Want similar results for your business?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
              Get support for tax filing, compliance, Virtual CFO, and business
              planning with a clear process and timely delivery.
            </p>
          </div>
          <ButtonLink href="/contact" size="lg" className="shrink-0">
            Book a consultation
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

// "We're the best option for your finances" - re-exported so the pages that
// import { Testimonials } from "./Sections" keep working.
export { default as Testimonials } from "./BestOption";

export function BlogPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 22rem at 100% 0%, rgba(29,60,107,.06), transparent 62%), radial-gradient(30rem 18rem at 0% 100%, rgba(195,154,69,.05), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
              Insights
            </span>
            <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
              Stay updated with the latest in the industry
            </h2>
            <span
              aria-hidden
              className="mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-700 via-accent-500 to-accent-300"
            />
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Practical notes on tax, GST and compliance from the team that files
            them every month.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ece5d9] bg-white shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_44px_-14px_rgba(29,60,107,.28)]"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,22,45,.62) 0%, rgba(10,22,45,.12) 45%, transparent 75%)",
                  }}
                />

                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-wide text-brand-700 uppercase shadow-sm backdrop-blur-sm">
                  {p.tag}
                </span>

                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-[11px] font-medium text-white/85">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg leading-snug font-semibold text-balance text-ink transition-colors group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {p.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-2.5 border-t border-[#f2ece1] pt-5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-[11px] font-bold text-brand-600">
                    R
                  </span>
                  <span className="text-xs font-medium text-ink-muted">
                    by {p.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreas() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Mumbai skyline at night */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={coverageImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,13,28,.80) 0%, rgba(10,22,45,.60) 45%, rgba(6,13,28,.84) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45rem 26rem at 50% 0%, rgba(29,60,107,.35), transparent 62%)",
          }}
        />
      </div>

      <div className="container-x relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-400 uppercase">
            Coverage
          </span>
          <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-white sm:text-[2.6rem]">
            We are active in
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-white/70">
            Trusted CA and financial consultancy services across the Mumbai
            metropolitan region.
          </p>
          <span
            aria-hidden
            className="mx-auto mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-300 via-accent-400 to-accent-200"
          />
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <li key={area}>
              <span className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/18">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-accent-400 ring-1 ring-white/20 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-ink">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <span className="text-base font-semibold text-white">
                  {area}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-white/60">
          Working remotely with clients elsewhere in India?{" "}
          <Link
            href="/contact"
            className="font-semibold text-white underline decoration-accent-500 decoration-2 underline-offset-4 transition-colors hover:text-accent-400"
          >
            Get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      {/* Full-bleed still lifted from the banner video */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={ctaImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        {/* Scrim: heavy on the left so the card always has contrast behind it */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,22,45,.80) 0%, rgba(10,22,45,.52) 42%, rgba(10,22,45,.28) 72%, rgba(20,44,82,.34) 100%)",
          }}
        />
      </div>

      <div className="container-x py-16 sm:py-24 lg:py-28">
        <div className="relative max-w-xl overflow-hidden rounded-3xl bg-brand-50/95 p-8 shadow-2xl shadow-black/25 ring-1 ring-white/60 backdrop-blur-sm sm:p-11">
          {/* Soft brand watermark, echoing the reference card */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-12 h-52 w-52 rounded-full bg-accent-500/10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-4 h-40 w-40 rounded-full bg-brand-600/8"
          />

          <div className="relative">
            <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
              Get started
            </span>

            <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
              Your goals, our plan
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-ink-muted">
              Trusted CA and financial consultancy in Thane and Mumbai. Share
              your requirement and our experts will guide you with the right
              compliance, tax, and legal plan.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-600 py-3.5 pr-3.5 pl-7 text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30"
              >
                Contact us
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-500 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-brand-200/70 pt-6">
              {assurances.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 text-xs font-medium text-ink-muted"
                >
                  <Check className="h-3.5 w-3.5 text-accent-600" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
