import Link from "next/link";
import SkillBadge from "../../components/skill_badge";
import Image from "next/image";
import MALViewer from "./malv/malv";
import Indopalm from "./indopalm/indopalm";
import Apdoc from "./apdoc/apdoc";
import Sejati from "./sejati/sejati";
import RootLayout from "../layout";

export default function Showcase() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex justify-between">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p> */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none text-gray-500">
          <Link
            className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/about"
            rel="noopener noreferrer"
          >
            <span className="rotate-180 text-sm font-semibold inline-block transition-transform motion-reduce:transform-none">
              -
            </span>
            Introduction
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
            href="/career"
            rel="noopener noreferrer"
          >
            Career
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
          <h1 className="text-6xl mb-8 font-semibold">Selected Work</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}
          <MALViewer />
          <Apdoc />
          <Indopalm />
          <Sejati />
          <a
            target="_blank"
            href="https://github.com/madvier83?tab=repositories&q=&type=&language=&sort=stargazers"
            className="card-hover mt-32 p-4 px-8 rounded-lg bg-blue-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Discover More Creation on My GitHub - madvier83
          </a>

          <Link
            href="/career"
            className="card-hover mt-4 p-4 px-8 rounded-lg bg-indigo-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Next Topic - Career
          </Link>
        </div>
      </div>
    </main>
  );
}
