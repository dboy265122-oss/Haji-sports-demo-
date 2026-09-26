import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { reviews } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Reviews() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);

  const go = useCallback((d: number) => {
    setIndex(([i]) => [(i + d + reviews.length) % reviews.length, d]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go, index]);

  const r = reviews[index];

  return (
    <section className="bg-mist-100 py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Customer Voices"
          title="Trusted by players, coaches and schools."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={r.id}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-ink-900/8 bg-white p-8 text-center shadow-[0_24px_60px_-40px_rgba(0,0,0,0.2)] sm:p-12"
              >
                <Quote className="mx-auto h-8 w-8 text-accent" fill="currentColor" />
                <div className="mt-5 flex justify-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-6 text-balance text-xl font-medium leading-relaxed text-ink-900 sm:text-2xl">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-display font-semibold text-ink-900">{r.name}</div>
                    <div className="text-sm text-charcoal-soft">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/12 text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {reviews.map((rev, i) => (
                <button
                  key={rev.id}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-ink-900" : "w-1.5 bg-ink-900/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/12 text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <div>
              <div className="font-display text-3xl font-bold text-ink-900">4.9/5</div>
              <div className="text-sm text-charcoal-soft">Average rating</div>
            </div>
            <div className="hidden h-10 w-px bg-ink-900/10 sm:block" />
            <div>
              <div className="font-display text-3xl font-bold text-ink-900">2,000+</div>
              <div className="text-sm text-charcoal-soft">Happy customers</div>
            </div>
            <div className="hidden h-10 w-px bg-ink-900/10 sm:block" />
            <div>
              <div className="font-display text-3xl font-bold text-ink-900">30+</div>
              <div className="text-sm text-charcoal-soft">Schools & clubs served</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
