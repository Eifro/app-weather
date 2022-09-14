import { Link } from "react-router-dom";

export default function Links() {
  let links = [
    { name: "HOME", link: "/home" },
    { name: "ABOUT", link: "/about" },
  ];

  return (
    <div className="links flex items-center mt-5 md:mt-0 justify-center gap-5">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.link}
          className="text-white text-xl font-bold ease-in duration-500 hover:text-zinc-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
