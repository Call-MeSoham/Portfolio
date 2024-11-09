import { Helmet } from "react-helmet-async";
import profileLogo from "../assets/profile2.jpg";
import { about } from "../constant/about";
import TechList from "./TechList";
import { useTranslation } from "react-i18next";
import TypingAnimation from "../lib/typing-animation";
import BoxReveal from "../lib/box-reveal";
import ShinyButton from "../lib/shiny-button";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Explore Souvik Mitra's Profile page"
        />
        <link rel="canonical" href="https://thecodemitter.netlify.app/" />
      </Helmet>
      <div className="container mx-auto p-6 position-format">
        <div className="flex flex-col lg:flex-row items-center h-screen p-4 lg:p-8">
          <div className="lg:w-1/2 lg:text-left text-center">
            <div className="text-4xl md:text-4xl sm:text-4xl xl:text-5xl 2xl:text-5xl lg:text-5xl font-bold mb-4">
              <div className="wave-animation inline-block">
                <span className="text-white">Hi, I am{" "}</span>
                <span className="text-slate-600">
                  <TypingAnimation text={about.name} />
                  <br />{" "}
                  <span className="font-semibold xl:text-3xl 2xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl">
                    {about.role}
                  </span>
                </span>
              </div>
            </div>
            <div className="text-lg lg:text-xl font-light text-slate-500 wave-animation">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>{about.description}</p>
              </BoxReveal>
            </div>
            <TechList />
            <br />
            <a
              href="mailto:sohamguha333@gmail.com"
              target="_blank"
            >
              <ShinyButton text={t("connect")} className="" />
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={profileLogo}
              alt="Profile"
              className="profile-image rounded-full"
              loading="eager"
              title="Souvik Mitra (THECODEMITTER) profile picture"
              height="300px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
