import { motion } from "framer-motion";

function CategoryCard({ title, icon: Icon }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(32, 200, 120, 0.2)" }}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/15 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-4 inline-flex rounded-xl bg-accent/20 p-3 text-accent">
        <Icon size={18} />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </motion.div>
  );
}

export default CategoryCard;
