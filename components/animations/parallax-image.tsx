"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  imageClassName?: string;
  scale?: boolean;
  rotate?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = "",
  imageClassName = "",
  scale = false,
  rotate = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Parallax movement
      tl.to(imageRef.current, {
        y: () => window.innerHeight * speed,
        ease: "none",
      });

      // Optional scale effect
      if (scale) {
        tl.to(
          imageRef.current,
          {
            scale: 1.2,
            ease: "none",
          },
          0,
        );
      }

      // Optional rotate effect
      if (rotate) {
        tl.to(
          imageRef.current,
          {
            rotation: 15,
            ease: "none",
          },
          0,
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [speed, scale, rotate]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-center ${imageClassName}`}
      />
    </div>
  );
}
