import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {

    return (
        <div className={styles.container}>
            <span> <a href = "#about">ABOUT</a></span>
            <span><a href = "#projects">PROJECTS</a></span>
            <span><a href = "#contact">CONTACT</a></span>
        </div>
    )
}