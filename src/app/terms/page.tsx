import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply when you engage ${site.name} for CA, tax, compliance, Virtual CFO or legal drafting services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="1 September 2026"
      path="/terms"
      sections={[
        {
          heading: "Scope of engagement",
          body: [
            `Services are provided by ${site.legalName}, operating as ${site.name}. Each engagement is defined by a written scope covering the services to be delivered, the fees, and the responsibilities of both parties.`,
            "Work outside the agreed scope is quoted separately and begins only after you approve it in writing.",
          ],
        },
        {
          heading: "Client responsibilities",
          body: [
            "Accurate and timely filing depends on the information you provide. You agree to share complete books, invoices, bank statements and supporting documentation, and to inform us promptly of any change in the business that affects compliance.",
            "We are not responsible for penalties, interest or notices arising from information that was incomplete, incorrect or provided after the deadline we communicated.",
          ],
        },
        {
          heading: "Fees and payment",
          body: [
            "Fees are quoted before the engagement begins and are payable as set out in the engagement letter. Statutory fees, government charges and third-party costs are billed at actual and are separate from our professional fees.",
            "Taxes applicable on professional fees are charged as per law.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "All financial and business information shared with us is treated as confidential and is used only to deliver the agreed services. We do not disclose it to third parties except where required by law or regulatory authority.",
          ],
        },
        {
          heading: "Professional standards and limitations",
          body: [
            "Our services are advisory and compliance-oriented and are performed in accordance with applicable professional standards. Advice is based on the law as it stands and on the facts made available to us at the time.",
            "We do not guarantee any particular assessment outcome, refund, approval or departmental decision. Our aggregate liability for any engagement is limited to the professional fees paid for that engagement.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "Either party may terminate an engagement with written notice. Fees for work completed up to the date of termination remain payable, and we will hand over the records and documentation belonging to you.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            `These terms are governed by the laws of India, with jurisdiction in Thane, Maharashtra. For any clarification, contact us at ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
