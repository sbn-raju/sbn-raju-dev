import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";

const groups = [
  { title: "languages", items: ["JavaScript", "Java", "C", "C++", "Python", "HTML", "CSS"] },
  { title: "frontend", items: ["React", "Next.js", "Tailwind"] },
  { title: "backend & apis", items: ["Node.js", "Express", "REST", "WebSocket"] },
  { title: "databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "devops & tools", items: ["Git", "GitHub", "Jenkins", "RabbitMQ", "SonarQube"] },
  { title: "ml & data", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"] },
];

export const Skills = () => (
  <section id="skills" className="relative px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading index="03" title="skills" subtitle="The stack I work and ship with." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <SpotlightCard
            key={g.title}
            className="reveal rounded-lg transition-all duration-300 hover:-translate-y-1"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="terminal-border rounded-lg p-6 h-full">
              <h3 className="font-mono text-sm text-primary mb-4">
                <span className="text-muted-foreground">/* </span>
                {g.title}
                <span className="text-muted-foreground"> */</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary/60 text-foreground border border-border hover:border-primary hover:text-primary hover:shadow-glow transition-all cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className="reveal mt-10 grid md:grid-cols-2 gap-5">
        <SpotlightCard className="rounded-lg">
          <div className="terminal-border rounded-lg p-6 h-full">
            <p className="font-mono text-xs text-primary mb-3">// education</p>
            <h4 className="font-mono font-bold text-foreground">B.Tech in Computer Science</h4>
            <p className="text-muted-foreground text-sm mt-1">KL University, Hyderabad</p>
            <p className="font-mono text-xs text-accent mt-2">CGPA: 9.35</p>
          </div>
        </SpotlightCard>
        <SpotlightCard className="rounded-lg">
          <div className="terminal-border rounded-lg p-6 h-full">
            <p className="font-mono text-xs text-primary mb-3">// pre_university</p>
            <h4 className="font-mono font-bold text-foreground">Class XII</h4>
            <p className="text-muted-foreground text-sm mt-1">2022</p>
            <p className="font-mono text-xs text-accent mt-2">85.5%</p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  </section>
);
