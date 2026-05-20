import { motion } from "motion/react";
const steps = [
  {
    number: "01",
    title: "Deep Audit",
    description: "I analyze your current accounts, competitor strategies, and target audience to find low-hanging fruit and long-term opportunities."
  },
  {
    number: "02",
    title: "Strategic Setup",
    description: "Creation of professional tracking, pixel installations, and high-converting ad structures tailored to your specific business goals."
  },
  {
    number: "03",
    title: "Optimization",
    description: "Continuous testing of creative elements, bidding strategies, and audience segments to lower CPA and maximize efficiency."
  },
  {
    number: "04",
    title: "Scale & Grow",
    description: "Once we find the winning combinations, we scale the budget and expand to new platforms to drive massive growth."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic-small font-display">
              My Tactical <span className="text-emerald-500">Blueprint</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Effective advertising isn't about clicking buttons—it's about a consistent, data-driven process that reduces risk and increases profitability.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-widest text-slate-300">Active Optimizations</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-black text-slate-800/80 mb-6 group-hover:text-emerald-500/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[45px] -right-4 w-8 h-[1px] bg-slate-800" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
