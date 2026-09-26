import { brands } from "../data";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";

export function Brands() {
  return (
    <section className="bg-ink-900 py-16 lg:py-20">
      <div className="container-wide">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Authorised stockists of the brands athletes trust
          </p>
        </Reveal>
      </div>
      <div className="mt-10">
        <Marquee items={brands} className="mask-fade-x" />
      </div>
    </section>
  );
}
