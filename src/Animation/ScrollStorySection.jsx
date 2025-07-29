import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import img1 from '../assets/close-up-historical-map-with-globe-lantern.jpg';
import img2 from '../assets/f917504a-47fe-4dc4-b670-e7c55b9e7baa (1).jpg';

const ScrollStorySection = () => {
  const section3Ref = useRef(null);
  const isInView3 = useInView(section3Ref, { threshold: 0.5 });

  const [showCheck, setShowCheck] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    if (isInView3) {
      setTimeout(() => setShowCheck(true), 300);
      setTimeout(() => {
        setShowCheck(false);
        setShowRating(true);
      }, 1800);
      setTimeout(() => setShowCircle(true), 2500);
    } else {
      setShowCheck(false);
      setShowRating(false);
      setShowCircle(false);
    }
  }, [isInView3]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Sticky Card */}
      <div className="md:w-1/2 sticky top-20 h-[500px] flex items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
        >
          <img
            src={isInView3 ? img2 : img1}
            alt="Product"
            className={`rounded mb-4 w-full transition-all duration-700 ease-in-out ${isInView3 ? "h-[250px]" : "h-[400px]"}`}
          />

          <p className="text-gray-700 mb-4">
            This is our featured product. Below are two buttons.
          </p>

          {/* Price and Check/Rating */}
          <div className="flex items-center justify-between mb-4 relative">
            <div className="text-xl font-bold text-gray-800">Price: $49</div>

            {/* ✅ Check icon */}
            {showCheck && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-full ml-2 text-red-500 text-xl"
              >
                <FaCheckCircle />
              </motion.div>
            )}

            {/* ⭐ Rating with circle */}
            {showRating && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute right-0 -mr-10"
              >
                <div className="relative">
                  <div className={`text-yellow-500 text-xl`}>
                    <FaStar />
                  </div>
                  {showCircle && (
                    <>
                      <div className="absolute top-[-8px] left-[-8px] w-10 h-10 border-2 border-orange-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-[-14px] left-[-14px] w-14 h-14 border-2 border-orange-300 rounded-full animate-pulse"></div>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Left Button
            </button>
            <button
              className={`px-4 py-2 rounded border transition ${isInView3 ? "bg-blue-500 text-white" : "bg-white text-blue-500 border-blue-500"
                }`}
            >
              Right Button
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Scroll Text */}
      <div className="md:w-1/2 space-y-32 p-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 pt-64"
          >
            Step-by-step Heading 1
          </motion.h2>
          <p className="text-gray-600 mt-4 pb-44">
            Animation helps in:
            - Drawing user attention to CTAs
            - Smoother navigation experience
            - Expressing brand personality
            - Making interactivity more fun
            - Making loading feel shorter

            Considerations when using animation:
            - Performance (keep it lightweight)
            - Mobile-friendly behavior
            - Accessibility with prefers-reduced-motion
            - Proper timing (0.3-0.5s)
            - Purpose-driven usage (not just for looks)
          </p>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800"
          >
            Heading 2
          </motion.h2>
          <p className="text-gray-600 mt-4 pb-60">
            Examples & Use Cases:
            - Hover effects on buttons
            - Scroll-triggered fade/slide-ins
            - Loading spinners for feedback
            - Micro-interactions on form submission

            Pros:
            - Makes website modern and professional
            - Reduces user boredom and improves brand connect
            - Offers visual feedback

            Cons:
            - Too much animation can distract
            - Can lag on old devices
            - May affect accessibility
          </p>
        </div>

        <div ref={section3Ref}>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800"
          >
            Heading 3
          </motion.h2>
          <p className="text-gray-600 mt-4">
            Similar examples again for clarity:
            - Hover effects on buttons
            - Scroll animations
            - Loading feedback
            - Success animations after form submission

            Benefits:
            - Modern and professional look
            - Keeps users engaged
            - Provides intuitive guidance

            Drawbacks:
            - Overuse can overwhelm users
            - May impact performance on low-end devices
            - Accessibility concerns for motion-sensitive users
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollStorySection;
