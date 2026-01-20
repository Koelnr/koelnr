"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MouseParallaxProps {
  children: React.ReactNode;
  imageSrc: string;
  strength?: number;
  className?: string;
}

export function MouseParallax({
  children,
  imageSrc,
  strength = 20,
  className = "",
}: MouseParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !imageRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement based on mouse position (-1 to 1)
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      // Apply movement with strength multiplier
      gsap.to(imageRef.current, {
        x: xPercent * strength,
        y: yPercent * strength,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background Image with Mouse Parallax */}
      <div
        ref={imageRef}
        className="fixed inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          scale: "1.1", // Slightly larger to prevent edges showing
        }}
      >
        {/* Overlay for better text readability */}
        <div className={`absolute inset-0 bg-background/75`} />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
