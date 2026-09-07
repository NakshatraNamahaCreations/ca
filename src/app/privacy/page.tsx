import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the information you share when requesting a consultation or engaging our services.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 September 2026"
      path="/privacy"
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you submit a consultation request we collect your name, phone number, email address, the service you are interested in and any message you provide.",
            "During an engagement we additionally receive financial and statutory information necessary to deliver the service, such as books of accounts, invoices, bank statements, PAN and GST details, and incorporation documents.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "Contact details are used to respond to your enquiry, schedule a consultation and communicate about the engagement. Financial information is used solely to prepare and file the returns, documents and reports you have engaged us for.",
            "We do not use your information for advertising, and we do not sell or rent it to third parties.",
          ],
        },
        {
          heading: "Confidentiality and sharing",
          body: [
            "Client information is treated as confidential and accessed only by the team members working on your engagement.",
            "Information is submitted to statutory authorities such as the Income Tax Department, GST portal and the Ministry of Corporate Affairs strictly as required to complete your filings, and disclosed otherwise only where the law or a regulatory authority requires it.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Engagement records, filings and supporting documentation are retained for the period required under applicable tax, company law and professional record-keeping obligations. Consultation enquiries that do not lead to an engagement are retained for up to twelve months.",
          ],
        },
        {
          heading: "Security",
          body: [
            "We apply reasonable technical and organisational measures to protect the information in our custody. No method of transmission or storage is completely secure, so please avoid sending sensitive documents over unsecured channels when a secure alternative has been offered.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `You may request access to, correction of, or deletion of your personal information, subject to records we are legally required to retain. Write to us at ${site.email} or call ${site.phone}.`,
          ],
        },
        {
          heading: "Contact",
          body: [
            `${site.legalName}, ${site.address}. Phone: ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
