import { motion } from "framer-motion";
import { Layers, BadgeCheck, HeartHandshake, IndianRupee, Compass } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Layers,
    title: "A wide range, all in one store",
    body: "Cricket, football, badminton, volleyball, fitness, gym, shoes and accessories — plus school sports supplies. You rarely need a second stop.",
    image:
      "https://images.pexels.com/photos/793097/pexels-photo-793097.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: BadgeCheck,
    title: "Quality you can verify",
    body: "Every branded product is sourced from authorised suppliers. Hold it, check the tags, and feel the difference before you pay.",
    image:
      "https://images.pexels.com/photos/20652481/pexels-photo-20652481.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by the local community",
    body: "Schools, clubs and weekend warriors across Panskura and Purba Medinipur have bought from us for years — and they keep coming back.",
    image:
      "https://images.pexels.com/photos/34742833/pexels-photo-34742833.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: IndianRupee,
    title: "Honest, affordable pricing",
    body: "No inflated tags, no fake discounts. We price fairly for the local market and tell you exactly what you're paying for.",
    image:
      "https://images.pexels.com/photos/29224210/pexels-photo-29224210.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    icon: Compass,
    title: "Expert guidance, not a sales pitch",
    body: "Tell us your game, your level and your budget. We'll point you to the right gear — even if it's the cheaper option.",
    image:
      "https://images.pexels.com/photos/13116204/pexels-photo-13116204.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Haji Sports"
          title="More than a shop. A part of how the town plays."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 flex flex-col gap-20 lg:gap-28">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-mist-200">
                    <motion.img
                      initial={{ scale: 1.12 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm font-medium text-charcoal-soft">
                      0{i + 1}
                    </span>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-accent">
                        <item.icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-900 lg:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
