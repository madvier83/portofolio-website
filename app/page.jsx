"use client";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 select-none cursor-default">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono  lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Adv.
          </a>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center text-center w-[580px]">
          {/* <p className="opacity-25 leading-relaxed mb-4 uppercase tracking-widest">
            Frontend Developer
          </p> */}
          {/* <p className=" text-gray-500 leading-relaxed tracking-[8px] uppercase mb-4">
            Frontend Developer
          </p> */}
          <h1 className="text-6xl mb-6 font-semibold">Advie Rifaldy</h1>
          <p className=" text-gray-500 leading-relaxed tracking-wide">
            Hey there, I'm Advie, your friendly front-end wizard! <br /> Take a
            stroll through my creations, find your inspiration, and <br />
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
            Read in-depth information about myself.
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
            Find in-depth information about Next.js features and API.
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
            Find in-depth information about Next.js features and API.
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
          <p className={`m-0 max-w-[30ch]  text-gray-500`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
      </div>
    </main>
  );
}
