import { SectionHeading } from "./SectionHeading";

export const About = () => (
  <section id="about" className="relative px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading index="01" title="about_me" />
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 items-start">
        <div className="reveal space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            Hi, I'm <span className="text-foreground font-semibold">SBN Raju</span> — a developer
            who genuinely loves the part of an app that nobody sees. Schemas, queues, async flows,
            clean APIs — that's my playground.
          </p>
          <p>
            I'm currently completing my{" "}
            <span className="text-primary">B.Tech in Computer Science</span> at{" "}
            <span className="text-foreground">KL University, Hyderabad</span> (CGPA 9.35), while
            shipping production code across internships and freelance projects — from healthcare
            backends to full ERP systems.
          </p>
          <p>
            My toolkit centers on <span className="text-accent">Node.js</span>,{" "}
            <span className="text-accent">PostgreSQL</span>, and <span className="text-accent">React</span>,
            with a growing interest in machine learning and data-driven systems.
          </p>
        </div>

        <div className="reveal terminal-border rounded-lg p-6 font-mono text-sm space-y-3">
          <p className="text-primary mb-2">// quick_stats.ts</p>
          {[
            ["years_coding", "4+"],
            ["projects_shipped", "10+"],
            ["coffee_per_day", "∞"],
            ["cgpa", "9.35"],
            ["location", "'Hyderabad'"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted-foreground">{k}:</span>
              <span className="text-accent">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
