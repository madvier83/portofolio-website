import SkillBadge from "@app/components/skill_badge";
import Image from "next/image";
import Link from "next/link";

function Sejati() {
  const sejatiStack = [
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
      url: "https://laravel.com/",
      alt: "laravel",
    },
    {
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      url: "https://getbootstrap.com",
      alt: "bootstrap",
    },
    {
      img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      url: "https://cloud.google.com",
      alt: "gcp",
    },
  ];

  return (
    <div className="mt-24 flex flex-col gap-2  bg-opacity-60 rounded-lg">
      <div className="rounded-lg flex-col bg-black h-72 flex items-center justify- overflow-hidden">
        <Image
          className="flex-shrink-0 bg-cover min-w-full min-h-full"
          src="/sejati.png"
          alt=""
          width={1050}
          height={1401}
        />
      </div>
      <div className="flex flex-col px-2">
        <h2 className="text-3xl mt-2 font-bold leading-relaxed tracking-wide">
          Sejati Life
        </h2>
        <p className="text-gray-500 mt-2 leading-relaxed tracking-wide">
          Church Learning Management System. The application includes features
          such as content customization, course completion, and daily quotes
          from pastor.
        </p>

        <div className="flex flex-wrap gap-4 justify-between mt-4">
          <div className="flex gap-2">
            {sejatiStack.map((skill, index) => (
              <SkillBadge
                key={index}
                img={skill.img}
                url={skill.url}
                alt={skill.alt}
              />
            ))}
          </div>
          <Link
            href="/showcase/sejati"
            className="card-hover p-4 px-8 rounded-lg font-bold bg-blue-600 border border-blue-100 text-lg cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sejati;
