import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  // Lock body scroll during preloader
  useEffect(() => {
    if (isComplete) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isComplete]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIsComplete(true),
      });

      const slides = [
        
        {
          line1: "Dream",
          line2: "Home",
          script: "Your",
          small: "Awaits You",
        },
      ];

      const durationPerSlide = 2.5;
      const totalDuration = slides.length * durationPerSlide;

      const textContainer = textRef.current;
      if (textContainer) {
        textContainer.innerHTML = "";
        const wrappers: HTMLDivElement[] = [];

        slides.forEach((slide, i) => {
          // Main Wrapper for the slide
          const wrapper = document.createElement("div");
          wrapper.className =
            "absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden pointer-events-none";

          // Composition Container (Relative to hold the absolute parts)
          const contentBox = document.createElement("div");
          contentBox.className =
            "relative flex flex-col items-center justify-center";
          wrapper.appendChild(contentBox);

          // 1. Script Text (Top Left / Overlay)
          const scriptEl = document.createElement("div");
          scriptEl.innerText = slide.script;
          scriptEl.className =
            "absolute -top-8 -left-8 md:-left-12 z-10 font-heading italic text-3xl md:text-5xl text-[#EAB308] opacity-0 transform -rotate-12";
          contentBox.appendChild(scriptEl);

          // 2. Line 1 (Big Serif)
          const line1El = document.createElement("div");
          line1El.className =
            "flex overflow-hidden leading-[0.8] z-0 mix-blend-overlay";
          const line1Chars: HTMLSpanElement[] = [];
          slide.line1.split("").forEach((char) => {
            const span = document.createElement("span");
            span.innerText = char;
            span.className =
              "inline-block text-7xl md:text-9xl font-bold font-heading text-white/90 tracking-tighter transform origin-bottom";
            gsap.set(span, { y: 150, rotateX: -90, opacity: 0 });
            line1El.appendChild(span);
            line1Chars.push(span);
          });
          contentBox.appendChild(line1El);

          // 3. Line 2 (Big Serif - Offset)
          const line2El = document.createElement("div");
          line2El.className =
            "flex overflow-hidden leading-[0.8] ml-16 md:ml-32 z-0";
          const line2Chars: HTMLSpanElement[] = [];
          slide.line2.split("").forEach((char) => {
            const span = document.createElement("span");
            span.innerText = char;
            span.className =
              "inline-block text-7xl md:text-9xl font-bold font-heading text-white/90 tracking-tighter transform origin-bottom";
            gsap.set(span, { y: 150, rotateX: -90, opacity: 0 });
            line2El.appendChild(span);
            line2Chars.push(span);
          });
          contentBox.appendChild(line2El);

          // 4. Small Text (Bottom Right / Detail)
          const smallEl = document.createElement("div");
          smallEl.innerText = slide.small;
          smallEl.className =
            "absolute -bottom-4 -right-4 md:-right-8 font-sans text-xs md:text-sm font-medium tracking-[0.3em] text-white/70 uppercase opacity-0";
          contentBox.appendChild(smallEl);

          textContainer.appendChild(wrapper);
          wrappers.push(wrapper);

          const startTime = i * durationPerSlide;

          // Animate Elements
          // Strings (Chars) - DELAYED ENTRY
          tl.to(
            [...line1Chars, ...line2Chars],
            {
              y: 0,
              rotateX: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.04,
              ease: "expo.out",
            },
            startTime + 0.6,
          ); // Added delay for clean separation

          // Script & Small
          tl.to(
            [scriptEl, smallEl],
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power2.out",
            },
            startTime + 1.1,
          ); // slightly delayed

          // Move Previous Slides Up
          if (i > 0) {
            const prevWrapper = wrappers[i - 1];
            const prevChars = prevWrapper.querySelectorAll("span");
            const prevDecor = prevWrapper.querySelectorAll(
              ".font-heading.italic, .font-sans",
            );

            tl.to(
              prevChars,
              {
                y: -150,
                rotateX: 90,
                opacity: 0,
                stagger: 0.02,
                duration: 0.8,
                ease: "power3.in",
              },
              startTime,
            );

            tl.to(
              prevDecor,
              {
                y: -50,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
              },
              startTime,
            );
          }
        });
      }

      // Percentage & Bar Animation (unchanged logic, just synced timing)
      const progress = { value: 0 };
      tl.to(
        progress,
        {
          value: 100,
          duration: totalDuration,
          ease: "linear",
          onUpdate: () => {
            const currentVal = Math.round(progress.value);
            if (percentageRef.current)
              percentageRef.current.innerText = `${currentVal}%`;
            if (progressBarRef.current)
              progressBarRef.current.style.width = `${currentVal}%`;
          },
        },
        0,
      );

      // Exit
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.2,
      });
    },
    { scope: containerRef },
  );

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#1B4B33] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Center Text Container */}
      <div
        ref={textRef}
        className="relative w-full h-full flex items-center justify-center mb-10"
      >
        {/* Dynamic texts appended here */}
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Percentage Indicator - Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end">
          <div
            ref={percentageRef}
            className="text-6xl md:text-8xl font-black text-white/20 font-heading tabular-nums leading-none"
          >
            0%
          </div>
        </div>

        {/* Progress Bar - Bottom Edge */}
        <div className="w-full h-2 bg-black/20">
          <div
            ref={progressBarRef}
            className="h-full bg-[#EAB308] shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
