"use client";
import Link from "next/link";
import React from "react";
import HeaderBtn from "../home/HeaderBtn";
import HomeBtn from "../home/HomeBtn";

export default function Header() {
  return (
    <div className="bg-white flex  items-center h-[100px] gap-5">
      <Link href="/">
        <HomeBtn />
      </Link>
      <Link href="/hanjiwoo">
        <HeaderBtn text="한지우소개" color="#716CFF" />
      </Link>
      <Link href="/projects">
        <HeaderBtn text="참여프로젝트" color="#009300" />
      </Link>
      <Link href="/canvas">
        <HeaderBtn text="그림판" color="red" />
      </Link>
      <Link href="/css">
        <HeaderBtn text="CSS" color="#6b3464" />
      </Link>
      <Link href="/piano">
        <HeaderBtn text="피아노" color="#ff20c7" />
      </Link>
    </div>
  );
}
