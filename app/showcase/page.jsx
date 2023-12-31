"use client";
import Link from "next/link";
import MALViewer from "./malv/malv";
import Indopalm from "./indopalm/indopalm";
import Apdoc from "./apdoc/apdoc";
import Sejati from "./sejati/sejati";
import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <main className="flex min-h-screen flex-col items-center justify-start lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono">
          <div className="flex w-full items-end justify-start">
            <Link
              href={"/"}
              className="text-3xl flex place-items-center gap-2 pt-8 px-4 lg:px-8"
            >
              π
            </Link>

            <div className="flex ml-auto">
              <Link
                href={"/about"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Introduction
              </Link>
              <Link
                href={"/career"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Career
              </Link>
              <Link
                href={"/connect"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className=""
        >
          <div className="w-screen px-5 lg:px-0 lg:w-[640px] mt-32">
            {/* <p className="opacity-25 leading-relaxed mb-4 uppercase tracking-widest">
            Frontend Developer
          </p> */}
            <h1 className="text-5xl lg:text-6xl mb-8 font-semibold">
              Selected Work
            </h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}
            <MALViewer />
            <Apdoc />
            <Indopalm />
            <Sejati />

            <div className="flex flex-col">
              <a
                target="_blank"
                href="https://github.com/madvier83?tab=repositories&q=&type=&language=&sort=stargazers"
                className="card-hover mt-32 p-4 px-8 rounded-lg bg-blue-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Discover More Creation on My GitHub - madvier83
              </a>

              <Link
                href="/career"
                className="card-hover mt-4 mb-32 p-4 px-8 rounded-lg bg-indigo-700 border border-indigo-100 text-white hover:text-white font-bold text-lg cursor-pointer"
              >
                Next Topic - Career
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
