import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import Faq from "@/components/Faq";
import {
  AboutPreview,
  BlogPreview,
  CaseStudies,
  CtaBanner,
  HowItWorks,
  Leadership,
  ServiceAreas,
  WhyUs,
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
      <Leadership />
      <HowItWorks />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <ServiceAreas />
      <Faq items={faqs} alt id="faq" />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
