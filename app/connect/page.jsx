"use client";
import PageTransition from "@app/components/transition";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Connect() {
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
                href={"/showcase"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Portofolio
              </Link>
              <Link
                href={"/career"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Career
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
            <h1 className="text-6xl mb-8 font-semibold">Connect</h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

            <div className=" text-gray-500 text- flex flex-col gap-4 leading-relaxed tracking-wide">
              <p className="">
                If you'd like to get in touch, feel free to reach out through
                any of the following methods. I'm always happy to connect and
                discuss potential opportunities and collaborations!
              </p>
            </div>

            <div className="flex mb-32 flex-col">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1sBhnZ3OrPccX-zmSpLCHIlk1016eKXcM/view?usp=sharing"
                className="card-hover mt-16 p-4 px-8 rounded-lg bg-amber-500 border border-amber-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Get My Resume
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=082376932445"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-teal-500 border border-teal-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Whatsapp +62-82376932445
              </a>
              <a
                // target="_blank"
                href="mailto:madvier83@gmail.com"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-sky-500 border border-sky-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                madvier83@gmail.com
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-advie-rifaldy-a9790b251/"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-blue-500 border border-blue-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/madvier83"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-violet-500 border border-violet-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/madvier.8103/?theme=dark"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-fuchsia-500 border border-fuchsia-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Instagram
              </a>
              <Link
                href="/"
                className="card-hover mt-16 p-4 px-8 rounded-lg bg-purple-700 border border-purple-100 text-white hover:text-white font-bold text-lg cursor-pointer"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
