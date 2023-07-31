import React from "react";
import styles from "./ProjectCard.module.css";
import PERRITOS from "../../Img/PERRITOS.jpg";
import BODU_GEMU from "../../Img/BODU GEMU.jpg";

export const ProjectCard = () => {
    const projects = [
        {
            title: "BODU GEMU",
            img: BODU_GEMU,
        },
        { 
            title: "PERRITOS",
            img: PERRITOS
}]

    return (
        <div className={styles.outer}>
        <h1>Projects I've Worked In</h1>
        <div className={styles.container}>
            {projects?.map((p) => {
                return(
                <div className={styles.projects}>
                    <img src={p.img}></img>
                <h3>{p.title}</h3>
                </div>
                )
            })}
        </div>
        </div>
    )
};