import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2500); // 2.5 sec splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      style={{
        backgroundImage:
          "linear-gradient(135deg, #dbeafe, #f0f9ff, #e0f2fe, #dbeafe)",
        backgroundSize: "300% 300%",
      }}
    >
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "15%", right: "15%" }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* Logo with glow */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full blur-xl bg-blue-300 opacity-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <img
            src="/logo.png"
            alt="Bot Logo"
            className="relative mx-auto w-40 h-40 mb-6 drop-shadow-xl"
          />
        </div>

        {/* App Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-extrabold text-gray-800 tracking-wide drop-shadow-md"
        >
          Medi Mantra
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
