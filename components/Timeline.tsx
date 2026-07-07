import { experience, education, achievements } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function Timeline() {
  return (
    <section id="experience" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <p className="label-mono mb-4">04 &mdash; Experience & Education</p>
          </ScrollReveal>

          <div className="space-y-8 mb-14">
            {experience.map((item, i) => (
              <ScrollReveal key={item.role} delay={i * 0.06}>
                <div className="divider-log mb-3">
                  <span>{item.org}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">{item.role}</h3>
                {item.points.map((p, j) => (
                  <p key={j} className="text-sm text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-8">
            {education.map((item, i) => (
              <ScrollReveal key={item.degree} delay={i * 0.06}>
                <div className="divider-log mb-3">
                  <span>{item.period}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">{item.degree}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal>
            <p className="label-mono mb-4">05 &mdash; Achievements</p>
          </ScrollReveal>
          <div className="space-y-7">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.06} className="card-surface rounded-xl p-6">
                <h3 className="font-display text-base text-teal mb-2">{a.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{a.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
