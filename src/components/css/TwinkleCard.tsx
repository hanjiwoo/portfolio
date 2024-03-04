"use client";
import React, { useRef, useState } from "react";
import styles from "./Twinkle.module.css";

export default function TwinkleCard() {
  const [deg, setDeg] = useState();
  const degRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    // console.log(offsetX, offsetY, "이거 확인");

    let rotateY = (-9 / 50) * +offsetX + 45;
    let rotateX = (9 / 50) * +offsetY - 45;
    if (degRef.current !== null && overlayRef.current !== null) {
      degRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      overlayRef.current.style.backgroundPosition = `${rotateX + rotateY}px`;
    }
  };
  const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (degRef.current && overlayRef.current !== null) {
      degRef.current.style.transform = "";
      overlayRef.current.style.backgroundPosition = "center";
    }
  };
  return (
    <div className={styles.main}>
      <h1>마우스오버</h1>
      <div
        ref={degRef}
        onMouseMove={(e) => mouseOver(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        id="card"
        className={styles.card}
      >
        {/* <img src="./나의스아진.jpg" /> */}
        <div ref={overlayRef} className={styles.overlay}></div>
      </div>
    </div>
  );
}
