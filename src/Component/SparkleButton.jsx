// SparkleButton.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i) => {
    const angle = i * (360 / 10); // 10 sparkles
    const radius = 30 + Math.random() * 15; // Medium spread
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius - 20; // Slight upward

    return {
      opacity: 1,
      scale: 1,
      x,
      y,
      rotate: Math.random() * 180,
      transition: { duration: 0.6, ease: "easeOut" },
    };
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Sparkle = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="text-yellow-200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13 8H19L14.5 12L16 18L12 15L8 18L9.5 12L5 8H11L12 2Z"
      fill="currentColor"
    />
  </svg>
);

const SparkleButton = () => {
  const [showSparkles, setShowSparkles] = useState(false);

  const handleClick = () => {
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 600);
  };

  return (
    <div className="relative mt-16 inline-block">
      {/* Sparkle Zone */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[60%] pointer-events-none z-10 w-[150px] h-[150px]">
        <AnimatePresence>
          {showSparkles &&
            [...Array(10)].map((_, i) => (
              <motion.span
                key={i}
                custom={i}
                className="absolute left-1/2 top-1/2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={sparkleVariants}
                style={{
                  transform: "translate(-50%, -50%)",
                  filter: "drop-shadow(0 0 6px rgba(255, 234, 138, 0.6))",
                }}
              >
                <Sparkle />
              </motion.span>
            ))}
        </AnimatePresence>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Sparkle Action
      </button>
    </div>
  );
};

export default SparkleButton;
