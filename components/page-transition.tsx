"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "./loading-screen";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - minimum 1.5 seconds to show loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
