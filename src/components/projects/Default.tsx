"use client";
import Image from "next/image";
import React from "react";
import replay from "../../assets/리플레이.png";
import moeum from "../../assets/moeum.png";

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
        <Image src={replay} width={200} alt="리플레이" />
        리플레이
      </p>
      <p
        className="
bg-black text-white cursor-pointer"
        onClick={(e) => MoveToDetail(e)}
        id="2"
      >
        <Image src={moeum} width={200} alt="모음" />
        모음
      </p>
    </div>
  );
}
