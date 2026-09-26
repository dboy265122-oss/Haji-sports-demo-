import { motion } from "framer-motion";
import { galleryImages } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Gallery"
          title="Inside the store and on the field."
          description="A look at the gear, the shelves and the players who keep Haji Sports going."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={spanClass[img.span] ?? ""}
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full w-full overflow-hidden rounded-2xl bg-mist-200"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.08]"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
