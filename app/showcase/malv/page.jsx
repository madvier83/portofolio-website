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
              className="text-lg flex place-items-center gap-2 pt-8 px-4 lg:px-8"
            >
              Adv.
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

        <div className="">
          <div className="w-screen px-5 lg:px-0 lg:w-[640px] mt-32">
            <h1 className="text-6xl mb-8 font-semibold">MyAnimeList Viewer</h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

            <div className="rounded-lg flex-col bg-black h-72 flex items-center justify-center pt-10 overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full"
                src="/mal.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>
            <p className="paragraph text-gray-500 mt-8">
              This is my first Flutter project, and it's a project for a college
              assignment involving the usage of an external API and its
              implementation within the Flutter framework.
            </p>
            <p className="paragraph text-gray-500 mt-4">
              "MyAnimeList (MAL) Viewer" is an application created as a replica
              of MyAnimeList, a popular website used by anime and movie
              enthusiasts to search for and manage their watched anime list.
            </p>

            <h2 className="text-3xl mt-24 font-bold leading-relaxed tracking-wide">
              Key Features
            </h2>

            <p className="paragraph text-white mt-8">
              AI Implementation: Anime Search Using Images
            </p>
            <p className="paragraph text-gray-500 mt-2">
              I'm making use of the image search API provided by trace.moe, and
              I've integrated the Flutter image picker library to access images
              from the device and then transmit them to the API using the Dio
              library with multipart form data.
            </p>
            <div className="flex gap-2 mt-8">
              <div className="image-card h-full overflow-hidden">
                <Image
                  className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                  src="/malSearch1.png"
                  alt=""
                  width={720}
                  height={1600}
                />
              </div>
              <div className="image-card h-full overflow-hidden">
                <Image
                  className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
                  src="/malSearch2.png"
                  alt=""
                  width={720}
                  height={1600}
                />
              </div>
              <div className="image-card h-full">
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
            <p className="paragraph text-gray-500 mt-2">
              The application displays a list of anime from the MyAnimeList
              database. For the sake of convenience, I've opted to utilize the
              unofficial MyAnimeList API, which is jikan.moe.
            </p>
            <p className="paragraph text-white mt-8">Anime Details</p>
            <p className="paragraph text-gray-500 mt-2">
              Users can view comprehensive information about each anime,
              including a synopsis, rating, studio, and more.
            </p>
            <p className="paragraph text-white mt-8">Bookmark</p>
            <p className="paragraph text-gray-500 mt-2">
              Users can save anime to a bookmark stored in Firestore, and the
              list of saved bookmarks can be viewed on the bookmark page.
            </p>
            <p className="paragraph text-white mt-8">Login & Register </p>
            <p className="paragraph text-gray-500 mt-2">
              Users can register using email and log in to the application.
              Users can also log in using Gmail with only one tap using the
              firebase auth library.
            </p>
            <div className="rounded-lg flex-col bg-black h-96 flex items-center justify-start mt-8 overflow-hidden">
              <Image
                className="flex-shrink-0 bg-cover min-w-full min-h-full"
                src="/malfb.png"
                alt=""
                width={1050}
                height={1401}
              />
            </div>

            <div className="flex flex-col">
              <a
                target="_blank"
                href="https://appdistribution.firebase.google.com/testerapps/1:315255166207:android:4ca957ca113907379fe8ca/releases/54so0kvdovgv8"
                className="card-hover mt-32 p-4 px-8 rounded-lg bg-amber-500 border border-amber-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Try it yourself - Firebase App Distribution
              </a>
              <a
                target="_blank"
                href="https://github.com/madvier83/flutter_mal"
                className="card-hover mt-4 p-4 px-8 rounded-lg bg-blue-500 border border-blue-100 text-black hover:text-white font-bold text-lg cursor-pointer"
              >
                Source Code - Github Repository
              </a>

              <Link
                href="/showcase"
                className="card-hover mt-4 mb-32 p-4 px-8 rounded-lg bg-indigo-700 border border-indigo-100 text-white hover:text-white font-bold text-lg cursor-pointer"
              >
                Back To Topic - Portofolio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
