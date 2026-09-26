import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  "Genuine Products",
  "Affordable Pricing",
  "Trusted Local Store",
  "Wide Sports Collection",
];

export function FeatureStrip() {
  return (
    <section className="border-b border-ink-900/8 bg-white">
      <div className="container-wide grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f} delay={i * 0.08}>
            <div className="flex h-full items-center gap-3 px-4 py-7 sm:px-6 lg:py-9 lg:border-r lg:border-ink-900/8 last:border-r-0">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent/15 text-accent-600">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium tracking-tight text-ink-900 sm:text-base">
                {f}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
