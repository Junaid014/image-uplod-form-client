// SparkleButton.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1.5,
    x: Math.cos(i * 30) * 40,
    y: Math.sin(i * 30) * 40,
    rotate: i * 30,
    transition: { duration: 0.6, ease: "easeOut" },
  }),
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  },
};

const SparkleButton = () => {
  const [showSparkles, setShowSparkles] = useState(false);

  const handleClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 600); // sparkle duration
  };

  return (
    <div className="relative mt-32 flex justify-center ">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        ✨ Click Me
      </button>

      <AnimatePresence>
        {showSparkles &&
          [...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              custom={i}
              className="absolute left-1/2 top-1/2 text-yellow-300 text-lg select-none pointer-events-none"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sparkleVariants}
              style={{
                transform: "translate(-50%, -50%)",
                textShadow: "0 0 6px rgba(255,255,200,0.8)",
              }}
            >
              ✦
            </motion.span>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleButton;
