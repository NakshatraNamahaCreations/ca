import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Faq from "@/components/Faq";
import { CtaBanner, HowItWorks } from "@/components/Sections";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "CA and audit services, business consultancy, Virtual CFO, strategic planning, statutory compliance, income tax, GST, legal drafting and company formation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Smart support for finance, tax, and compliance"
        body="Reliable solutions built for growing businesses. Clear process, timely compliance, and expert guidance that keeps you confident."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Our Services" },
        ]}
      />
      <ServicesCarousel
        eyebrow="What we do"
        title="End-to-end financial and legal solutions"
        body="Nine service lines covering everything from incorporation and monthly filings to Virtual CFO support and legal documentation."
      />
      <HowItWorks />
      <Faq items={faqs} />
      <CtaBanner />
    </>
  );
}
