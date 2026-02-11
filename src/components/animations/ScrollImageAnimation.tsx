import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import img from "../../assets/ourlegacy.webp";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = imageWrapperRef.current;
      const image = imgRef.current;

      if (!container || !wrapper || !image) return;

      // 1. Initial 3D State - Optimized for Performance
      gsap.set(wrapper, {
        scale: 0.85,
        rotateX: 25, // Tilted back
        y: 80,
        opacity: 0.6,
        borderRadius: "2rem",
        transformPerspective: 1200,
        transformOrigin: "center top",
        force3D: true, // Hardware acceleration
      });

      gsap.set(image, {
        scale: 1.2,
        yPercent: -10, // Start slightly up for parallax
        force3D: true,
      });

      // 2. Main Reveal Timeline
      // We want this to feel like the image is "landing" and opening up
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "center 50%",
          scrub: 1, // Tighter scrub for better responsiveness
        },
      });

      tl.to(wrapper, {
        scale: 1,
        rotateX: 0,
        y: 0,
        opacity: 1,
        borderRadius: "0rem",
        ease: "power2.out",
        duration: 1.5,
      }).to(
        image,
        {
          scale: 1,
          yPercent: 0,
          ease: "power2.out",
          duration: 1.5,
        },
        "<", // Align with wrapper animation
      );

      // 3. Extra Parallax - REMOVED for Performance
      // This caused jitter on some devices at the end of the scroll.
      // The image will now stay stable after the initial reveal.
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[600px] mb-20 relative flex justify-center items-center perspective-[1200px]"
    >
      <div
        ref={imageWrapperRef}
        className="w-full h-full relative overflow-hidden will-change-[transform,opacity] pointer-events-none"
      >
        <img
          ref={imgRef}
          src={img}
          alt="Our Legacy - Building Dreams"
          className="w-full h-full object-cover will-change-transform"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Optional Glass Badge or Info */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default ScrollImageAnimation;
