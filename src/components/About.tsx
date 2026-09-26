import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 text-white lg:py-36">
      {/* subtle texture accent */}
      <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                src="https://images.pexels.com/photos/13509632/pexels-photo-13509632.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Young cricketer preparing to bat in India"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-accent p-6 text-ink-900 shadow-2xl sm:-right-6">
              <div className="font-display text-4xl font-bold leading-none">12+</div>
              <div className="mt-1 text-sm font-medium">Years serving Panskura</div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-current opacity-60" />
              Our Story
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-h2 font-semibold text-white">
              A small store with a big love for the game.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
              <p>
                Haji Sports began on the main road in Panskura with a simple
                idea — give local athletes, students and weekend players access
                to genuine, well-made gear without travelling to the city.
              </p>
              <p>
                Over the years we've kitted out school teams, supplied club
                tournaments, and helped a young cricketer pick their first bat,
                a footballer find their match ball, and a school gear up for its
                annual sports day. Every one of those moments matters to us.
              </p>
              <p>
                We're not a chain. We're a shop run by people who know sport and
                know this town — and we'd rather earn your trust than make a
                quick sale.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9">
              <a
                href="#custom-orders"
                className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[0.95rem] font-medium text-ink-900 transition-colors hover:bg-accent-400"
              >
                Talk to us about your team
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
