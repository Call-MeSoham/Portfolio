import { useState } from "react";
import { certificates } from "../constant/certificate";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NeonGradientCard } from "../lib/neon-gradient-card";

const Certificate = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Helmet>
        <title>Article</title>
        <meta
          name="description"
          content="Explore Souvik Mitra's certificate details"
        />
        <link
          rel="canonical"
          href="https://thecodemitter.netlify.app/certificate"
        />
      </Helmet>
      <div className="container mx-auto p-6 mt-20 mb-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          {t("mycertificate")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <NeonGradientCard
              key={cert.id}
              className="max-w-sm items-center justify-center text-center"
            >
              <div
                key={cert.id}
                className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-700"
                onClick={() => openModal(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-32 w-full object-cover rounded-lg mb-4"
                  loading="eager"
                  title={cert.name}
                  height="100px"
                  width="100px"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {cert.name}
                </h2>
                <p className="text-gray-600 mt-2">{cert.description}</p>
              </div>
            </NeonGradientCard>
          ))}
        </div>
        {selectedCertificate && (
          <Modal
            isOpen={!!selectedCertificate}
            onClose={closeModal}
            image={selectedCertificate.image}
            title={selectedCertificate.name}
            description={selectedCertificate.description}
          />
        )}
      </div>
    </>
  );
};

export default Certificate;
