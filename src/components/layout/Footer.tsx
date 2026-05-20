import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/90 dark:border-white/5 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Muhammad <span className="text-gradient">Ahsan</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Digital Marketing Specialist focused on performance channels, measurable
              growth, and dependable client communication.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-slate-200 px-3 py-1 font-medium text-slate-700 transition hover:border-emerald-500/40 hover:text-emerald-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-[#CCFF00]/40 dark:hover:text-[#CCFF00]"
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Quick access
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-[#CCFF00]" />
                <a href="tel:+923472655236" className="hover:text-slate-900 dark:hover:text-white">
                  03472655236
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-[#CCFF00]" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 dark:border-white/5 md:flex-row">
          <p>© {new Date().getFullYear()} Muhammad Ahsan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
