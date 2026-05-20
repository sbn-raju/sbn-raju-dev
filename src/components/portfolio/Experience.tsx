import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Sevak Digital Technologies",
    duration: "Jun 2025 — Aug 2025",
    points: [
      "Built a custom ERP system handling student & staff management end-to-end.",
      "Designed scalable services with message-queue based workflows.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "RabbitMQ", "MySQL", "MongoDB"],
  },
  {
    role: "Backend Developer Intern",
    company: "SwasthMind",
    duration: "Feb 2024 — May 2025",
    points: [
      "Developed backend services and dynamic REST APIs powering a Flutter app.",
      "Owned production deployments using Jenkins and SonarQube quality gates.",
    ],
    stack: ["Node.js", "JavaScript", "PostgreSQL", "Jenkins", "SonarQube", "Next.js"],
  },
  {
    role: "Backend Developer (Freelance)",
    company: "Collasyn",
    duration: "Project",
    points: [
      "Built a doctor appointment platform — booking, scheduling, profiles, payments.",
      "Integrated Razorpay for payments and Twilio for SMS notifications.",
    ],
    stack: ["Node.js", "PostgreSQL", "Razorpay", "Twilio"],
  },
];

export const Experience = () => (
  <section id="experience" className="relative px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading index="02" title="experience" subtitle="Where I've been shipping code." />

      <div className="relative ml-4 md:ml-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal relative pl-8 md:pl-12">
              <div className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background animate-pulse-glow" />
              <SpotlightCard className="rounded-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="terminal-border rounded-lg p-6 group">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-mono text-lg md:text-xl font-bold text-foreground">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2 mb-4 list-none">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
