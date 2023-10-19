import React from "react";
import instagram from "../../Img/instagram.gif";
import facebook from "../../Img/facebook.gif";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={facebook}></img>
      <img src={instagram}></img>
    </div>
  );
};
