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
        title="GST, tax outsourcing and Virtual CFO"
        body="A specialist Goods and Services Tax practice, a complete tax and compliance function delivered on outsourcing, and a Virtual CFO capability that turns the numbers into decisions."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Our Services" },
        ]}
      />
      <ServicesCarousel
        eyebrow="What we do"
        title="Three practice lines, one calendar"
        body="Indirect tax, direct tax, transfer pricing, payroll and corporate compliance run off a single set of books, so the position taken in a return is the position defended in a notice."
      />
      <HowItWorks />
      <Faq items={faqs} />
      <CtaBanner />
    </>
  );
}
