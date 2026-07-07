import { about } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto grid lg:grid-cols-[0.4fr_0.6fr] gap-14">
        <ScrollReveal>
          <p className="label-mono mb-4">01 &mdash; About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary max-w-sm">
            Security and structure aren&apos;t separate disciplines here.
          </h2>
        </ScrollReveal>

        <div>
          {about.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="text-text-muted leading-relaxed mb-6 max-w-2xl">{p}</p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="label-mono mb-2">{stat.label}</dt>
                  <dd className="font-display text-xl text-text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
