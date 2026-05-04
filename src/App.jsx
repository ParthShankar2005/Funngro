import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Company from "./pages/Company";
import Home from "./pages/Home";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-primary text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <span className="absolute -left-24 top-36 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <span className="absolute right-0 top-24 h-80 w-80 animate-pulseGlow rounded-full bg-emerald-300/15 blur-3xl" />
        <span className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageMotion>
                <Home />
              </PageMotion>
            }
          />
          <Route
            path="/company"
            element={
              <PageMotion>
                <Company />
              </PageMotion>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function PageMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
