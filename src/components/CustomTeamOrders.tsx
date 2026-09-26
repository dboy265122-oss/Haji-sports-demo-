import { motion } from "framer-motion";
import { Shirt, Users, Trophy, PackageCheck, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const offerings = [
  {
    icon: Shirt,
    title: "School Jerseys",
    body: "House colours, custom prints, names and numbers — tailored to your school's identity.",
  },
  {
    icon: Users,
    title: "Team Uniforms",
    body: "Complete kits for clubs and academies, from jerseys and shorts to socks and extras.",
  },
  {
    icon: Trophy,
    title: "Tournament Orders",
    body: "Bulk match balls, bibs, medals and gear delivered on schedule for your event.",
  },
  {
    icon: PackageCheck,
    title: "Club & Bulk Kits",
    body: "Volume pricing on equipment and apparel for clubs, academies and institutions.",
  },
];

export function CustomTeamOrders() {
  return (
    <section id="custom-orders" className="bg-mist-100 py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Custom & Bulk Orders"
              title={
                <>
                  Outfit your whole team.<br /> We'll handle the details.
                </>
              }
              description="Schools, clubs, academies and tournament organisers — tell us what you need and we'll deliver custom-printed, correctly sized kits on time."
            />
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-full bg-ink-900 px-7 text-[0.95rem] font-medium text-white transition-colors hover:bg-ink-800"
                >
                  Request a Quote
                </a>
                <a
                  href={`https://wa.me/919002000000?text=Hi%20Haji%20Sports,%20I'd%20like%20a%20quote%20for%20a%20team%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-ink-900/15 px-7 text-[0.95rem] font-medium text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                >
                  WhatsApp Us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-6 text-sm text-charcoal-soft">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Min. order applies
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Quote within 24 hrs
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 2) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full rounded-3xl border border-ink-900/8 bg-white p-7 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-ink-900">
                    <o.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                    {o.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-charcoal">
                    {o.body}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
