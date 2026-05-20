import { motion } from "motion/react";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import SkillBar from "../ui/SkillBar";

const skills = [
  { label: "Google Ads", percent: 94 },
  { label: "Meta Ads", percent: 92 },
  { label: "Social Media Marketing", percent: 90 },
  { label: "Performance Marketing", percent: 93 },
  { label: "Campaign Analytics", percent: 91 },
  { label: "Content Creation", percent: 88 },
  { label: "Client Communication", percent: 95 },
];

export default function Skills() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding border-y border-slate-200/80 bg-slate-100/40 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
            Skills
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Depth where it{" "}
            <span className="text-gradient">drives outcomes</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-400">
            Platform fluency plus reporting rigor — so every test has a hypothesis,
            every funnel has a KPI, and every optimization has a paper trail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="glass-card space-y-6 p-8 md:p-10"
        >
          {skills.map((s) => (
            <SkillBar
              key={s.label}
              label={s.label}
              percent={s.percent}
              active={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
