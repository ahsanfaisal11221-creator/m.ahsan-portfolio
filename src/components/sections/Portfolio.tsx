import { motion } from "motion/react";
import { ArrowUpRight, LineChart, MousePointerClick, Share2 } from "lucide-react";

const studies = [
  {
    title: "Ecommerce ROAS lift",
    client: "Retail · Meta + Google",
    metric: "+42%",
    metricLabel: "ROAS vs baseline",
    blurb: "Restructured catalog campaigns, tightened audience exclusions, and introduced a creative testing cadence.",
    icon: LineChart,
    bars: [42, 58, 63, 71, 88, 94],
  },
  {
    title: "Lead volume acceleration",
    client: "B2B services",
    metric: "+185%",
    metricLabel: "qualified leads (90 days)",
    blurb: "Search intent clusters, dedicated landing variants, and CRM-ready conversion tracking.",
    icon: MousePointerClick,
    bars: [30, 44, 52, 68, 79, 92],
  },
  {
    title: "Social engagement growth",
    client: "Brand awareness",
    metric: "+3.1×",
    metricLabel: "avg. engagement rate",
    blurb: "Hook-led creatives, comment moderation playbooks, and community growth experiments.",
    icon: Share2,
    bars: [35, 48, 55, 62, 74, 81],
  },
  {
    title: "Google Ads efficiency",
    client: "Local services",
    metric: "−28%",
    metricLabel: "cost per lead",
    blurb: "Negative keyword mining, geo bid adjustments, and ad schedule optimization by intent windows.",
    icon: ArrowUpRight,
    bars: [55, 52, 48, 44, 38, 33],
  },
];

function MiniChart({ values }: { values: number[] }) {
  return (
    <div className="mt-6 flex h-24 items-end gap-1.5">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600/20 to-emerald-500/80 dark:from-[#CCFF00]/15 dark:to-[#CCFF00]/90"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
              Portfolio / case studies
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Sample outcomes in an{" "}
              <span className="text-gradient">analytics-first</span> style
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Illustrative case study cards — structured the way I report to clients:
              clear KPI, narrative, and trend visualization.
            </p>
          </div>
          <a href="#contact" className="btn-outline self-start md:self-auto">
            Discuss a real engagement
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {studies.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group glass-card flex flex-col p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {c.client}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-[#CCFF00]">
                  <c.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-black/30">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Primary KPI
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">
                    {c.metric}
                  </p>
                </div>
                <div className="flex items-end justify-end text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{c.metricLabel}</p>
                </div>
              </div>

              <MiniChart values={c.bars} />

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {c.blurb}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-[#CCFF00]">
                View narrative
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
