/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/layout/Navbar";
import FloatingSocial from "./components/layout/FloatingSocial";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen bg-slate-50 pb-24 text-slate-900 dark:bg-[#050508] dark:text-slate-100 md:pb-16">
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 dark:from-[#CCFF00] dark:via-emerald-400 dark:to-cyan-300"
        style={{ scaleX }}
        aria-hidden
      />

      <Navbar />
      <FloatingSocial />

      <Hero />
      <Stats />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Testimonials />
      <Contact />

      <Footer />
    </main>
  );
}
