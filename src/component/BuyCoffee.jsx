import { SiBuymeacoffee } from "react-icons/si";

const BuyCoffee = () => {
  return (
    <div className="fixed bottom-[13rem] right-6 p-4 bg-gray-800 rounded-full shadow-lg z-50">
      <a
        href="https://buymeacoffee.com/msouvik38a"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-white text-2xl hover:text-gray-300 transition-colors"
      >
        <SiBuymeacoffee />
      </a>
    </div>
  );
};

export default BuyCoffee;
