import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <span>ABOUT</span>
            <span>PROJECTS</span>
            <span>CONTACT</span>
        </div>
    )
}