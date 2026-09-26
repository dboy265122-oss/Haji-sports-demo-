import { ArrowRight } from "lucide-react";
import { blogTips } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function SportsTips() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Sports Tips"
            title="Read before you play."
            description="Short, practical guides from the shop floor to help you choose and care for your gear."
          />
          <Reveal delay={0.1}>
            <a
              href="#featured"
              className="group hidden items-center gap-2 text-sm font-medium text-ink-900 lg:inline-flex"
            >
              <span className="link-underline">All articles</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogTips.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <a
                href="#featured"
                className="group block rounded-3xl border border-ink-900/8 bg-mist-100 p-7 transition-all duration-500 hover:bg-ink-900 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.3)]"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-600 group-hover:text-accent">
                  {t.read}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink-900 group-hover:text-white">
                  {t.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal group-hover:text-white/70">
                  {t.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-900 group-hover:text-accent">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
