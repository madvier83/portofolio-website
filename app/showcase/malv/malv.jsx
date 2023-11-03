import SkillBadge from "@app/components/skill_badge";
import Image from "next/image";
import Link from "next/link";

function MALViewer() {
  const malStack = [
    {
      img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      url: "https://firebase.google.com/",
      alt: "firebase",
    },
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
  ];

  return (
    <div className=" mt-4 flex flex-col gap-2  bg-opacity-60 rounded-lg ">
      <div className="rounded-lg flex-col bg-black h-72 flex items-center justify-center pt-10 overflow-hidden">
        <Image
          className="flex-shrink-0 bg-cover min-w-full min-h-full"
          src="/mal.png"
          alt=""
          width={1050}
          height={1401}
        />
      </div>
      <div className="flex flex-col px-2">
        <h2 className="text-3xl mt-2 font-bold leading-relaxed tracking-wide">
          MyAnimelist Viewer
        </h2>
        <p className="text-gray-500 mt-2 leading-relaxed tracking-wide">
          MyAnimeList Viewer is a replica of the popular MyAnimeList website,
          used by anime and movie fans to search for and manage their watched
          anime list.
        </p>
        <div className="flex flex-wrap gap-4 justify-between mt-4">
          <div className="flex gap-2">
            {malStack.map((skill, index) => (
              <SkillBadge
                key={index}
                img={skill.img}
                url={skill.url}
                alt={skill.alt}
              />
            ))}
          </div>
          <Link
            href="/showcase/malv"
            className="card-hover p-4 px-8 rounded-lg font-bold bg-blue-600 border border-blue-100 text-lg cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MALViewer;
