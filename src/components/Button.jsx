import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-accent text-navy-primary hover:bg-accent-soft shadow-lg shadow-accent/30 border border-accent/60",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/20",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base",
};

function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  onClick,
}) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /> : null}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={`group ${baseClass}`} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <a href={href} className={`group ${baseClass}`} onClick={onClick}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      className={`group ${baseClass}`}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}

export default Button;
