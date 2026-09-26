import { Clock, Phone, MapPin, Car, Navigation } from "lucide-react";
import { storeInfo } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function StoreExperience() {
  const details = [
    { icon: Clock, label: "Opening Hours", value: storeInfo.hoursWeekday, sub: storeInfo.hoursSunday },
    { icon: Phone, label: "Call Us", value: storeInfo.phone, sub: "Talk to a real person, not a bot", href: storeInfo.phoneHref },
    { icon: Car, label: "Parking", value: "On-premises parking", sub: storeInfo.parking },
  ];

  return (
    <section id="store" className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Visit the Store"
          title="Come in. Hold the gear. Leave with the right one."
          description="Nothing beats feeling a bat's pickup or a shoe's fit in person. We're easy to find on Panskura's main road."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Map */}
          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-ink-900/8 lg:h-full">
              <iframe
                title="Haji Sports location map"
                src={storeInfo.mapEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              />
              <a
                href={storeInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-ink-900"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </Reveal>

          {/* Details */}
          <div className="flex flex-col gap-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-ink-900/8 bg-mist-100 p-6">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-ink-900 text-accent">
                    <d.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-charcoal-soft">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block font-display text-lg font-semibold text-ink-900 transition-colors hover:text-accent-600">
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-1 font-display text-lg font-semibold text-ink-900">
                        {d.value}
                      </div>
                    )}
                    {d.sub && <div className="mt-0.5 text-sm text-charcoal-soft">{d.sub}</div>}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="flex items-start gap-4 rounded-3xl bg-ink-900 p-6 text-white">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent text-ink-900">
                  <MapPin className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                    Find Us
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold leading-snug">
                    {storeInfo.addressLine1}
                  </div>
                  <div className="text-sm text-white/70">
                    {storeInfo.addressLine2}, {storeInfo.city}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
