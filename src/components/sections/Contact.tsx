import { motion } from "motion/react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const email = "ahsanfaisal11221@gmail.com";
const phoneDisplay = "03472655236";
const phoneTel = "+923472655236";
const waNumber = "923472655236";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(204,255,0,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
            Let&apos;s connect
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            I&apos;m here to help you{" "}
            <span className="text-gradient">scale with clarity</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-400">
            Share your goals, timelines, and current channels. I will reply with next
            steps and an honest view of what performance marketing can do for you.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 transition hover:border-emerald-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#CCFF00]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-black/30">
                <Mail className="h-5 w-5 text-emerald-600 dark:text-[#CCFF00]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email
                </p>
                <p className="font-medium text-slate-900 dark:text-white">{email}</p>
              </div>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 transition hover:border-emerald-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#CCFF00]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-black/30">
                <Phone className="h-5 w-5 text-emerald-600 dark:text-[#CCFF00]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Phone
                </p>
                <p className="font-medium text-slate-900 dark:text-white">{phoneDisplay}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-black/30">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-[#CCFF00]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Location
                </p>
                <p className="font-medium text-slate-900 dark:text-white">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#CCFF00]/40"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-500/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#CCFF00]/40"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>

          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
              "Hi Muhammad — I'd like to discuss a marketing project."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500 dark:bg-[#CCFF00] dark:text-black dark:shadow-[#CCFF00]/25 dark:hover:bg-[#b8e600]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 dark:border-white/10 dark:text-white dark:focus:border-[#CCFF00]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 dark:border-white/10 dark:text-white dark:focus:border-[#CCFF00]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your business, goals, and timelines..."
                className="w-full resize-none border-0 border-b border-slate-200 bg-transparent py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 dark:border-white/10 dark:text-white dark:focus:border-[#CCFF00]"
              />
            </div>

            <button
              type="submit"
              className="btn-primary flex w-full items-center justify-center gap-2 py-4 text-base group"
            >
              Submit now
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10">
            <iframe
              title="Karachi, Pakistan — map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.0240020072!2d66.8263129!3d25.1932635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d813f%3A0x4e1752ae6dfc61b6!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[1.05] dark:invert-[0.92] dark:hue-rotate-180 dark:contrast-[0.9]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
