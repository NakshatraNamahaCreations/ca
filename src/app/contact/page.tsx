import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import ConsultationForm from "@/components/ConsultationForm";
import { Section } from "@/components/ui";
import { Check, Clock, MapPin, Phone, WhatsApp } from "@/components/Icons";
import { areas, assurances, faqs, site, workingHours } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phone} or send a consultation request. Radiant Company Services, ${site.address}. Open ${site.hours}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const waText = encodeURIComponent(
    `Hi ${site.name}, I would like a consultation.`
  );

  const channels = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
      note: "Fastest way to reach our consultants",
    },
    {
      icon: <WhatsApp className="h-5 w-5" />,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${site.whatsapp}?text=${waText}`,
      note: "Send documents or ask a quick question",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Need more clarity?"
        body="Share your requirement and our experts will guide you with the right compliance, tax, and legal plan."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Reach us</h2>

            <div className="mt-7 space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="surface group flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-lg"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="muted block text-xs font-semibold uppercase">
                      {c.label}
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold break-words">
                      {c.value}
                    </span>
                    <span className="muted mt-1 block text-xs leading-relaxed">
                      {c.note}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="surface mt-6 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <h3 className="text-sm font-semibold">Address</h3>
                  <p className="muted mt-1.5 text-sm leading-relaxed">
                    {site.address}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t pt-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div className="w-full">
                  <h3 className="text-sm font-semibold">Working Hours</h3>
                  <ul className="mt-2.5 space-y-1.5">
                    {workingHours.map((h) => (
                      <li
                        key={h.day}
                        className="muted flex items-center justify-between gap-4 text-sm"
                      >
                        <span>{h.day}</span>
                        <span className="text-xs font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="surface mt-6 rounded-2xl p-5">
              <h3 className="text-sm font-semibold">We are active in</h3>
              <p className="muted mt-2.5 text-sm leading-relaxed">
                {areas.join(", ")}.
              </p>
              <ul className="mt-4 space-y-2.5 border-t pt-4">
                {assurances.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent-500/15 text-accent-600">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className="muted">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Request a Consultation
            </h2>
            <p className="muted mt-3 text-sm leading-relaxed">
              Tell us what you need help with and our team will get back to you
              during working hours.
            </p>
            <div className="mt-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </Section>

      <Faq items={faqs} alt />
    </>
  );
}
