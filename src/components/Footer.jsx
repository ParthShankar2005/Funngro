import { motion } from "framer-motion";
import { Apple, ArrowUpRight, Instagram, Linkedin, Play, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-primary/80 pb-8 pt-16">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Funngro</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Building a future where every teenager learns, earns, and grows through real-world digital projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <Link to="/" className="block transition hover:text-accent">
                Home
              </Link>
              <Link to="/company" className="block transition hover:text-accent">
                Careers
              </Link>
              <Link to="/#faq" className="block transition hover:text-accent">
                FAQ
              </Link>
              <Link to="/#final-cta" className="block transition hover:text-accent">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Get The App</h4>
            <div className="mt-3 space-y-3">
              <button type="button" className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                <span className="inline-flex items-center gap-2">
                  <Play size={15} /> Google Play
                </span>
                <ArrowUpRight size={15} />
              </button>
              <button type="button" className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                <span className="inline-flex items-center gap-2">
                  <Apple size={15} /> App Store
                </span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Social</h4>
            <div className="mt-3 flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-accent/40 hover:text-accent"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          Copyright {new Date().getFullYear()} Funngro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
