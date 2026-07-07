import { skills } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="label-mono mb-4">02 &mdash; Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary max-w-lg mb-14">
            The stack, organized by what it&apos;s for.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.06} className="bg-ink dark:bg-ink h-full">
              <div className="h-full p-7 hover:bg-surface/60 transition-colors">
                <h3 className="font-display text-lg text-teal mb-5">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-sm text-text-muted leading-relaxed">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
