import React from "react";
import styles from "./CssBody.module.css";
import TwinkleCard from "./TwinkleCard";

export default function CssBody() {
  return (
    <section className={styles.main}>
      <TwinkleCard />
    </section>
  );
}
