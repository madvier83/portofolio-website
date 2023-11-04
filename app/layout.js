"use client";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import Head from "next/head";
import { createContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Advie Rifaldy",
//   description: "Frontend Developer",
// };

export default function RootLayout({ children, route }) {
  return (
    <html lang="en">
      <Head>
        <title>Advie Rifaldy</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css"
          integrity="sha512-siarrzI1u3pCqFG2LEzi87McrBmq6Tp7juVsdmGY1Dr8Saw+ZBAzDzrGwX3vgxX1NkioYNCFOVC0GpDPss10zQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <body className="font-mono">{children}</body>
    </html>
  );
}
