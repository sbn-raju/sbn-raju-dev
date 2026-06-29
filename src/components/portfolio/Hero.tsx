import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "API Architect",
  "Problem Solver",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s ease",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Rotate scaling (up to max 7 degrees for subtle effect)
    const rotateX = -(y / (box.height / 2)) * 7; 
    const rotateY = (x / (box.width / 2)) * 7;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease",
    });
  };

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <p className="font-mono text-sm text-primary tracking-widest">
            <span className="text-muted-foreground">$</span> whoami
          </p>

          <h1 className="font-mono font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground glow-text">
              SBN
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-gradient">
              RAJU<span className="text-primary">.</span>
            </span>
          </h1>

          <div className="font-mono text-xl md:text-2xl text-muted-foreground h-8">
            <span className="text-primary">&gt;</span> <span className="cursor-blink text-foreground">{text}</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Backend-leaning full stack developer from{" "}
            <span className="text-accent font-medium">Hyderabad, India</span>, building
            scalable APIs, ERP platforms, and production-grade web applications.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:shadow-glow transition-all duration-300 animate-pulse-glow"
              data-cursor-text="scroll"
            >
              view_projects()
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded-md hover:border-primary hover:text-primary transition-all"
              data-cursor-text="chat"
            >
              get_in_touch()
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <Magnetic>
              <a href="https://github.com/sbn-raju" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-cursor-text="github">
                <Github className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/sbnraju/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-cursor-text="linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:simhardgaraju@gmail.com" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-cursor-text="email">
                <Mail className="w-5 h-5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Terminal with 3D Mouse Tilt */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
          className="terminal-border rounded-lg overflow-hidden shadow-card animate-fade-in"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/sbn-raju — zsh</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2 leading-relaxed">
            <p><span className="text-primary">$</span> cat about.json</p>
            <pre className="text-muted-foreground whitespace-pre-wrap">{`{
  "name": "SBN Raju",
  "role": "Full Stack & Backend Dev",
  "location": "Hyderabad, IN",
  "education": "B.Tech CSE @ KLU",
  "cgpa": 9.35,
  "stack": ["Node.js", "React",
           "PostgreSQL", "Next.js"],
  "open_to": "opportunities ✨"
}`}</pre>
            <p><span className="text-primary">$</span> <span className="cursor-blink" /></p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-float">
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
