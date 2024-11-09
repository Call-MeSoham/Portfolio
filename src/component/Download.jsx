import { FiDownload } from "react-icons/fi";
import pdf from "../assets/pdf/Soham_Guha_Resume.pdf";

const Download = () => {
  const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Soham-Guha-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="fixed bottom-[9rem] right-6 p-4 bg-gray-800 rounded-full shadow-lg z-50">
      <FiDownload
        onClick={onButtonClick}
        className="cursor-pointer flex items-center justify-center text-white text-2xl hover:text-gray-300 transition-colors"
      />
    </div>
  );
};

export default Download;
