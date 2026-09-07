import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaBanner } from "@/components/Sections";
import { Section, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/Icons";
import { gallery, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look at how ${site.name} works - client advisory sessions, audit and documentation reviews, compliance planning and the team behind it.`,
  alternates: { canonical: "/gallery" },
};

// Tiles are rendered as designed panels rather than <img> tags so the page
// looks finished before real photography exists. To use photos, add an
// `image` field to the gallery entries in src/data/site.ts and swap the
// panel below for next/image.
const tints = [
  "from-brand-700 to-brand-900",
  "from-brand-600 to-brand-800",
  "from-slate-700 to-brand-900",
  "from-brand-800 to-slate-900",
];

const icons = [
  "consult",
  "audit",
  "cfo",
  "gst",
  "compliance",
  "legal",
  "planning",
  "formation",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside how we work"
        body="Advisory sessions, documentation reviews, compliance planning and the day-to-day of a working consultancy."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Our work"
          title="From first consultation to filed returns"
          body="Every engagement follows the same visible process, so you always know which stage your work is at."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <figure
              key={item.title}
              className={
                // First and last tiles span two columns for a varied grid.
                i === 0 || i === gallery.length - 1
                  ? "group relative sm:col-span-2"
                  : "group relative"
              }
            >
              <div
                className={`relative flex aspect-4/3 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-5 ${
                  tints[i % tints.length]
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(20rem 14rem at 80% 10%, rgba(255,171,31,.28), transparent 60%)",
                  }}
                />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/12 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon
                    name={icons[i % icons.length]}
                    className="h-5 w-5"
                  />
                </span>

                <figcaption className="relative">
                  <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                    {item.category}
                  </span>
                  <p className="mt-2.5 text-base leading-snug font-semibold text-white">
                    {item.title}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Services in the frame"
          title="What each engagement covers"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {services.map((s) => (
            <span
              key={s.slug}
              className="surface flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
            >
              <ServiceIcon name={s.icon} className="h-4 w-4 text-brand-600" />
              {s.title}
            </span>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
