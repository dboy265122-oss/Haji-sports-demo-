import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { storeInfo } from "../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const waLink = `https://wa.me/${storeInfo.whatsapp}?text=Hi%20Haji%20Sports,%20I'd%20like%20to%20enquire%20about%20a%20product`;

  return (
    <section id="contact" className="bg-ink-900 py-24 text-white lg:py-32">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            dark
            eyebrow="Get in Touch"
            title="Questions, quotes or team orders — say hello."
            description="Call us, message on WhatsApp, or drop a note below. We usually reply within a few hours during store timings."
          />

          <div className="mt-10 space-y-4">
            <Reveal>
              <a
                href={storeInfo.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-accent hover:bg-white/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-ink-900">
                  <Phone className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Call</div>
                  <div className="font-display text-lg font-semibold">{storeInfo.phone}</div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-accent hover:bg-white/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-ink-900">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">WhatsApp</div>
                  <div className="font-display text-lg font-semibold">Chat with us instantly</div>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <MapPin className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Visit</div>
                  <div className="font-display text-lg font-semibold">
                    {storeInfo.addressLine1}
                  </div>
                  <div className="text-sm text-white/60">
                    {storeInfo.addressLine2}, {storeInfo.city}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="e.g. Rahul Das" />
              <Field label="Phone" name="phone" type="tel" placeholder="10-digit mobile" />
            </div>
            <div className="mt-5">
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                What do you need?
              </label>
              <select
                name="topic"
                className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white focus:border-accent focus:outline-none"
              >
                <option className="bg-ink-900">Product enquiry</option>
                <option className="bg-ink-900">School / team order</option>
                <option className="bg-ink-900">Bulk pricing</option>
                <option className="bg-ink-900">Returns & exchanges</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you're looking for…"
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="mt-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-full bg-accent/15 px-5 py-3.5 text-accent"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">Thank you — we'll be in touch shortly.</span>
                </motion.div>
              ) : (
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
