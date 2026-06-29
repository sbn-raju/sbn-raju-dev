import { useEffect, useState } from "react";
import { Magnetic } from "../ui/Magnetic";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleScroll(e, "hero")} className="font-mono text-sm font-bold tracking-tight">
          <span className="text-primary">$</span> sbn<span className="text-primary">.</span>raju
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l, i) => (
            <li key={l.id}>
              <Magnetic range={35} strength={0.25}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleScroll(e, l.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                >
                  <span className="text-primary/60 mr-1">0{i + 1}.</span>
                  {l.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>
        <Magnetic range={40} strength={0.3}>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hidden md:inline-flex font-mono text-sm px-4 py-2 border border-primary/40 text-primary rounded-md hover:bg-primary/10 hover:border-primary transition-all"
          >
            let's talk →
          </a>
        </Magnetic>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-slide-down">
          <ul className="flex flex-col p-6 gap-4 font-mono">
            {links.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    setOpen(false);
                    handleScroll(e, l.id);
                  }}
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="text-primary/60 mr-2">0{i + 1}.</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
