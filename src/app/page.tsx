import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Faq from "@/components/Faq";
import {
  AboutPreview,
  BestOption,
  BlogPreview,
  CaseStudies,
  CtaBanner,
  HowItWorks,
  ServiceAreas,
  Testimonials,
} from "@/components/Sections";
import { faqs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <span id="top" aria-hidden />
      <Hero />
      <ServicesCarousel />
      <AboutPreview />
      <HowItWorks />
      <CaseStudies />
      <BestOption />
      <Testimonials />
      <ServiceAreas />
      <Faq items={faqs} alt id="faq" />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
