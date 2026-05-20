import { motion } from "motion/react";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { label: "Ad spend guided", value: 450, suffix: "k+", prefix: "$", decimals: 0 },
  { label: "Leads influenced", value: 12, suffix: "k+", decimals: 0 },
  { label: "Avg. ROAS lift", value: 4.8, suffix: "x", decimals: 1 },
];

export default function Stats() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-slate-200/80 bg-white/50 py-16 dark:border-white/5 dark:bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-12 lg:px-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              <AnimatedCounter
                value={s.value}
                prefix={s.prefix ?? ""}
                suffix={s.suffix}
                decimals={s.decimals}
                active={inView}
              />
            </div>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
