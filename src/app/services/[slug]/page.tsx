import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { CtaBanner } from "@/components/Sections";
import { ButtonLink, Section } from "@/components/ui";
import {
  ArrowRight,
  Check,
  Phone,
  ServiceIcon,
  Shield,
} from "@/components/Icons";
import { services, site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        body={service.description}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Our Services" },
          { href: `/services/${service.slug}`, label: service.title },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              What this service covers
            </h2>
            <p className="muted mt-3 text-sm leading-relaxed">
              The standard scope of the engagement. Anything outside it is
              scoped and quoted separately before we begin.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[#ece5d9] bg-white p-4 shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_14px_30px_-14px_rgba(29,60,107,.25)]"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent-500/12 text-accent-600 ring-1 ring-accent-500/25">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl bg-brand-700 p-6 shadow-xl shadow-brand-900/20">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Compliance-first, always on time
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    Every engagement runs on a deadline calendar shared with you,
                    so filings are prepared ahead of the due date rather than on
                    it. You are told what is required and by when.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[#ece5d9] bg-white p-6 shadow-[0_18px_44px_-18px_rgba(29,60,107,.28)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-ink">{service.title}</h2>
              <p className="muted mt-1.5 text-sm leading-relaxed">
                {service.short}
              </p>

              <dl className="mt-6 space-y-3 border-t pt-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="muted">Delivered by</dt>
                  <dd className="font-medium">Qualified CAs</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="muted">Coverage</dt>
                  <dd className="font-medium">Thane &middot; Mumbai</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="muted">Working hours</dt>
                  <dd className="text-right text-xs font-medium">
                    Mon &ndash; Sat, 10&ndash;7
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-2.5">
                <ButtonLink href="/contact" size="lg" className="w-full">
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href={site.phoneHref}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Faq
        items={service.faqs}
        eyebrow="Good to know"
        title={`${service.title} questions`}
        alt
      />

      <Section>
        <h2 className="text-2xl font-bold tracking-tight">Other services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-[#ece5d9] bg-white p-5 shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_44px_-16px_rgba(29,60,107,.28)]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-ink">{s.title}</h3>
              <p className="muted mt-1.5 text-sm leading-relaxed">{s.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
