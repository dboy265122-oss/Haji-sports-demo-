import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-900">
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -z-0 scale-110"
      >
        <img
          src="https://images.pexels.com/photos/27594195/pexels-photo-27594195.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cricketer in full stride playing a shot"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="container-wide relative z-10 flex h-full flex-col justify-end pb-24 sm:pb-28 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-10 bg-accent" />
          Panskura · Est. Trusted Sports Store
        </motion.div>

        <h1 className="max-w-4xl font-display text-hero font-semibold text-white text-balance">
          {["Every", "Game", "Starts", "Here."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 text-pretty"
        >
          Premium sports equipment, apparel and accessories for athletes,
          students and professionals — handpicked and honestly priced.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#categories"
            className="group inline-flex h-14 items-center gap-2.5 rounded-full bg-accent px-9 text-base font-medium text-ink-900 transition-colors hover:bg-white"
          >
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#store"
            className="group inline-flex h-14 items-center gap-2.5 rounded-full border border-white/30 px-9 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink-900"
          >
            <MapPin className="h-4 w-4" />
            Visit Store
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
        <span className="relative flex h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            animate={{ y: ["-100%", "120%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-4 bg-accent"
          />
        </span>
      </motion.div>
    </section>
  );
}
