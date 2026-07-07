"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/data";

export function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-surface rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
      >
        <span className="font-mono text-xs text-text-dim shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl sm:text-2xl text-text-primary">{project.name}</h3>
          <p className="text-text-muted mt-2">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[0.65rem] uppercase tracking-wide text-teal border border-teal/25 rounded-full px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-text-muted transition-transform duration-300 ${open ? "rotate-180 text-teal" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 sm:px-8 pb-8 pt-2 border-t border-border grid md:grid-cols-2 gap-8">
              <div>
                <p className="label-mono mb-2">Problem</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{project.problem}</p>

                <p className="label-mono mb-2">Approach</p>
                <ul className="space-y-2">
                  {project.approach.map((a, i) => (
                    <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-teal">&rsaquo;</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-mono mb-2">Challenges</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{project.challenges}</p>

                <p className="label-mono mb-2">Outcome</p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{project.outcome}</p>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-primary hover:text-teal transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-primary hover:text-teal transition-colors"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
