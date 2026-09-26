import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X, Phone, ShoppingBag } from "lucide-react";
import { storeInfo } from "../data";

const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Shop", href: "#featured" },
  { label: "Custom Orders", href: "#custom-orders" },
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 bg-ink-900 text-white">
        <div className="container-wide flex h-9 items-center justify-between text-[0.72rem] font-medium tracking-wide">
          <span className="hidden sm:inline text-white/70">
            Free local delivery in Panskura on orders over ₹1,500
          </span>
          <a
            href={storeInfo.phoneHref}
            className="ml-auto flex items-center gap-2 text-white/90 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {storeInfo.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-smooth ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-ink-900/8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]"
            : "bg-white"
        }`}
      >
        <div className="container-wide flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="Haji Sports home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-accent font-display font-bold text-lg transition-transform duration-500 group-hover:rotate-[-8deg]">
              H
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink-900">
                HAJI SPORTS
              </span>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-charcoal-soft">
                Panskura
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm font-medium text-charcoal hover:text-ink-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-mist-200 hover:text-ink-900"
            >
              <Search className="h-[1.05rem] w-[1.05rem]" />
            </button>
            <a
              href="#featured"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-mist-200 hover:text-ink-900"
              aria-label="Shop"
            >
              <ShoppingBag className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex h-10 items-center rounded-full bg-ink-900 px-5 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-ink-900"
            >
              Visit Store
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-mist-200"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-ink-900/40 backdrop-blur-md"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container-wide py-8">
                <div className="flex items-center gap-4 border-b border-ink-900/10 pb-4">
                  <Search className="h-5 w-5 text-charcoal-soft" />
                  <input
                    autoFocus
                    placeholder="Search bats, shoes, jerseys, gym gear…"
                    className="flex-1 bg-transparent text-lg font-medium text-ink-900 placeholder:text-charcoal-soft focus:outline-none"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal hover:bg-mist-200"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Cricket bats", "Football", "School jerseys", "Badminton racket", "Dumbbells"].map(
                    (t) => (
                      <button
                        key={t}
                        onClick={() => setSearchOpen(false)}
                        className="rounded-full border border-ink-900/10 px-4 py-2 text-sm text-charcoal transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                      >
                        {t}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold tracking-tight text-ink-900">
                  HAJI SPORTS
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-ink-900/8 py-4 font-display text-2xl font-medium text-ink-900"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={storeInfo.phoneHref}
                className="mt-8 flex items-center gap-2 text-charcoal"
              >
                <Phone className="h-4 w-4 text-accent-600" />
                {storeInfo.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
