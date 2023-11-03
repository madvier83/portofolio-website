"use client";
import Link from "next/link";
import SkillBadge from "../../../components/skill_badge";
import Image from "next/image";
import MALViewer from "../malv/malv";
import Indopalm from "../indopalm/indopalm";
import Apdoc from "../apdoc/apdoc";

export default function Showcase() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono">
        <div className="flex w-full items-end justify-start">
          <a className="pointer-events-none text-lg flex place-items-center gap-2 pt-8 px-4 lg:px-8">
            Adv.
          </a>
        </div>
      </div>

      <div className="">
        <div className="w-screen px-5 lg:px-0 lg:w-[640px] mt-32">
          <h1 className="text-6xl mb-12 font-semibold">Apdoc Clinic System</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

          <div className="rounded-lg flex-col bg-black h-72 flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
              src="/apdoc2.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>
          <p className="paragraph text-gray-500 mt-8">
            I have successfully designed and implemented an efficient clinic
            information system with POS that integrates seamlessly with a
            user-friendly interface.
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

          <div className="flex flex-col mb-32">
            <a
              target="_blank"
              href="https://apdoc.id/"
              className="card-hover mt-16 p-4 px-8 rounded-lg bg-amber-500 border border-amber-100 text-black hover:text-white font-bold text-lg cursor-pointer"
            >
              Try it yourself - apdoc.id
            </a>
            <Link
              href="/showcase"
              className="card-hover mt-4 p-4 px-8 rounded-lg bg-indigo-500 border border-indigo-100 text-black hover:text-white font-bold text-lg cursor-pointer"
            >
              Back To Topic - Portofolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
