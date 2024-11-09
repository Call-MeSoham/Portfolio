import { GrConnect } from "react-icons/gr";

const Connect = () => {
  return (
    <div className="fixed bottom-20 right-6 p-4 bg-gray-800 rounded-full shadow-lg z-50">
      <a
        href="https://topmate.io/embed/profile/souvikmitra?theme=D5534D"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-white text-2xl hover:text-gray-300 transition-colors"
      >
        <GrConnect />
      </a>
    </div>
  );
};

export default Connect;
