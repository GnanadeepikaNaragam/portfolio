import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <p className="label-mono mb-4">03 &mdash; Selected Work</p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary max-w-xl mb-4">
            Every project here is a system you can check the receipts on.
          </h2>
          <p className="text-text-muted max-w-xl mb-14">
            Expand any card for the problem, approach, challenges, and outcome. Source is linked where public.
          </p>
        </ScrollReveal>

        <div className="space-y-5 mb-16">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="label-mono mb-6">Also built</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} index={featured.length + i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
