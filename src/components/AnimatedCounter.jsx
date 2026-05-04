import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ value, prefix = "", suffix = "", duration = 1.8, locale = "en-US" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const nextValue = Math.floor(progress * value);
      setCount(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [inView, duration, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString(locale)}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
