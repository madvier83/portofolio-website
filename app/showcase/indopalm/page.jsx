"use client";
import Link from "next/link";
import SkillBadge from "../../../components/skill_badge";
import Image from "next/image";
import MALViewer from "../malv/malv";
import Indopalm from "./indopalm";
import Apdoc from "../apdoc/apdoc";

export default function Showcase() {
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
            Back
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
            href="/showcase"
            rel="noopener noreferrer"
          >
            Portofolio
            <span className="text-sm font-semibold inline-block transition-transform motion-reduce:transform-none">
              -
            </span>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col w-[640px] mt-32">
          <h1 className="text-6xl mb-12 font-semibold">Indopalm</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

          <div className="rounded-lg flex-col bg-black h-72 flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
              src="/indopalm.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>
          <p className="paragraph text-gray-500 mt-8">
            I developed a website that has enhanced the company's visibility and
            provided a clear overview of the company to customers and potential
            client with google analytics and decent SEO.
          </p>
          {/* <p className="paragraph text-gray-500 mt-4">
            "MyAnimeList (MAL) Viewer" is an application created as a replica of
            MyAnimeList, a popular website used by anime and movie enthusiasts
            to search for and manage their watched anime list.
          </p> */}

          <h2 className="text-3xl mt-12 font-bold leading-relaxed tracking-wide">
            Key Features
          </h2>

          {/* <p className="paragraph text-white mt-4">
            AI Implementation: Anime Search Using Images
          </p>
          <p className="paragraph text-gray-500">
            I'm making use of the image search API provided by trace.moe, and
            I've integrated the Flutter image picker library to access images
            from the device and then transmit them to the API using the Dio
            library with multipart form data.
          </p>
          <div className="flex gap-2 mt-4">
            <div className="image-card h-full pt-4 overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                src="/malSearch1.png"
                alt=""
                width={720}
                height={1600}
              />
            </div>
            <div className="image-card h-full pt-4 overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                src="/malSearch2.png"
                alt=""
                width={720}
                height={1600}
              />
            </div>
            <div className="image-card h-full pt-4">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                src="/malSearch3.png"
                alt=""
                width={720}
                height={1600}
              />
            </div>
          </div>
          <p className="paragraph text-white mt-8">Anime List Display</p>
          <p className="paragraph text-gray-500">
            The application displays a list of anime from the MyAnimeList
            database. For the sake of convenience, I've opted to utilize the
            unofficial MyAnimeList API, which is jikan.moe.
          </p>
          <p className="paragraph text-white mt-8">Anime Details</p>
          <p className="paragraph text-gray-500">
            Users can view comprehensive information about each anime, including
            a synopsis, rating, studio, and more.
          </p>
          <p className="paragraph text-white mt-8">Bookmark</p>
          <p className="paragraph text-gray-500">
            Users can save anime to a bookmark stored in Firestore, and the list
            of saved bookmarks can be viewed on the bookmark page.
          </p> */}

          <a
            target="_blank"
            href="https://indopalm.co.id/"
            className="card-hover mt-16 p-4 px-8 rounded-lg bg-amber-500 border border-amber-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Visit website - indopalm.co.id
          </a>
          {/* <a
            target="_blank"
            href="https://github.com/madvier83/flutter_mal"
            className="card-hover mt-4 p-4 px-8 rounded-lg bg-blue-500 border border-blue-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Source Code - Github Repository
          </a> */}

          <Link
            href="/showcase"
            className="card-hover mt-4 p-4 px-8 rounded-lg bg-indigo-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
          >
            Back To Topic - Portofolio
          </Link>
        </div>
      </div>
    </main>
  );
}
