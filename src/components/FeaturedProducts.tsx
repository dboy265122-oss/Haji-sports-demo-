import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Star, X } from "lucide-react";
import { products, type Product } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const filters = ["All", "Cricket", "Football", "Badminton", "Gym", "Sports Shoes", "Fitness"];

export function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="featured" className="bg-mist-100 py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Featured"
          title="Gear that earns its place in your kit."
          description="A curated selection of our most-bought equipment — tournament-ready, school-approved and built to last."
        />

        {/* Filter tabs */}
        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`flex-none rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-ink-900 text-white"
                    : "border border-ink-900/10 text-charcoal hover:border-ink-900/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist-200">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.06]"
                  />
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-ink-900 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => setQuickView(p)}
                      className="flex h-11 translate-y-3 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-ink-900 shadow-lg transition-transform duration-300 group-hover:translate-y-0"
                    >
                      <Eye className="h-4 w-4" />
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent-600">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-medium leading-snug text-ink-900">
                    {p.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-xs font-medium text-charcoal">
                      {p.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-lg font-semibold text-ink-900">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-charcoal-soft line-through">
                      ₹{p.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickView(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white md:grid-cols-2"
            >
              <button
                onClick={() => setQuickView(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 backdrop-blur transition-colors hover:bg-ink-900 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-7 md:p-9">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent-600">
                  {quickView.category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink-900">
                  {quickView.name}
                </h3>
                {quickView.badge && (
                  <span className="mt-3 inline-flex w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-600">
                    {quickView.badge}
                  </span>
                )}
                <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal">
                  {quickView.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(quickView.rating)
                          ? "fill-accent text-accent"
                          : "text-mist-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-charcoal-soft">
                    {quickView.rating.toFixed(1)}
                  </span>
                </div>
                <div className="mt-auto pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold text-ink-900">
                      ₹{quickView.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-base text-charcoal-soft line-through">
                      ₹{quickView.mrp.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-medium text-accent-600">
                      Save ₹{(quickView.mrp - quickView.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <Button className="flex-1">Enquire on WhatsApp</Button>
                    <Button variant="outline">Visit Store</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
