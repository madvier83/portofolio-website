"use client";
import Link from "next/link";
import SkillBadge from "../../components/skill_badge";
import Timeline from "./timeline";
import PageTransition from "@app/components/transition";
import { motion } from "framer-motion";

export default function Career() {
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
                href={"/connect"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-screen px-5 lg:px-0 lg:w-[640px] mt-32">
            {/* <p className="opacity-25 leading-relaxed mb-4 uppercase tracking-widest">
            Frontend Developer
          </p> */}
            <h1 className="text-6xl mb-8 font-semibold">Career</h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

            <div className=" text-gray-500 text- flex flex-col gap-4 leading-relaxed tracking-wide">
              <p className="">
                I'm Muhammad Advie Rifaldy, an IT student from Indonesia, with a
                strong dedication to frontend development. Over the past 5
                years, I've passionately nurtured my love for programming,
                building a solid foundation in this field.
              </p>
            </div>
            <h1 className="text-3xl mt-8 pb-8 font-semibold"></h1>
            <Timeline />
            <div className="flex flex-col mb-32">
              <Link
                href="/connect"
                className="card-hover mt-32 p-4 px-8 rounded-lg bg-indigo-700 border border-indigo-100 text-white hover:text-white font-bold text-lg cursor-pointer"
              >
                Next Topic - Connect
              </Link>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
