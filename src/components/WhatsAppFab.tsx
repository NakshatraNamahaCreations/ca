import { site } from "@/data/site";
import { WhatsApp } from "./Icons";

export default function WhatsAppFab() {
  const text = encodeURIComponent(
    `Hi ${site.name}, I need help with a home service.`
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
