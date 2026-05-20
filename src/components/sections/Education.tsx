import { motion } from "motion/react";
import { Award, GraduationCap } from "lucide-react";

const items = [
  {
    title: "BBA-H",
    org: "Iqra University",
    detail: "Business administration foundation with focus on analytical decision-making.",
    icon: GraduationCap,
  },
  {
    title: "Google Ads Certification",
    org: "Enablers Ecommerce",
    detail: "Search and performance fundamentals with practical ecommerce application.",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding border-t border-slate-200/80 bg-slate-50/80 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
            Certifications &amp; education
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Credentials that <span className="text-gradient">back the work</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Formal training plus platform certification — so strategy stays grounded in
            fundamentals and platform best practices.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-card relative overflow-hidden p-8 md:p-10"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-opacity group-hover:opacity-100 dark:bg-[#CCFF00]/10" />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 dark:from-[#CCFF00] dark:to-emerald-500 dark:text-black dark:shadow-[#CCFF00]/15">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {item.org}
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{item.detail}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-500/40 via-slate-200 to-transparent dark:via-white/10" />
              <p className="mt-4 text-xs font-medium text-slate-500">
                Verified learning path · portfolio reference
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
