import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-800 text-white focus:outline-none"
      >
        <span>{i18n?.language?.toUpperCase()}</span>
        {isOpen ? (
          <FaChevronUp className="ml-2" />
        ) : (
          <FaChevronDown className="ml-2" />
        )}
      </button>
      <div
        className={`absolute left-0 top-full mt-1 w-48 origin-top-left bg-gray-800 text-white border border-gray-300 rounded-lg shadow-lg transition-transform transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
        }`}
      >
        <select
          onChange={changeLanguage}
          value={i18n.language}
          className="w-full p-2 bg-gray-800 text-white border-none rounded-lg focus:outline-none"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="bn">বাংলা</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="nl">Nederlands</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
