import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 md:px-10 md:py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center -ml-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="eyebrow hover-underline"
                  activeProps={{ className: "eyebrow hover-underline text-foreground" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link to="/" className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase text-center whitespace-nowrap">
            Midi&nbsp;Africa
          </Link>

          <div className="flex items-center justify-end gap-1">
            <button aria-label="Search" className="grid h-10 w-10 place-items-center">
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="grid h-10 w-10 place-items-center"
            >
              {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button aria-label="Bag" className="grid h-10 w-10 place-items-center relative">
              <ShoppingBag className="h-4.5 w-4.5" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5 border-b border-border">
              <span className="font-display text-xl tracking-[0.2em] uppercase">Midi&nbsp;Africa</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-10 p-8 md:p-16 max-w-7xl mx-auto">
              <div>
                <p className="eyebrow text-muted-foreground mb-8">Menu</p>
                <ul className="space-y-4 md:space-y-6">
                  {[{ to: "/", label: "Home" }, ...nav].map((n, i) => (
                    <motion.li
                      key={n.to}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.06 * i, ease: [0.7, 0, 0.2, 1] }}
                    >
                      <Link
                        to={n.to}
                        className="font-display text-5xl md:text-7xl block hover-underline"
                      >
                        {n.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:flex flex-col justify-end gap-6">
                <p className="eyebrow text-muted-foreground">Atelier</p>
                <p className="font-display text-2xl leading-snug max-w-md">
                  Lagos · Accra · Paris. Book a private appointment with our creative team.
                </p>
                <div className="flex gap-6 eyebrow">
                  <a href="#">Instagram</a>
                  <a href="#">Pinterest</a>
                  <a href="#">TikTok</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
