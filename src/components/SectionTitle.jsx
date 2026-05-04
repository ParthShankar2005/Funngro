import { motion } from "framer-motion";

function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-2xl ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-300">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionTitle;
