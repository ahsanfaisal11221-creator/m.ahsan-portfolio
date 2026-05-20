import { motion } from "motion/react";
import { Building2 } from "lucide-react";

type Entry = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
};

const timeline: Entry[] = [
  {
    company: "Guardian FM (UK)",
    role: "Marketing & Operations — Paid Media & Growth",
    period: "Recent",
    location: "United Kingdom · Hybrid / Remote",
    achievements: [
      "Structured paid acquisition tests across service lines with disciplined budget pacing.",
      "Improved reporting clarity for stakeholders with weekly performance snapshots.",
      "Partnered with ops to align campaign messaging with fulfillment capacity.",
    ],
  },
  {
    company: "Servion Soft",
    role: "Digital Marketing & Campaign Operations",
    period: "Previous",
    location: "Enterprise / B2B",
    achievements: [
      "Supported funnel optimization initiatives across demand-gen programs.",
      "Collaborated on creative iterations and landing experience improvements.",
      "Contributed to analytics reviews to reduce wasted spend and improve CPL.",
    ],
  },
  {
    company: "Autodesk",
    role: "Marketing Program Execution",
    period: "Previous",
    location: "Global brand environment",
    achievements: [
      "Worked within structured marketing workflows and cross-functional cadences.",
      "Helped maintain quality and consistency across campaign deliverables.",
      "Supported measurement hygiene for multi-touch programs.",
    ],
  },
  {
    company: "Trilocks",
    role: "Growth & Digital Marketing Support",
    period: "Previous",
    location: "SMB / scaling team",
    achievements: [
      "Assisted with paid social and search experiments tied to lead targets.",
      "Documented learnings from creative and audience tests for faster iteration.",
      "Improved operational handoff between marketing inquiries and sales follow-up.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
          Experience
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Explore my <span className="text-gradient">journey</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A concise timeline of environments where I have delivered marketing impact
          alongside strong operations discipline.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl pl-2">
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-500/50 via-slate-200 to-transparent dark:via-white/10" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className="relative grid grid-cols-[44px_1fr] gap-6 sm:grid-cols-[52px_1fr]"
            >
              <div className="relative flex justify-center pt-1">
                <span className="z-10 mt-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)] dark:border-[#050508] dark:bg-[#CCFF00] dark:shadow-[0_0_0_4px_rgba(204,255,0,0.12)]" />
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <Building2 className="h-3.5 w-3.5 text-emerald-600 dark:text-[#CCFF00]" />
                  {item.period}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {item.company}
                </h3>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.location}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-[#CCFF00]" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
