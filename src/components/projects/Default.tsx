"use client";
import React from "react";

export default function Default({
  MoveToDetail,
}: {
  MoveToDetail: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}) {
  return (
    <div className="flex gap-10">
      <p
        className="
bg-black text-white cursor-pointer"
        onClick={(e) => MoveToDetail(e)}
        id="1"
      >
        <img src="/리플레이.png" width={200} alt="리플레이" />
        리플레이
      </p>
      <p
        className="
bg-black text-white cursor-pointer"
        onClick={(e) => MoveToDetail(e)}
        id="2"
      >
        <img src="/moeum.png" width={200} alt="모음" />
        모음
      </p>
    </div>
  );
}
