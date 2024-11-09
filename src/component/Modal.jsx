import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, image, title, description }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-5xl h-auto max-h-[90vh] overflow-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col lg:flex-row-reverse">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full lg:w-2/3 h-auto rounded-lg mb-4 lg:mb-0 object-cover"
              loading="eager"
              title={title}
              height=""
              width=""
            />
          </a>
          <div className="lg:w-1/3 lg:pl-6 flex flex-col justify-center mr-40">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
