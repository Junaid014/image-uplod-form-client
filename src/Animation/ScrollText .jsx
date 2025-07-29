// ScrollText.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollText = () => {
  const ref = useRef(null);                 // DOM element reference নিচ্ছি
  const isInView = useInView(ref, { once: false });  // বারবার animate করার জন্য once=false

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}     // প্রথমে ডান পাশে আর অদৃশ্য
        animate={isInView ? { x: 0, opacity: 1 } : {x:100 , opacity:0}} // দেখলে animate, না দেখলে reset
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-600"
      >
        Hello! I animated on scroll 👋
      </motion.div>
    </div>
  );
};

export default ScrollText;
