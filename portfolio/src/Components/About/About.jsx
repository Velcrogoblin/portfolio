import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div>
        <p>
          I've loved coding since I was a kid. I used to get into DOS files to modify parameters to make my games work on the old PC I had. I have a good logical way of thinking when it comes to solving problems, and at the same time always looking for ways to improve my skills. 
        </p>
        <p>
          Apart from coding I love art and design and have worked as an illustrator and designer for 15 years.
        </p>
      </div>
    </div>
  );
};
