import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

const GSAPCounter = ({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: GSAPCounterProps) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    // stable numeric proxy
    const proxy = { val: 0 };

    const ctx = gsap.context(() => {
      // 1. Text Counter Animation
      gsap.to(proxy, {
        val: end,
        duration: duration,
        ease: "power4.out", // Fast start, slow end (Premium feel)
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (el) {
            const currentVal =
              decimals > 0
                ? proxy.val.toFixed(decimals)
                : Math.floor(proxy.val);
            el.innerText = `${prefix}${currentVal}${suffix}`;
          }
        },
      });

      // 2. Motion Blur & Opacity Effect
      gsap.fromTo(
        el,
        { filter: "blur(10px)", opacity: 0, y: 10 },
        {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          duration: duration * 0.6, // Blur clears faster than count finishes
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, countRef); // Scope to ref

    return () => ctx.revert();
  }, [end, duration, suffix, prefix, decimals]);

  return (
    <span ref={countRef} className={`inline-block ${className}`}>
      {prefix}0{suffix}
    </span>
  );
};

export default GSAPCounter;
