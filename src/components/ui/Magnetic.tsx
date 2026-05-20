import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Distance in px from the center of the element where effect is triggered
  strength?: number; // Intensity factor of the pull (0 to 1)
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  range = 45,
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      setIsHovering(true);
      // Linear/curved scaling of strength based on distance (closer = stronger pull)
      const pullFactor = (1 - distance / range) * strength;
      setPosition({
        x: distanceX * pullFactor,
        y: distanceY * pullFactor,
      });
    } else {
      if (isHovering) {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, range, strength]);

  // Merge classes and inject style into the single child element
  return React.cloneElement(children, {
    ref,
    onMouseLeave: handleMouseLeave,
    style: {
      ...children.props.style,
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: isHovering
        ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)"
        : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      willChange: "transform",
    },
  });
};
