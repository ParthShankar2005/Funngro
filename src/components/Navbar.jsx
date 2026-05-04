import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData";
import Button from "./Button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: isScrolled ? 8 : 14,
          paddingBottom: isScrolled ? 8 : 14,
        }}
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "border-white/15 bg-navy-primary/80 shadow-card backdrop-blur-xl"
            : "border-white/10 bg-navy-secondary/65 backdrop-blur-md"
        } px-4 sm:px-6`}
      >
        <Link to="/" className="font-display text-xl font-bold tracking-wide text-white">
          Funngro
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <NavLink key={link.label} to={link.to} end={link.to === "/"} className="relative rounded-full">
                {({ isActive }) => (
                  <span className="relative inline-flex px-4 py-2 text-sm font-medium text-slate-200">
                    {isActive ? (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                      />
                    ) : null}
                    <span className="relative z-10">{link.label}</span>
                  </span>
                )}
              </NavLink>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/company" variant="ghost" size="sm">
            Company Login
          </Button>
          <Button to="/#final-cta" size="sm" showArrow>
            Earn Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-2xl border border-white/15 bg-navy-primary/95 p-5 shadow-card backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-2">
            {navLinks.map((link) =>
                link.type === "route" ? (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm font-medium transition ${
                        isActive ? "bg-accent/20 text-accent" : "text-slate-200 hover:bg-white/10"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button to="/company" variant="ghost" size="sm">
                Company Login
              </Button>
              <Button to="/#final-cta" size="sm" showArrow>
                Earn Now
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
