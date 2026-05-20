import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const email = "ahsanfaisal11221@gmail.com";
const waNumber = "923472655236";

const links = [
  { href: `mailto:${email}`, label: "Email", icon: Mail },
  {
    href: `https://wa.me/${waNumber}?text=${encodeURIComponent(
      "Hi Muhammad — I would like to discuss a marketing project."
    )}`,
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
];

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-8 right-5 z-40 flex flex-col gap-3 md:right-8">
      {links.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-800 shadow-lg shadow-slate-900/10 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-black/40 dark:hover:border-[#CCFF00]/50 dark:hover:text-[#CCFF00]"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
