import { FaLinkedinIn, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { about } from "../constant/about";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="text-sm">
            © {year} Soham Guha
          </p>
        </div>
        <div className="footer-right">
          {about?.social.map((item) => (
            <a
              href={item.value}
              className="text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              key={item.key}
            >
              {item.key === "linkedin" ? (
                <FaLinkedinIn className="cursor-pointer h-6 w-6" />
              ) : item.key === "instagram" ? (
                <FaInstagram className="cursor-pointer h-6 w-6" />
              ) : item.key === "github" ? (
                <FaGithub className="cursor-pointer h-6 w-6" />
              ) : item.key === "mail" ? (
                <SiGmail className="cursor-pointer h-6 w-6" />
              ) : (
                <FaMedium className="cursor-pointer h-6 w-6" />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
