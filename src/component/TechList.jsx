import { useEffect, useState } from "react";

const TechList = () => {
  const [visible, setVisible] = useState(false);
  const technologies = [
    "DSA",
    "JAVA (OOPs)",
    "SQL",
    "JavaScript",
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 1000);
  }, []);

  return (
    <div className="tech-list mt-8 lg:mt-12 text-white">
      {visible && (
        <ul className="flex-wrap items-center list-none space-x-4 inline-flex" style={{display: "ruby-text"}}>
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-lg font-semibold"
              style={{
                animation: `fadeIn 0.5s ease-in-out ${index * 0.3}s forwards`,
              }}
            >
              {tech}
              {index < technologies.length - 1 && " | "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TechList;
