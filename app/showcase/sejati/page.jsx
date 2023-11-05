"use client";
import Link from "next/link";
import Image from "next/image";
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
                href={"/showcase"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Portofolio
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
            <h1 className="text-6xl mb-12 font-semibold">Sejati Life</h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

            <div className="rounded-lg flex-col bg-black h-72 flex items-center justify-start overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                src="/sejati.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>
            <p className="paragraph text-gray-500 mt-8">
              I'm pleased to share that I've successfully developed a
              comprehensive earning Management System (LMS) utilizing the
              Laravel framework. This LMS incorporates a range of essential
              features as listed below.
            </p>

            <h2 className="text-3xl mt-24 font-bold leading-relaxed tracking-wide">
              Key Features
            </h2>

            <p className="paragraph text-white mt-8">Login & Register</p>
            <p className="paragraph text-gray-500 mt-2">
              Users can easily register using their email addresses, and as an
              added layer of security and convenience, this system incorporates
              email verification. This ensures that each user's email is
              validated, promoting a more secure and trustworthy environment.
            </p>

            <div className="mt-8 rounded-lg flex-col bg-black h-80 flex items-center justify-start overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full"
                src="/sejati2.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>

            <p className="paragraph text-white mt-8">Course Customization</p>
            <p className="paragraph text-gray-500 mt-2">
              This customization feature allows administrators to personalize
              the platform to align with the church's branding, create and
              organize course content, manage user access and permissions, and
              engage learners through interactive content. It empowers churches
              to provide a unique and learning experience while tracking
              progress effectively.
            </p>

            <div className="mt-8 rounded-lg flex-col bg-black flex items-center justify-start overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full"
                src="/sejati3.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>

            <p className="paragraph text-white mt-8">Assessment Review</p>
            <p className="paragraph text-gray-500 mt-2">
              The Assessment Review feature enables instructors or
              administrators to evaluate and analyze the results of assessments,
              quizzes, tests, and assignments submitted by learners. It provides
              a comprehensive overview of individual and group performance,
              allowing for the identification of areas where improvement is
              needed.
            </p>
            <div className="mt-8 rounded-lg flex-col bg-black h-80 flex items-center justify-start overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full"
                src="/sejati4.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>

            <div className="flex flex-col mb-32">
              <a
                target="_blank"
                href="https://sejati.life"
                className="card-hover mt-16 p-4 px-8 rounded-lg bg-amber-500 border border-amber-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Visit website - sejati.life
              </a>
              <Link
                href="/showcase"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-indigo-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Back To Topic - Portofolio
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
