import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextMarqueeProps {
  text: string;
  className?: string;
  speed?: number; // duration for one loop
  direction?: "left" | "right";
}

const TextMarquee = ({
  text,
  className = "",
  speed = 10,
  direction = "left",
}: TextMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    // Clone text for seamless loop
    const clone = textEl.cloneNode(true);
    container.appendChild(clone);
    const clone2 = textEl.cloneNode(true);
    container.appendChild(clone2); // Extra clone for safety on wide screens

    const totalWidth = textEl.offsetWidth;

    // Set initial position
    gsap.set(container, { x: 0 });

    const moveDistance = direction === "left" ? -totalWidth : totalWidth;

    // Create infinite loop
    gsap.to(container, {
      x: moveDistance,
      duration: speed,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Keeps it looping seamlessly
      },
    });

    // Optional: Scroll ScrollTrigger to speed up/slow down on scroll
    // ScrollTrigger.create({
    //   trigger: document.body,
    //   start: "top top",
    //   end: "bottom bottom",
    //   onUpdate: (self) => {
    //     // complex velocity logic could go here
    //   }
    // });
  }, [text, speed, direction]);

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <div ref={containerRef} className="flex gap-4 items-center">
        <span
          ref={textRef}
          className="inline-block px-4 text-4xl md:text-8xl font-bold font-heading uppercase tracking-tighter text-white"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TextMarquee;
