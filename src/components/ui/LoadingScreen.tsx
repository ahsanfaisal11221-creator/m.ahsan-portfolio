import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="relative h-14 w-14">
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-white/10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[#CCFF00]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
              />
            </div>
            <div className="text-center">
              <p className="font-display text-lg font-semibold tracking-tight">
                Muhammad Ahsan
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Portfolio
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
