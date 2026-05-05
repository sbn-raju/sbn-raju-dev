import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "Customer Churn Prediction",
    tag: "machine_learning",
    desc: "Classification model predicting customer churn using Logistic Regression and Random Forest. Achieved ~85% accuracy, evaluated with Precision, Recall and F1-score.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/sbn-raju",
  },
  {
    name: "Hotel Price Prediction",
    tag: "regression",
    desc: "Regression pipeline using Linear Regression, Random Forest, and XGBoost to predict hotel prices. Tuned via cross-validation for a high R² score.",
    stack: ["Python", "NumPy", "Pandas", "XGBoost", "Matplotlib"],
    link: "https://github.com/sbn-raju",
  },
  {
    name: "Doctor Appointment Platform",
    tag: "full_stack",
    desc: "End-to-end appointment booking system for clinics — scheduling, profiles, Razorpay payments and Twilio-powered SMS reminders.",
    stack: ["Node.js", "PostgreSQL", "Razorpay", "Twilio"],
    link: "https://github.com/sbn-raju",
  },
  {
    name: "Custom ERP System",
    tag: "enterprise",
    desc: "Modular ERP for student & staff management built during internship. Designed event-driven workflows and a clean React admin layer.",
    stack: ["Node.js", "React", "PostgreSQL", "RabbitMQ"],
    link: "https://github.com/sbn-raju",
  },
];

export const Projects = () => (
  <section id="projects" className="relative px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading index="04" title="projects" subtitle="Selected work — APIs, ML, and full stack systems." />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="reveal group terminal-border rounded-lg p-6 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-mono text-xs text-primary mb-1">// {p.tag}</p>
                <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${p.name} on GitHub`}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit"
            >
              view source <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
