"use client";
import Link from "next/link";
import SkillBadge from "../../components/skill_badge";
import Timeline from "./timeline";

export default function Career() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex justify-between">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none text-gray-500">
          <Link
            className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/showcase"
            rel="noopener noreferrer"
          >
            <span className="rotate-180 text-sm font-semibold inline-block transition-transform motion-reduce:transform-none">
              -
            </span>
            Portofolio
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none text-gray-500">
          <Link
            className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            Adv.
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none text-gray-500">
          <Link
            className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/connect"
            rel="noopener noreferrer"
          >
            Connect
            <span className="text-sm font-semibold inline-block transition-transform motion-reduce:transform-none">
              -
            </span>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col w-[640px] mt-32">
          {/* <p className="opacity-25 leading-relaxed mb-4 uppercase tracking-widest">
            Frontend Developer
          </p> */}
          <h1 className="text-6xl mb-8 font-semibold">Career</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

          <div className=" text-gray-500 text- flex flex-col gap-4 leading-relaxed tracking-wide">
            <p className="">
              I'm Muhammad Advie Rifaldy, an IT student from Indonesia, with a
              strong dedication to frontend development. Over the past 5 years,
              I've passionately nurtured my love for programming, building a
              solid foundation in this field.
            </p>
          </div>
          <h1 className="text-3xl mt-8 pb-8 font-semibold"></h1>
          <Timeline />
          <Link
            href="/connect"
            className="card-hover mt-32 p-4 px-8 rounded-lg bg-indigo-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Next Topic - Connect
          </Link>
        </div>
      </div>
    </main>
  );
}
