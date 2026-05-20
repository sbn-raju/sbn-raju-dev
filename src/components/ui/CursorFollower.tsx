import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Position tracking using refs to avoid re-renders at 60/120fps
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor on fine-pointer (desktop) devices
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsHidden(false);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    
    const onMouseLeaveWindow = () => setIsHidden(true);
    const onMouseEnterWindow = () => setIsHidden(false);

    // Highly optimized lerp loop for the outer ring
    const render = () => {
      const ease = 0.15; // Smooth lag coefficient
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(render);
    };

    // Event delegation to capture hover states dynamically
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        
        // Custom text attribute
        const text = interactive.getAttribute("data-cursor-text");
        if (text) {
          setCursorText(text);
          setHoverType("text");
        } else {
          setHoverType("standard");
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor]");
      if (interactive) {
        setIsHovered(false);
        setHoverType(null);
        setCursorText(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-all duration-150 ease-out",
          isClicked && "scale-50",
          isHovered && "bg-accent scale-75"
        )}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/45 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-all duration-300 ease-out flex items-center justify-center bg-transparent",
          isClicked && "scale-90 border-accent/80",
          isHovered && hoverType === "standard" && "scale-[1.8] border-accent bg-accent/5 backdrop-blur-[1px]",
          isHovered && hoverType === "text" && "scale-[2.4] border-primary bg-primary/10 backdrop-blur-[1px] shadow-glow"
        )}
      >
        {isHovered && hoverType === "text" && cursorText && (
          <span className="font-mono text-[7px] font-bold text-primary tracking-widest uppercase animate-fade-in select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
