import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

type Props = {
  label: string;
  percent: number;
  active: boolean;
};

export default function SkillBar({ label, percent, active }: Props) {
  const progress = useSpring(0, { stiffness: 80, damping: 28 });

  useEffect(() => {
    progress.set(active ? percent : 0);
  }, [active, percent, progress]);

  const width = useTransform(progress, (v) => `${Math.min(100, Math.max(0, v))}%`);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">{label}</span>
        <span className="tabular-nums text-slate-500 dark:text-slate-400">{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-[#CCFF00] dark:to-emerald-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}
