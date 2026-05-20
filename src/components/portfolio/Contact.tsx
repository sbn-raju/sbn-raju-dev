import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Magnetic } from "../ui/Magnetic";

const channels = [
  { icon: Mail, label: "simhardgaraju@gmail.com", href: "mailto:simhardgaraju@gmail.com" },
  { icon: Phone, label: "+91 9030984194", href: "tel:+919030984194" },
  { icon: Github, label: "github.com/sbn-raju", href: "https://github.com/sbn-raju" },
  { icon: Linkedin, label: "linkedin.com/in/sbnraju", href: "https://www.linkedin.com/in/sbnraju/" },
];

export const Contact = () => (
  <section id="contact" className="relative px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading index="05" title="contact" />

      <div className="reveal space-y-6">
        <h3 className="font-mono text-3xl md:text-5xl font-extrabold text-gradient">
          let's build something.
        </h3>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          I'm currently open to internships, freelance backends, and full-time roles.
          If you've got an interesting problem — let's talk.
        </p>

        <Magnetic>
          <a
            href="mailto:simhardgaraju@gmail.com"
            className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-cursor-text="send"
          >
            <Mail className="w-4 h-4" />
            say_hello()
          </a>
        </Magnetic>

        <div className="grid sm:grid-cols-2 gap-3 mt-12 text-left">
          {channels.map((c) => (
            <SpotlightCard key={c.label} className="rounded-lg">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="terminal-border rounded-lg p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-all group h-full"
              >
                <c.icon className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                  {c.label}
                </span>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>

    <footer className="mt-24 border-t border-border pt-8 text-center font-mono text-xs text-muted-foreground">
      <p>
        designed & built with <span className="text-primary">♥</span> by SBN Raju · © 2026
      </p>
    </footer>
  </section>
);
