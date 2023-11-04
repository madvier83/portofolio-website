"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between select-none cursor-default lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono">
          <div className="flex w-full items-end justify-start">
            <Link
              href={"/"}
              className="text-lg flex place-items-center gap-2 pt-8 px-4 lg:px-8"
            >
              Adv.
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center text-center w-full lg:w-[580px] mt-24 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl mb-6 font-semibold">
              Advie Rifaldy
            </h1>
            <p className=" text-gray-500 leading-relaxed tracking-wide">
              Hey there, I'm Advie, your friendly front-end wizard! <br /> Take
              a stroll through my creations, find your inspiration, and <br />
              <RoughNotation
                type="underline"
                color="#F9C23C"
                show={true}
                padding={[8]}
                animationDelay={1000}
                animationDuration={2500}
                iterations={3}
              >
                let's create something truly magical together!✨
              </RoughNotation>
            </p>
          </div>
        </div>

        <div className="mb-32 grid gap-4 text-center mt-32 lg:mt-0 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 card-hover"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Introduction{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:rotate-12 motion-reduce:transform-none">
                👋
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch]  text-gray-500`}>
              Get to know me better.
            </p>
          </Link>

          <Link
            href="/showcase"
            className="group rounded-lg border border-transparent px-5 py-4 card-hover"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Portofolio{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:rotate-12 motion-reduce:transform-none">
                🌟
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch]  text-gray-500`}>
              Discover my creations!
            </p>
          </Link>
          <Link
            href="/career"
            className="group rounded-lg border border-transparent px-5 py-4 card-hover"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Career{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:rotate-12 motion-reduce:transform-none">
                📌
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch]  text-gray-500`}>
              Explore my journey.
            </p>
          </Link>
          <Link
            href="/connect"
            className="group rounded-lg border border-transparent px-5 py-4 card-hover"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Connect{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:rotate-12 motion-reduce:transform-none">
                🔗
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch]  text-gray-500`}>Get in touch.</p>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
