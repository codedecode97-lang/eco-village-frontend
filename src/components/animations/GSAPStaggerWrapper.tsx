import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface GSAPStaggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  staggerTime?: number;
  duration?: number;
  yOffset?: number;
}

const GSAPStaggerWrapper = ({
  children,
  className = "",
  staggerTime = 0.2,
  duration = 0.8,
  yOffset = 100, // Increased default offset for visibility
}: GSAPStaggerWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      // Select immediate children
      const childrenElements = Array.from(el.children);
      if (childrenElements.length === 0) return;

      // Set initial hidden state so we don't see FOUC
      gsap.set(childrenElements, { opacity: 0, y: yOffset });

      gsap.to(childrenElements, {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: staggerTime,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [staggerTime, duration, yOffset] },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPStaggerWrapper;
