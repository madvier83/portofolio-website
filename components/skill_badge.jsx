function SkillBadge({ url, img, alt }) {
  return (
    <a
      className="bg-gray-900 bg-opacity-90 rounded-lg w-16 h-16 py-3 flex item-center justify-center card-hover"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {" "}
      <img src={img} alt={alt} />{" "}
    </a>
  );
}

export default SkillBadge;
