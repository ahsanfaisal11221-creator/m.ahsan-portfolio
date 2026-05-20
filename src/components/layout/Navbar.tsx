import { motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/5 dark:bg-[#050508]/75">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Muhammad<span className="text-gradient"> Ahsan</span>
        </motion.a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 transition hover:border-emerald-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary py-2.5 text-sm"
          >
            Hire me
          </motion.a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-b border-slate-200 bg-white/95 px-6 py-8 dark:border-white/5 dark:bg-[#050508]/95 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 dark:text-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
              Hire me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
