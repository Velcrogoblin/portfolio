import React from "react";
import styles from "./SkillCard.module.css";

export const SkillCard = () => {
  const skills = [
    {
      img: "",
      title: "DESIGN",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effecs"],
    },
    {
      img: "",
      title: "FRONT-END",
      skills: ["HTML", "CSS", "React", "Redux", "TypeScript"],
    },
    {
      img: "",
      title: "BACK-END",
      skills: ["NodeJs", "Express", "Sequelize", "Postgresql"],
    },
  ];

  return (
    <div className={styles.outer}>
      <h1>My Tools</h1>
      <div className={styles.container}>
        {skills?.map((s) => {
          return (
            <div key={s.title} className={styles.skills}>
              <h3>{s?.title}</h3>
              {s.skills?.map((skill) => {
                return <p key={skill}>{skill}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
