import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import SIMON from "../../Img/SIMON.jpg";
import DEL_LUCERO from "../../Img/DEL_LUCERO.jpg";

export const ProjectCard = () => {
const [projects, setProjects] = useState([
    {
        title: "DEL LUCERO",
        img: DEL_LUCERO,
        description: "Business app. Created to keep track of clients, orders, expenses, products, etc. Made with react and Sequelize.",
        hover: true,
        url: "https://dellucero.vercel.app/"
    },
    { 
        title: "SIMON",
        img: SIMON,
        description: "Classic simon game. Made with react and typescript.",
        hover: true,
        url: "https://simonthegame.vercel.app/"
}]);

const handleHoverIn = (e) => {
    setProjects(
    projects.map((p) => {
        if (p.title === e.target.id) {
            return {...p, hover: false}
        } else {
            return p
        }
    })
    )
}

const handleHoverOut = (e) => {
    setProjects(
    projects.map((p) => {
        if (p.title === e.target.id) {
            return {...p, hover: true}
        } else {
            return p
        }
    })
    )
}

    return (
        <div className={styles.outer}>
        <h1>Projects I've Worked In</h1>
        <div className={styles.container}>
            {projects?.map((p) => {
                return(
                    <div key = {p.title} className = {styles.projects}>
                <a href = {p.url} target = "_blank"><div className={styles.projectsimage} key = {p.title} id= {p.title} onMouseEnter = {handleHoverIn} onMouseLeave={handleHoverOut}>   
                {p.hover ?
                    <img src={p.img}></img>
                    : <p>{p.description}</p>
                }
                </div></a>
                <div>
                <h3>{p.title}</h3>
                </div>
                </div>
                )
            })}
        </div>
        </div>
    )
};