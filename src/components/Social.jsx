/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Social() {
  let links = [
    {
      name: "Linkedin",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/miguel-espiritu/",
    },
    { name: "Github", icon: faGithub, link: "https://github.com/Eifro" },
  ];

  return (
    <div className="social mt-8">
      <ul className="flex items-center justify-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.link}
              className="text-white text-3xl transition duration-600 ease-in hover:text-zinc-400"
              target='_blank'
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
