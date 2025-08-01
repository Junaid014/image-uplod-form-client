import React from "react";
import { motion } from "framer-motion";

const letters = "Welcome".split("");

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2 * i,
    },
  }),
};

const child = {
  hidden: {
    y: 50,
    opacity: 0,
    letterSpacing: "1rem",
  },
  visible: {
    y: 0,
    opacity: 1,
    letterSpacing: "0.1rem",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WelcomeSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center font-outfit bg-black text-white px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold flex gap-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <div className="mt-8 space-y-4 text-lg md:text-xl text-gray-300">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          I’m a front-end developer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          I craft interactive UIs with React, Tailwind & Framer Motion.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
        >
          Let’s build something amazing.
        </motion.p>
      </div>
    </div>
  );
}
