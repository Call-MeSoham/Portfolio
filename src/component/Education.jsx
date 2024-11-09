import { education } from "../constant/education";
import clgLOGO from "../assets/College.jpg";
import schoolLOGO from "../assets/School.jpg";
import { useTranslation } from "react-i18next";
import WordPullUp from "../lib/word-pull-up";
import SlightFlip from "../lib/slight-flip";
import BlurIn from "../lib/blur-in";

const Education = () => {
  const { t } = useTranslation();
  return (
    <> 
        <title>Education</title>
        <meta name="description" content="Explore Souvik Mitra's projects" />
        <link
          rel="canonical"
          href="https://thecodemitter.netlify.app/project"
        />
      <div className="container mx-auto p-6 mt-20 mb-20 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">
          {t("myeducation")}
        </h1>
        <div className="relative">
          {education.map((education, index) => (
            <section key={index} className=" dark:text-white">
              <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                  <div className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-[full] before:h-0.5 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                      <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600 flex justify-center">
                        <img
                          src={
                            education.institution == "Narula Institute of Technology"
                              ? clgLOGO
                              : schoolLOGO
                          }
                          alt={`${education.institution} Logo`}
                          className="h-16 w-16 mr-6 rounded-full border-2 border-gray-300 shadow-2xl bg-white items-center"
                          loading="eager"
                          title={education.title}
                          height="100px"
                          width="100px"
                        />
                      </span>
                      <h3 className="text-3xl font-semibold text-center">
                        <SlightFlip
                          className="text-2xl text-left font-bold tracking-[-0.1em] w-12 light:text-black dark:text-white"
                          word={education.institution}
                        />
                      </h3>
                      <br />
                      <span className="text-sm text-center font-bold tracking-wider uppercase dark:text-gray-300">
                        <WordPullUp words={education.semester} />
                      </span>
                      <br />
                      <span className="text-sm text-center font-bold tracking-wider uppercase dark:text-gray-300">
                        <WordPullUp words={education.grade} />
                      </span>
                      <br />
                      <span className="text-sm text-center font-bold tracking-wider uppercase dark:text-gray-300">
                        <WordPullUp words={education.dates} />
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                      {education.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
                        >
                          <p className="mt-3">
                            <BlurIn word={point} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
