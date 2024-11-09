import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const { t } = useTranslation();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="header-logo flex items-center">
        <Link to="/" className="flex items-center text-white hover:text-white">
          <span className="ml-2 text-xl font-bold">{t("welcome")}</span>
        </Link>
      </div>
      <div className="flex items-center">
        <LanguageSwitcher />
        {isMobile ? (
          <button
            className="focus:outline-none ml-4 bg-[#1a1a1a]"
            onClick={toggleSideNav}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        ) : (
          <nav className="header-nav flex space-x-4 ml-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/"
            >
              {t("home")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/education"
            >
              {t("education")}
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/project"
            >
              {t("project")}
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/certificate"
            >
              {t("certificate")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/contact"
            >
              {t("contact")}
            </NavLink>
          </nav>
        )}
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${
          isSideNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 bg-gray-900 h-full shadow-lg p-4">
          <button
            className="text-white focus:outline-none mb-4 bg-transparent"
            onClick={toggleSideNav}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="header-nav-submenu flex flex-col space-y-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/"
              onClick={toggleSideNav}
            >
              {t("home")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/project"
              onClick={toggleSideNav}
            >
              {t("project")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/certificate"
              onClick={toggleSideNav}
            >
              {t("certificate")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "hover:text-gray-400"
              }
              to="/contact"
              onClick={toggleSideNav}
            >
              {t("contact")}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
