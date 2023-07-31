import React from "react";
import styles from "./SkillCard.module.css";

export const SkillCard = () => {
    const skills = [
        {
            img: "",
            title: "DESIGN",
            skills: ["Adobe Photoshop", "Adobe Illustrator"]
        },
        {
            img: "",
            title: "FRONT-END",
            skills: ["HTML", "CSS", "React", "Redux"]
        },
        {
            img: "",
            title: "BACK-END",
            skills: ["NodeJs", "Express", "Sequelize", "Postgresql"]
        }
    ]

    return (
        <div className={styles.outer}>
        <h1>My Tools</h1>
        <div className={styles.container}>
            {skills?.map((s) => {
                return(
                <div className={styles.skills}>
                <h3>{s?.title}</h3>
                {s.skills?.map((skill) => {
                    return (
                    <p>{skill}</p>
                    )
                })}
                </div>
                )
            })}
        </div>
        </div>
    )
};