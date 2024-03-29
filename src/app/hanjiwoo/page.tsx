import Introduce from "@/components/hanjiwoo/Introduce";
import Moeun from "@/components/projects/Moeun";
import Re_play from "@/components/projects/Re_play";
import Image from "next/image";
import React from "react";

export default function Hanjiwoo() {
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center p-24">
      <section className="flex flex-col justify-start bg-blue-400  p-[10px] gap-[10px]">
        <h1 className="bg-red-300 w-[90vw] h-[100px] text-[70px]">한지우</h1>
        <Introduce />
      </section>
    </main>
  );
}
