import { certifications } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="label-mono mb-4">06 &mdash; Certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary max-w-lg mb-14">
            Credentials that back up the stack.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert} delay={i * 0.04}>
              <div className="card-surface rounded-xl p-5 flex items-start gap-3 h-full">
                <BadgeCheck size={18} className="text-teal shrink-0 mt-0.5" />
                <span className="text-sm text-text-primary leading-relaxed">{cert}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
