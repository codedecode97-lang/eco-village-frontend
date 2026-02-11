import { useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface GSAPTextRevealProps {
  children: string;
  className?: string;
  elementType?: ElementType;
  animationType?: "words" | "chars" | "lines";
  delay?: number;
  duration?: number;
}

const GSAPTextReveal = ({
  children,
  className = "",
  elementType = "div",
  animationType = "words",
  delay = 0,
  duration = 1.2,
}: GSAPTextRevealProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      // We need to split text manually in DOM first
      // Note: useGSAP runs AFTER render, so DOM manipulation here is safe but
      // usually better to do simple things.
      // For react, manipulating innerHTML is risky if props change, but ok for static text.

      // Clear current content to avoid duplication on re-runs
      const text = children;
      el.innerHTML = "";

      const targets: HTMLElement[] = [];

      if (animationType === "words") {
        const words = text.split(" ");
        words.forEach((word) => {
          const span = document.createElement("span");
          Object.assign(span.style, {
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            marginRight: "0.25em",
            position: "relative",
          });

          const innerSpan = document.createElement("span");
          innerSpan.innerText = word;
          Object.assign(innerSpan.style, {
            display: "inline-block",
            transform: "translateY(120%) rotate(10deg)", // More dramatic start
            opacity: "0",
            willChange: "transform, opacity",
          });
          innerSpan.classList.add("reveal-text");

          span.appendChild(innerSpan);
          el.appendChild(span);
          targets.push(innerSpan);
        });
      } else {
        // chars
        const chars = text.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          Object.assign(span.style, {
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            position: "relative",
          });

          const innerSpan = document.createElement("span");
          innerSpan.innerText = char === " " ? "\u00A0" : char;
          Object.assign(innerSpan.style, {
            display: "inline-block",
            transform: "translateY(120%)",
            opacity: "0",
          });
          innerSpan.classList.add("reveal-text");

          span.appendChild(innerSpan);
          el.appendChild(span);
          targets.push(innerSpan);
        });
      }

      gsap.to(targets, {
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: duration,
        stagger: 0.04,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: `top ${85}%`,
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        overwrite: "auto",
      });
    },
    {
      scope: containerRef,
      dependencies: [children, animationType, delay, duration],
    },
  );

  const Component = elementType;

  return (
    <Component
      ref={containerRef}
      className={`${className} perspective-[1000px]`}
      style={{ overflow: "hidden" }}
    >
      {/* Intentionally empty, content injected via useGSAP to ensure split text consistency */}
    </Component>
  );
};

export default GSAPTextReveal;
