"use client";
import React, { useRef } from "react";
import styles from "./Piano.module.css";

export default function PianoBody() {
  const whiteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const gogo = e.currentTarget.style;
    gogo.transform = "scale(0.95)";
    gogo.border = "5px solid cyan";
    setTimeout(() => {
      gogo.transform = "";
      gogo.border = "";
    }, 100);
  };

  return (
    <section className={styles.main}>
      피아노(미완성)
      <section className="flex">
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>
        <div onClick={(e) => whiteClick(e)} className={styles.white}></div>

        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
        <p onClick={(e) => whiteClick(e)} className={styles.black}></p>
      </section>
    </section>
  );
}
