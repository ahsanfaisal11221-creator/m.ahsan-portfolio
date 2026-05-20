import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const slides = [
  {
    name: "Sarah M.",
    role: "Founder, D2C skincare",
    text: "Ahsan rebuilt our paid social structure and made reporting actually usable for weekly decisions. CPL stabilized within weeks.",
  },
  {
    name: "James R.",
    role: "Operations Director, UK services",
    text: "Strong communicator — bridges marketing and ops. We finally had one source of truth for lead quality and spend pacing.",
  },
  {
    name: "Ayesha K.",
    role: "Marketing Manager, SaaS",
    text: "Clear testing roadmap for Google Ads. Creative iterations were documented and tied to measurable lift, not opinions.",
  },
  {
    name: "Daniel T.",
    role: "Agency partner",
    text: "Reliable execution under tight deadlines. Muhammad brings senior-level thinking without the senior-level ego.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-slate-200/80 bg-slate-100/40 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            What partners <span className="text-gradient">say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Placeholder client reviews — swap with verified testimonials and logos when
            available.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-1 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[1.75rem] bg-slate-50 px-8 py-12 text-center dark:bg-black/40 md:px-16 md:py-14"
              >
                <Quote className="mx-auto h-10 w-10 text-emerald-500/30 dark:text-[#CCFF00]/35" />
                <p className="mx-auto mt-6 max-w-2xl font-display text-lg leading-relaxed text-slate-800 dark:text-slate-100 md:text-xl">
                  “{slides[index].text}”
                </p>
                <div className="mt-8">
                  <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {slides[index].name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {slides[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-emerald-500/40 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#CCFF00]/40 dark:hover:text-[#CCFF00]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-emerald-500 dark:bg-[#CCFF00]"
                      : "w-2 bg-slate-300 dark:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-emerald-500/40 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#CCFF00]/40 dark:hover:text-[#CCFF00]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
