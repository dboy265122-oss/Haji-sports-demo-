import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { storeInfo } from "../data";

const quickLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Featured Products", href: "#featured" },
  { label: "Custom Orders", href: "#custom-orders" },
  { label: "About Us", href: "#about" },
  { label: "Store & Location", href: "#store" },
  { label: "Contact", href: "#contact" },
];

const categoryLinks = [
  "Cricket", "Football", "Badminton", "Gym", "Fitness",
  "Sports Shoes", "School Sports", "Accessories",
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink-900 font-display font-bold">
                H
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                HAJI SPORTS
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Premium sports equipment, apparel and accessories for athletes,
              students and professionals. Proudly based in Panskura, West Bengal.
            </p>
            <p className="mt-5 font-display text-xl font-semibold text-accent">
              Every Game Starts Here.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-white/80 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Categories
            </h4>
            <ul className="mt-5 space-y-3">
              {categoryLinks.map((c) => (
                <li key={c}>
                  <a
                    href="#categories"
                    className="link-underline text-sm text-white/80 hover:text-white"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>
                  {storeInfo.addressLine1}, {storeInfo.addressLine2}, {storeInfo.city}
                </span>
              </li>
              <li>
                <a href={storeInfo.phoneHref} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 flex-none text-accent" />
                  {storeInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${storeInfo.email}`} className="flex items-center gap-3 hover:text-accent">
                  <Mail className="h-4 w-4 flex-none text-accent" />
                  {storeInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Haji Sports, Panskura. All rights reserved.</p>
          <p>Genuine products · Honest pricing · Trusted by the community</p>
        </div>
      </div>
    </footer>
  );
}
