import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export function useScrollReveal() {
  const controls = useAnimation();

  useEffect(() => {
    const reveal = () => {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6 },
      }));
    };

    reveal();
  }, [controls]);

  return controls;
}
