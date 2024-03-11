import React from "react";
import styles from "./Button.module.css";

export default function HeaderBtn({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <button
      style={{ whiteSpace: "nowrap", backgroundColor: `${color}` }}
      className="border-4 text-white border-black w-[120px] h-[60px] rounded-xl hover:scale-105"
    >
      <span className=""></span>
      {text}
    </button>
  );
}
