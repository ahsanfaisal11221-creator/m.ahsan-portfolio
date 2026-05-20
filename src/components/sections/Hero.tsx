import { motion } from "motion/react";
import { ArrowRight, BarChart3, Sparkles, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[120px] dark:bg-[#CCFF00]/10" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[110px]" />

      <div className="absolute inset-0 opacity-[0.35] dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:28px_28px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:border-[#CCFF00]/25 dark:bg-[#CCFF00]/10 dark:text-[#CCFF00]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Marketing Specialist
          </motion.span>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl xl:text-[3.35rem]">
            Helping brands grow with{" "}
            <span className="text-gradient">performance marketing</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
            Digital Marketing Specialist focused on Google Ads, Meta Ads, Social Media
            Growth &amp; Lead Generation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2 group">
              Hire me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-outline">
              View portfolio
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-slate-500 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-emerald-600 dark:text-[#CCFF00]" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Data-led
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Conversion-focused
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-[#CCFF00]" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Always optimizing
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:from-slate-900 dark:to-[#050508] dark:shadow-black/50">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_40%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%)]" />
            <img
              src="/m.ahsan.png"
              alt="Muhammad Ahsan — Digital Marketing Specialist"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />

            {/* <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-5 right-5 top-6 rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md dark:border-white/10 dark:bg-black/35"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-[#CCFF00]">
                Live pulse
              </p>
              <p className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">
                Campaign health: strong
              </p>
            </motion.div> */}

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-6 left-5 right-5 rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/10"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">ROAS</p>
                  <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    4.8x
                  </p>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-white/10" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Leads</p>
                  <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    +38%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] border border-emerald-500/15 dark:border-[#CCFF00]/15" />
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.75rem] border border-cyan-500/10" />
        </motion.div>
      </div>
    </section>
  );
}
