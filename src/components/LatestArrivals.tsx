import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { latestArrivals } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function LatestArrivals() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Just Landed"
            title="Fresh off the shelf."
            description="New stock arrives every week. Here's what came through our doors most recently."
          />
          <Reveal delay={0.1}>
            <a
              href="#featured"
              className="group hidden items-center gap-2 text-sm font-medium text-ink-900 lg:inline-flex"
            >
              <span className="link-underline">View all products</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {latestArrivals.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-200">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-900">
                    New
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent-600">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-medium leading-snug text-ink-900">
                    {p.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-base font-semibold text-ink-900">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-charcoal-soft line-through">
                      ₹{p.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
