// src/components/SkillsMarquee.jsx
import { useEffect, useRef } from "react";
import InfiniteMarqueeLib from "vanilla-infinite-marquee";
import { LuAsterisk } from "react-icons/lu";

export default function SkillsMarquee({
  items = [
    "WORDPRESS",
    "E-COMMERCE",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "PHP",
    "UX/UI",
  ],
  speed = 30000,
  duplicateCount = 4,
  bgClass = "bg-[#1E56F0]",
  heightClass = "h-[10vh]",
}) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = new InfiniteMarqueeLib({
      element: marqueeRef.current,
      speed,
      direction: "left",
      smoothEdges: true,
      duplicateCount,
      pauseOnHover: true,
      mobileSettings: {
        direction: "left",
        speed,
      },
    });

    return () => {
      if (marquee && typeof marquee.destroy === "function") marquee.destroy();
    };
  }, [speed, duplicateCount]);

  return (
    <div className={`relative ${heightClass} overflow-hidden ${bgClass} flex items-center font-insaniburger`}>
      {/* OJO: sin flex en el hijo, la librería maneja el layout */}
      <div ref={marqueeRef} className="whitespace-nowrap w-full">
        {items.map((txt, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8 leading-none align-middle">
            <span className="text-6xl tracking-wide text-outline">{txt}</span>
            <LuAsterisk className="text-white text-[48px] stroke-[1px] inline-block align-middle" />
          </span>
        ))}
      </div>

      {/* utilitarios locales */}
      <style>{`
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px #fff;
          text-stroke: 1px #fff;
        }
      `}</style>
    </div>
  );
}
