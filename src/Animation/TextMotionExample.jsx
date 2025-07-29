// App.jsx

import React from 'react';
import { motion } from 'framer-motion';

const TextMotionExample = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* motion.div = animated div */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}  // শুরুতে ডানে ২০০px আর একদম transparent
        animate={{ x: 0, opacity: 1 }}    // পরে নিজের জায়গায় আসবে + fully visible হবে
        transition={{ duration: 1 }}       // সময় নেবে ১ সেকেন্ড
        className="text-3xl font-bold text-blue-600"
      >
        Slide In from Right
      </motion.div>
    </div>
  );
};

export default TextMotionExample;
