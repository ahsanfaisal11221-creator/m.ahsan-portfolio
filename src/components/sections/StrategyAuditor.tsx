import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Brain, ArrowRight, Loader2 } from "lucide-react";
import Markdown from "react-markdown";

export default function StrategyAuditor() {
  const [industry, setIndustry] = useState("");
  const [goal, setGoal] = useState("leads");
  const [budget, setBudget] = useState("1000");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAudit = async () => {
    if (!industry) return;
    setLoading(true);
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, goal, budget }),
      });
      const data = await response.json();
      setResult(data.strategy);
    } catch (err) {
      console.error(err);
      setResult("Sorry, I encountered an error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-500/5 blur-[120px]" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 font-display">Get a <span className="text-gradient">Preliminary Strategy</span></h2>
          <p className="text-slate-400 text-lg">Input your details and Ahsan's AI engine will generate 3 tactical recommendations for your business.</p>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-2">Industry</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Real Estate"
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 focus:border-blue-500 transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-2">Goal</label>
              <select 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 focus:border-blue-500 outline-none"
              >
                <option value="leads">Generate Leads</option>
                <option value="sales">Increase Sales</option>
                <option value="awareness">Brand Awareness</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-2">Monthly Budget ($)</label>
              <input 
                type="number" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <button 
            onClick={handleAudit}
            disabled={loading || !industry}
            className="w-full btn-primary py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Brain className="w-5 h-5" />
                Analyze My Business
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 pt-12 border-t border-slate-800"
              >
                <div className="prose prose-invert max-w-none text-slate-300">
                  <Markdown>{result}</Markdown>
                </div>
                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-between gap-4">
                  <p className="text-sm text-blue-300 font-medium italic">
                    Note: This is an AI-generated baseline. For a personalized, human-vetted setup...
                  </p>
                  <a href="#contact" className="text-sm font-bold text-blue-400 hover:text-white transition-colors whitespace-nowrap">
                    Contact Ahsan Now →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
