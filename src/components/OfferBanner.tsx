import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function OfferBanner() {
  return (
    <section className="bg-white py-6">
      <div className="container-wide">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-accent px-7 py-9 sm:px-12 sm:py-12"
          >
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-900/60">
                  Limited Time
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                  Season kickoff — up to 25% off cricket & football gear
                </h3>
                <p className="mt-2 text-sm text-ink-900/70 sm:text-base">
                  In-store only. While stock lasts. Walk in before the season begins.
                </p>
              </div>
              <a
                href="#store"
                className="flex-none rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink-900"
              >
                Visit the Store
              </a>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ink-900/5" />
            <div className="absolute -bottom-16 right-24 h-48 w-48 rounded-full bg-ink-900/5" />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
