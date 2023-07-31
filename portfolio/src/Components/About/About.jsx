import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div>
        <p>
          I am a high-class, elite, full-stack developer. I've been trained by
          the toughest, ugliest teachers in the northern lands. From Angkhmar to
          Blottmusk I am well known for being a tenacious, jolly fellow, with
          magical skills in coding.
        </p>
        <p>
          My areas of expertise are so many that it is impossible for me to name
          them all, but I can remark "variable naming" and "2-lines of code
          solutions" to mi extense repertoire.
        </p>
      </div>
    </div>
  );
};
