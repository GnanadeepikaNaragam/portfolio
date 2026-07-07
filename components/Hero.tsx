"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { IntegrityLog } from "./IntegrityLog";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 container-px">
      <div className="max-w-content mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="label-mono mb-5">
            {profile.status}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-hero-sm sm:text-hero font-medium text-text-primary text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-text-muted leading-relaxed">
            {profile.tagline} Two of my projects so far: SFTS, which encrypts and verifies files in transit, and
            WSMPA, which monitors Windows processes in real time.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-teal text-on-accent font-medium px-5 py-3 rounded-full hover:bg-teal-soft transition-colors"
            >
              See verified work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-text-primary hover:border-teal/50 hover:text-teal transition-colors font-medium"
            >
              <Download size={16} />
              Download resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-14 divider-log">
            <span>scroll to verify</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:mt-8"
        >
          <IntegrityLog />
        </motion.div>
      </div>
    </section>
  );
}
