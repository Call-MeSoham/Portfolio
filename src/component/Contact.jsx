import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Article</title>
        <meta
          name="description"
          content="Explore Soham Guha's contact page"
        />
        <link
          rel="canonical"
          href="https://thesohamguha.netlify.app/contact"
        />
      </Helmet>
      <div className="flex flex-col lg:flex-row p-8 bg-gray-50 mt-20 mb-20 rounded-lg w-full">
        <div className="lg:w-full space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t("contactme")}
          </h1>

          <div className="space-y-4 text-left">
            <p className="text-lg text-gray-800">
              <strong>Name:</strong> Soham Guha
            </p>
            <p className="text-lg text-gray-800">
              <strong>Contact Number:</strong> +91-8240167057
            </p>
            <p className="text-lg text-gray-800">
              <strong>Hobbies:</strong> Painting, Cooking, Technical Writing
            </p>
          </div>

          <div className={`${isMobile ? 'space-y-4' : 'mt-60'}`}>
            <a
              href="https://wa.me/8240167057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg text-green-600 hover:text-green-500 transition-colors whatsapp-format"
            >
              <FaWhatsapp className="mr-3 text-2xl" /> Connect on WhatsApp
            </a>
          </div>
          <div className="lg:w-full mt-8 lg:mt-0 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.870516153986!2d88.22604327507808!3d22.5839456794837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f3fafaccb13%3A0x8471670ea670719b!2sSarkar%20Bagan%20Durga%20Mandir!5e0!3m2!1sen!2sin!4v1728531967425!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
