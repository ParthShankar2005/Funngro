import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

function StatCard({ icon: Icon, label, value, suffix, locale }) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
    >
      <div className="mb-4 inline-flex rounded-xl bg-accent/20 p-3 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
        <AnimatedCounter value={value} suffix={suffix} locale={locale} />
      </h3>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </motion.div>
  );
}

export default StatCard;
