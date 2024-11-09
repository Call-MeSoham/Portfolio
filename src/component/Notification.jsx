import { FaLinkedinIn, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { about } from "../constant/about";

const Notification = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 rounded-r-lg shadow-lg z-50">
      <div className="flex flex-col items-center space-y-4">
        {about?.social.map((item) => (
          <a
            href={item.value}
            target="_blank"
            rel="noopener noreferrer"
            className={`{text-gray-200 ${
              item.key === "linkedin"
                ? "hover:text-blue-800"
                : item.key === "instagram"
                ? "hover:text-pink-500"
                : item.key === "github"
                ? "hover:text-gray-400"
                : item.key === "mail"
                ? "hover:text-red-500"
                : "hover:text-black"
            } transition-colors}`}
            key={item.key}
          >
            {item.key === "linkedin" ? (
              <FaLinkedinIn className="cursor-pointer text-3xl" />
            ) : item.key === "instagram" ? (
              <FaInstagram className="cursor-pointer text-3xl" />
            ) : item.key === "github" ? (
              <FaGithub className="cursor-pointer text-3xl" />
            ) : item.key === "mail" ? (
              <SiGmail className="cursor-pointer text-3xl" />
            ) : (
              <FaMedium className="cursor-pointer text-3xl" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Notification;
