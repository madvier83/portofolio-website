"use client";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { createContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PageTransition({ children, pageKey }) {
  // console.log(pageKey);
  return (
    <AnimatePresence
      mode="popLayout"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div>
        <motion.div key={`z${pageKey}`}>
          {children}
          <motion.div
            // key={`a${route.pathname}`}
            className="slide-in"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            // key={`b${route.pathname}`}
            className="slide-out"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
