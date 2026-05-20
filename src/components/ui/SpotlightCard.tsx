import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // HSL glow color or custom rgba
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  glowColor = "rgba(152, 237, 169, 0.12)",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Dynamic Background Spotlight Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 will-change-transform z-0"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Dynamic Border Spotlight Glow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 rounded-[inherit] border border-transparent"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, rgba(152, 237, 169, 0.25), transparent 70%)`,
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Inner relative container to keep content on top */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
