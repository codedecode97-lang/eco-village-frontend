import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaStar, FaPause } from "react-icons/fa";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GSAPTextReveal from "../../../components/animations/GSAPTextReveal";

// --- Styled Video Player ---
const VideoPlayer = ({
  src,
  onEnded,
  onClose,
}: {
  src: string;
  onEnded: () => void;
  onClose: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Autoplay error:", e));
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  return (
    <div
      className="absolute inset-0 z-50 bg-black flex flex-col justify-between animate-in fade-in duration-300 group/video cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        muted={isMuted}
        onEnded={onEnded}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Top Controls */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
        <div className="text-white/80 text-xs tracking-widest uppercase font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          Playing Now
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Center Play/Pause */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {!isPlaying && (
          <div className="w-16 h-16 bg-black/40 backdrop-blur rounded-full flex items-center justify-center animate-in zoom-in duration-200">
            <FaPlay className="text-white ml-1" size={24} />
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-[#EAB308] transition-colors"
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-white hover:text-[#EAB308] transition-colors"
          >
            {isMuted ? <IoVolumeMute size={24} /> : <IoVolumeHigh size={24} />}
          </button>
        </div>

        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
          <div
            className="h-full bg-[#EAB308] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// --- Data ---
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Kolkata, WB",
    video: "https://cdn.pixabay.com/video/2026/01/09/326739_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=202020&w=400&h=700&fit=crop",
    quote: "Peaceful sanctuary.",
    role: "Resident",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Durgapur, WB",
    video: "https://cdn.pixabay.com/video/2025/01/26/254787_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=700&fit=crop",
    quote: "Modern perfection.",
    role: "Homeowner",
  },
  {
    id: 3,
    name: "Amit & Snigdha",
    location: "Asansol, WB",
    video: "https://cdn.pixabay.com/video/2026/01/05/326081_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=700&fit=crop",
    quote: "Dream realized.",
    role: "Couple",
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    location: "Burdwan, WB",
    video: "https://cdn.pixabay.com/video/2025/10/04/307864_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=700&fit=crop",
    quote: "Exceptional vibe.",
    role: "Investor",
  },
  {
    id: 5,
    name: "Anjali Das",
    location: "Raniganj, WB",
    video: "https://cdn.pixabay.com/video/2025/06/03/283431_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=700&fit=crop",
    quote: "Permanent vacation.",
    role: "Resident",
  },
  {
    id: 6,
    name: "Debashish",
    location: "Durgapur",
    video: "https://cdn.pixabay.com/video/2025/08/12/296958_large.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=700&fit=crop",
    quote: "Greenery everywhere.",
    role: "Nature Lover",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Double data for seamless loop
  const loopData = [...testimonials, ...testimonials, ...testimonials];

  useGSAP(
    () => {
      // Horizontal Infinite Scroll
      if (trackRef.current) {
        tweenRef.current = gsap.to(trackRef.current, {
          xPercent: -33.33, // Move 1/3 since we tripled the data. When it reaches 1/3, it visually resets.
          repeat: -1,
          duration: 40,
          ease: "none",
        });
      }
    },
    { scope: containerRef },
  );

  // Control Animation based on Hover & Play State
  useEffect(() => {
    if (playingId !== null) {
      tweenRef.current?.pause();
    } else if (isHovering) {
      tweenRef.current?.pause();
    } else {
      tweenRef.current?.play();
    }
  }, [playingId, isHovering]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-[#051F14] to-[#02110b] overflow-hidden"
      id="testimonials"
    >
      {/* --- Header Content --- */}
      <div className="container mx-auto px-6 mb-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse"></span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
            Community Stories
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6">
          Voices of{" "}
          <span className="text-[#EAB308] italic inline-block ml-2">
            <GSAPTextReveal elementType="span">Customers</GSAPTextReveal>
          </span>
        </h2>
      </div>

      {/* --- Full Width Scrolling Track --- */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          ref={trackRef}
          className="flex w-max gap-6 pl-6 py-6"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {loopData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative w-[300px] sm:w-[360px] aspect-[9/16] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border-8 border-white/20 shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:border-white/50 hover:border-[5px]  hover:ring-1 hover:ring-white/50"
              onClick={() => setPlayingId(index)}
            >
              {/* --- Card Content --- */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${playingId === index ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              >
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center bg-white/10 group-hover:bg-white/40 group-hover:border-white/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <FaPlay className="ml-1 text-lg" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  <p className="font-heading text-xl text-white mb-3 italic">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-white/20 pt-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-xs text-white/50">{item.location}</p>
                    </div>
                    <div className="flex gap-0.5 text-[#EAB308]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={10} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Video Player Overlay --- */}
              {playingId === index && (
                <div className="absolute inset-0 z-50 bg-black">
                  {/* We use index as ID here because of duplicated items in loop */}
                  <VideoPlayer
                    src={item.video}
                    onEnded={() => setPlayingId(null)}
                    onClose={() => setPlayingId(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
