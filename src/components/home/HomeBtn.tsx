import React from "react";
import styles from "./Button.module.css";

export default function HomeBtn() {
  return (
    <>
      <button className={styles.Btn}>
        <span className={styles.span}></span>홈 버튼
      </button>
    </>
  );
}
