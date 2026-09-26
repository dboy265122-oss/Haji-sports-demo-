import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Categories() {
  return (
    <section id="categories" className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="The Collection"
            title={
              <>
                Built for every<br className="hidden sm:block" /> sport you play.
              </>
            }
            description="From match-day gear to daily training essentials — eight categories, all under one roof in Panskura."
          />
          <Reveal delay={0.1}>
            <a
              href="#featured"
              className="group hidden items-center gap-2 text-sm font-medium text-ink-900 lg:inline-flex"
            >
              <span className="link-underline">Browse all products</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 4) * 0.06}>
              <a
                href="#featured"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-mist-200"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent transition-opacity duration-500 group-hover:from-ink-900/90" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {cat.name}
                      </h3>
                      <p className="mt-1 hidden text-sm text-white/70 sm:block">
                        {cat.blurb}
                      </p>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-ink-900 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                  <span className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                    {cat.count} products
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
