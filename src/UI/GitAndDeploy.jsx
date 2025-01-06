import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { useState } from "react";

const HoverIcon = ({ icon: Icon, text, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-200 hover:text-accent relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon />
      {isHovered && (
        <span className="absolute top-[-30px] bg-gray-900 text-white text-xs p-1 rounded shadow-lg whitespace-nowrap z-50">
          {text}
        </span>
      )}
    </a>
  );
};

const GitAndDeploy = ({ gitHub, deployedLink }) => {
  return (
    <div className="flex items-center justify-around gap-4">
      <HoverIcon icon={FaGithub} text="GitHub Repository" link={gitHub} />
      <HoverIcon icon={MdWeb} text="Deployed Website" link={deployedLink} />
    </div>
  );
};

export default GitAndDeploy;
