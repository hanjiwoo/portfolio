"use client";
import React, { useState } from "react";
import replay from "../../assets/리플레이.png";
import moeum from "../../assets/moeum.png";
import Image from "next/image";
import Default from "@/components/projects/Default";
import Re_play from "@/components/projects/Re_play";
import Moeun from "@/components/projects/Moeun";
export default function Projects() {
  const [projects, setProjects] = useState("0");
  const MoveToDetail = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    // console.log(e.currentTarget.id, "확인");
    setProjects(e.currentTarget.id);
  };

  return (
    <main className="flex flex-row ">
      <section className="bg-purple-400 w-[10vw] flex flex-col gap-[10px] ">
        <p
          className="
        bg-black text-white cursor-pointer"
          onClick={(e) => MoveToDetail(e)}
          id="0"
        >
          참여 프로젝트
        </p>
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
      </section>
      <section className="bg-blue-100 w-[95vw]  flex flex-col justify-start items-center p-24">
        <div className="bg-red-100 w-11/12 ">
          {projects === "0" && <Default MoveToDetail={MoveToDetail} />}
          {projects === "1" && <Re_play />}
          {projects === "2" && <Moeun />}
        </div>
      </section>
    </main>
  );
}
