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
          <h1 className="text-6xl mb-8 font-semibold">Apdoc Clinic System</h1>
          {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

          <div className="rounded-lg flex-col bg-black h-96 flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full min-h-full rounded-lg"
              src="/apdoc2.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>
          <p className="paragraph text-gray-500 mt-8">
            I have accomplished the design and successful implementation of a
            highly efficient clinic information system with an integrated
            point-of-sale (POS) system that seamlessly integrated with a
            user-friendly interface.
          </p>
          {/* <p className="paragraph text-gray-500 mt-4">
            "MyAnimeList (MAL) Viewer" is an application created as a replica of
            MyAnimeList, a popular website used by anime and movie enthusiasts
            to search for and manage their watched anime list.
          </p> */}

          <h2 className="text-3xl mt-24 font-bold leading-relaxed tracking-wide">
            Key Features
          </h2>

          <p className="paragraph text-white mt-8">Role-based Admin Access</p>
          <p className="paragraph text-gray-500 mt-2">
            Role-based admin access management system that empowers your
            organization with comprehensive control and security over user
            permissions. Designed to streamline and enhance administrative
            operations, Role-based admin access ensures that your digital assets
            and sensitive information are safeguarded while enabling efficient
            collaboration and task delegation.
          </p>

          <div className="rounded-lg flex-col mt-8 bg-black flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full rounded-lg"
              src="/apdoc-db-1.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>

          <p className="paragraph text-white mt-12">Receipt Customization</p>
          <p className="paragraph text-gray-500 mt-2">
            The Receipt Customization feature is a versatile tool that empowers
            businesses to create, personalize, and fine-tune their receipts.
          </p>
          <p className="paragraph text-gray-500 mt-2">
            feature provides the flexibility to design and customize receipts to
            meet your unique branding, compliance, and record-keeping needs.
          </p>

          <div className="rounded-lg flex-col mt-8 bg-black flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full rounded-lg"
              src="/apdoc-db-2.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>

          <p className="paragraph text-white mt-12">
            Multiple Clinics Data Management
          </p>
          <p className="paragraph text-gray-500 mt-2">
            The Multiple Clinics Data Management feature is a versatile tool
            that empowers healthcare administrators and professionals to oversee
            and access data from multiple clinics or healthcare facilities
            within a single, centralized system. This feature streamlines data
            handling, reporting, and analytics across various clinic locations,
            offering a comprehensive and unified solution.
          </p>

          <div className="rounded-lg flex-col mt-8 bg-black flex items-center justify-start overflow-hidden">
            <Image
              className="flex-shrink-0 bg-cover min-w-full rounded-lg"
              src="/apdoc-db-3.png"
              alt=""
              width={1050}
              height={1401}
            />
          </div>

          <p className="paragraph text-gray-500 mt-8">
            In addition to the features mentioned, we have also successfully
            implemented critical components, including data management, patient
            queue management, purchase order management, and inventory
            management, within our comprehensive system. You're invited to
            explore these features and experience their seamless functionality
            by clicking the link provided below.
          </p>
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
              className="card-hover mt-4 p-4 px-8 rounded-lg bg-indigo-700 border border-indigo-100 text-white hover:text-white font-bold text-lg cursor-pointer"
            >
              Back To Topic - Portofolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
