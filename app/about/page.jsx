"use client";
import Link from "next/link";
import SkillBadge from "../../components/skill_badge";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      url: "https://flutter.dev",
      alt: "flutter",
    },
    {
      img: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
      url: "https://dart.dev",
      alt: "dart",
    },
    {
      img: "https://plugins.jetbrains.com/files/12129/261752/icon/pluginIcon.png",
      url: "https://bloclibrary.dev/#/",
      alt: "bloc",
    },
    {
      img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      url: "https://www.sqlite.org/",
      alt: "sqlite",
    },
    {
      img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      url: "https://firebase.google.com/",
      alt: "firebase",
    },
    {
      img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      url: "https://cloud.google.com",
      alt: "gcp",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      alt: "javascript",
    },

    {
      img: "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
      url: "https://nextjs.org/",
      alt: "nextjs",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      url: "https://reactjs.org/",
      alt: "react",
    },
    {
      img: "https://reactnative.dev/img/header_logo.svg",
      url: "https://reactnative.dev/",
      alt: "reactnative",
    },
    {
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      url: "https://tailwindcss.com/",
      alt: "tailwind",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      url: "https://getbootstrap.com",
      alt: "bootstrap",
    },
    {
      img: "https://www.chartjs.org/media/logo-title.svg",
      url: "https://www.chartjs.org",
      alt: "chartjs",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      url: "https://www.php.net",
      alt: "php",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      url: "https://laravel.com/",
      alt: "laravel",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
      url: "https://codeigniter.com",
      alt: "codeigniter",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      url: "https://www.w3.org/html/",
      alt: "html5",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      url: "https://www.w3schools.com/css/",
      alt: "css3",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      url: "https://www.docker.com/",
      alt: "docker",
    },
    {
      img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      url: "https://www.figma.com/",
      alt: "figma",
    },
    {
      img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      url: "https://git-scm.com/",
      alt: "git",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      url: "https://www.java.com",
      alt: "java",
    },

    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      url: "https://www.w3schools.com/cpp/",
      alt: "cplusplus",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      url: "https://www.linux.org/",
      alt: "linux",
    },
    {
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      url: "https://postman.com",
      alt: "postman",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
      url: "https://www.arduino.cc/",
      alt: "arduino",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      url: "https://www.mongodb.com/",
      alt: "mongodb",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      url: "https://www.nginx.com",
      alt: "nginx",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      url: "https://nodejs.org",
      alt: "nodejs",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      url: "https://webpack.js.org",
      alt: "webpack",
    },
  ];

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
              <Link
                href={"/career"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Career
              </Link>
              <Link
                href={"/connect"}
                className="text-lg flex place-items-center gap-2 pt-8 px-2 lg:px-6"
              >
                Connect
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
          <div className="flex flex-col w-screen px-5 lg:px-0 lg:w-[640px] mt-32">
            {/* <p className="opacity-25 leading-relaxed mb-4 uppercase tracking-widest">
            Frontend Developer
          </p> */}
            <h1 className="text-5xl lg:text-6xl mb-8 font-semibold">
              Introduction
            </h1>
            {/* <h1 className="text-3xl mb-6 font-semibold">Passion and Purpose</h1> */}

            <div className=" text-gray-500 text- flex flex-col gap-4 leading-relaxed tracking-wide">
              <p className="">
                I'm Muhammad Advie Rifaldy, an IT student from Indonesia, with a
                strong dedication to frontend development. Over the past 5
                years, I've passionately nurtured my love for programming,
                building a solid foundation in this field.
              </p>
              <p className="">
                My skill set is complemented by a keen problem-solving aptitude,
                enabling me to assess challenges, pinpoint areas in need of
                enhancement, and adeptly apply solutions.
              </p>
            </div>

            <h1 className="text-3xl mb-8 font-semibold mt-24">
              Technical Skills
            </h1>

            <div className="opacity-80 text-justify text-gray-500 text-sm flex flex-col gap-4 leading-relaxed tracking-wide">
              <div className="flex">
                <div className="flex w-full flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <SkillBadge
                      key={index}
                      img={skill.img}
                      url={skill.url}
                      alt={skill.alt}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="opacity-80 pt-4 flex gap-2">
              <p className="bg-gray-900 bg-opacity-80 rounded-lg card-hover border border-transparent">
                <img
                  className="hidden lg:block"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=00000000&card_width=800"
                  alt="madvier83"
                />
                <img
                  className="block lg:hidden"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=00000000&card_width=400"
                  alt="madvier83"
                />
              </p>
            </div>

            <h1 className="text-3xl mb-8 font-semibold mt-24">Achievement</h1>

            <div className="opacity-80 p-4 flex gap-2 bg-gray-900 bg-opacity-80 rounded-lg card-hover border border-transparent">
              <p align="left">
                {" "}
                <a href="https://github.com/ryo-ma/github-profile-trophy">
                  <img
                    src="https://github-profile-trophy.vercel.app/?username=madvier83&title=MultiLanguage,Repositories,Experience,Commits,Stars,Followers&theme=matrix&no-bg=true&no-frame=true"
                    alt="madvier83"
                  />
                </a>{" "}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <div className="card-hover w-40 text-xs text-gray-500 bg-gray-900 bg-opacity-80">
                <img
                  src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkODlvaTAwMDE3MDlpZjdsdWxhNHV5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0="
                  alt=""
                />
                <p className="px-4 pb-2">Hacktoberfest 2022: Level 2</p>
              </div>
              <div className="card-hover w-40 text-xs text-gray-500 bg-gray-900 bg-opacity-80">
                <img
                  src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkNmZycXowMTgxMDltaGFleGpmczRwIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0="
                  alt=""
                />
                <p className="px-4 pb-2">Hacktoberfest 2022: Level 1</p>
              </div>
              <div className="card-hover w-40 text-xs text-gray-500 bg-gray-900 bg-opacity-80">
                <img
                  src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhlcTN6OWMwMzU3MDlsM2Z4OTluOHg2IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0="
                  alt=""
                />
                <p className="px-4 pb-2">Hacktoberfest 2022: Registered</p>
              </div>
            </div>

            <Link
              href="/showcase"
              className="card-hover my-32 p-4 px-8 rounded-lg bg-indigo-700 border border-indigo-100 text-white hover:text-white font-bold text-lg cursor-pointer"
            >
              Next Topic - Portofolio
            </Link>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
