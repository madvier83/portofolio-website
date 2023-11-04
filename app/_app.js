// "use client";
import { AnimatePresence } from "framer-motion";
import "./globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" key={router.pathname}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
