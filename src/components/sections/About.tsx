import { motion } from "motion/react";
import { CheckCircle2, Sparkles } from "lucide-react";

const highlights = [
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Campaign Optimization",
  "Lead Generation",
  "Operations Management",
];

const brands = ["Guardian FM (UK)", "Servion Soft", "Autodesk", "Trilocks"];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-[#CCFF00]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-100 to-white shadow-2xl dark:border-white/10 dark:from-slate-900 dark:to-slate-950 dark:shadow-black/50 lg:mx-0">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_45%)]" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Muhammad Ahsan — marketing professional at work (placeholder)"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md dark:bg-black/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-[#CCFF00]">
                About
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">
                Marketing &amp; Operations Executive
              </p>
            </div>
            <span className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 border-b-4 border-l-4 border-emerald-500 dark:border-[#CCFF00]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-[#CCFF00]/25 dark:bg-[#CCFF00]/10 dark:text-[#CCFF00]">
            <Sparkles className="h-3.5 w-3.5" />
            About me
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Trusted execution across{" "}
            <span className="text-gradient">paid media &amp; growth</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I am Muhammad Ahsan, a Marketing &amp; Operations Executive who builds
            predictable acquisition systems. I combine disciplined campaign
            structure, creative testing, and analytics-backed decisions to turn ad
            spend into pipeline and revenue.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            I have contributed to initiatives and programs alongside teams at{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Guardian FM (UK)
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Servion Soft
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Autodesk
            </span>
            , and{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Trilocks
            </span>{" "}
            — aligning marketing execution with operational realities so launches
            stay fast, compliant, and measurable.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-[#CCFF00]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              Brands &amp; environments
            </p>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire me
            </a>
            <a href="#portfolio" className="btn-outline">
              View portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
