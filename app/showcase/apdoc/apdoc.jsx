import SkillBadge from "@app/components/skill_badge";
import Image from "next/image";
import Link from "next/link";

function Apdoc() {
  const apdocStack = [
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      url: "https://laravel.com/",
      alt: "laravel",
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
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      url: "https://tailwindcss.com/",
      alt: "tailwind",
    },
  ];

  return (
    <div className="mt-24 flex flex-col gap-2  bg-opacity-60 rounded-lg">
      <div className="rounded-lg flex-col bg-black h-72 flex items-center justify- overflow-hidden">
        <Image
          className="flex-shrink-0 bg-cover min-w-full min-h-full"
          src="/apdoc2.png"
          alt=""
          width={1050}
          height={1401}
        />
      </div>
      <div className="flex flex-col px-2">
        <h2 className="text-3xl mt-2 font-bold leading-relaxed tracking-wide">
          Apdoc Clinic System
        </h2>
        <p className="text-gray-500 mt-2 leading-relaxed tracking-wide">
          The Best Solution for Managing Your Electronic Medical Records APDOC
          Clinic System is here to enhance the efficiency and management of your
          clinic.
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            {apdocStack.map((skill, index) => (
              <SkillBadge
                key={index}
                img={skill.img}
                url={skill.url}
                alt={skill.alt}
              />
            ))}
          </div>
          <Link
            href="/showcase/apdoc"
            className="card-hover p-4 px-8 rounded-lg font-bold bg-blue-600 border border-blue-100 text-lg cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Apdoc;
