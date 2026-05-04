import { motion } from "framer-motion";
import Button from "./Button";

function ProjectCard({ title, description, price, cta, icon: Icon }) {
  return (
    <motion.article
      className="glass-card flex h-full flex-col rounded-2xl p-6"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(32, 200, 120, 0.16)" }}
    >
      <div className="mb-4 inline-flex rounded-xl bg-accent/20 p-3 text-accent">
        <Icon size={18} />
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      <p className="mt-5 text-sm font-semibold text-accent">{price}</p>
      <div className="mt-6">
        <Button variant="secondary" size="sm" showArrow href="#final-cta">
          {cta}
        </Button>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
