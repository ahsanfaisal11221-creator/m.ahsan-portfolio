import { motion } from "motion/react";
import {
  BarChart3,
  Instagram,
  Megaphone,
  Search,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Google Ads Management",
    description:
      "Search, Performance Max, and YouTube structures built for intent, tracking integrity, and scalable learning budgets.",
    icon: Search,
    cta: "Book a Google Ads review",
  },
  {
    title: "Meta Ads Campaigns",
    description:
      "Prospecting and retargeting systems with creative testing discipline, audience hygiene, and clear downstream KPIs.",
    icon: Instagram,
    cta: "Plan Meta growth",
  },
  {
    title: "Social Media Management",
    description:
      "Editorial rhythm, community care, and paid/organic alignment so your brand stays consistent while performance improves.",
    icon: Share2,
    cta: "See content approach",
  },
  {
    title: "Lead Generation",
    description:
      "Landing experiences, form strategy, and CRM-ready events — fewer junk leads, faster sales follow-up.",
    icon: Megaphone,
    cta: "Improve lead quality",
  },
  {
    title: "Campaign Optimization",
    description:
      "Weekly optimization loops: negatives, bids, creative fatigue checks, and budget re-allocation based on evidence.",
    icon: BarChart3,
    cta: "Optimize existing spend",
  },
  {
    title: "Brand Growth Strategy",
    description:
      "A practical roadmap across channels — positioning, offers, measurement, and a rollout sequence you can execute.",
    icon: Target,
    cta: "Build a growth roadmap",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-[#CCFF00]/8" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
            <Sparkles className="h-3.5 w-3.5" />
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Premium execution across the{" "}
            <span className="text-gradient">full funnel</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Clear scopes, crisp reporting, and conversion-focused creative direction —
            engineered for brands that want accountable growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="group glass-card flex flex-col p-8 transition duration-500 hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/5 dark:hover:border-[#CCFF00]/25 dark:hover:shadow-[#CCFF00]/8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 dark:from-[#CCFF00] dark:to-emerald-500 dark:text-black dark:shadow-[#CCFF00]/20">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-[#CCFF00]">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/60 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#CCFF00] dark:hover:text-black"
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
