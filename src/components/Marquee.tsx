import { useEffect, useRef, useState } from "react";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 38, className = "" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => setTrackWidth(trackRef.current!.scrollWidth / 2);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const duration = trackWidth ? trackWidth / speed : 30;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex w-max gap-12 will-change-transform"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.22em] text-white/80"
          >
            <span className="text-accent">✦</span>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
