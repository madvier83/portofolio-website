"use client";
import Link from "next/link";

export default function Connect() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex justify-between">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none text-gray-500">
          <Link
            className="pointer-events-none text-lg flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/career"
            rel="noopener noreferrer"
          >
            <span className="rotate-180 text-sm font-semibold inline-block transition-transform motion-reduce:transform-none">
              -
            </span>
            Career
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
            href="/"
            rel="noopener noreferrer"
          >
            Home
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
          <h1 className="text-6xl mb-8 font-semibold">Connect</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

          <div className=" text-gray-500 text- flex flex-col gap-4 leading-relaxed tracking-wide">
            <p className="">
              If you'd like to get in touch, feel free to reach out through any
              of the following methods. I'm always happy to connect and discuss
              potential opportunities and collaborations!
            </p>
          </div>

          <a
            target="_blank"
            href="https://drive.google.com/file/d/1cjWYfIiU6EJL9AT-rhooHRFIbpKeDHNu/view"
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
        </div>
      </div>
    </main>
  );
}
