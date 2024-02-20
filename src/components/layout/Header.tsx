"use client";
import Link from "next/link";
import React from "react";
import HeaderBtn from "../home/HeaderBtn";

export default function Header() {
  return (
    <div className="bg-white flex  items-center h-[100px] gap-5">
      <Link href="/">
        <HeaderBtn text="홈버튼" color="#FF6C6C" />
      </Link>
      <Link href="/hanjiwoo">
        <HeaderBtn text="한지우소개" color="#716CFF" />
      </Link>
      <Link href="/projects">
        <HeaderBtn text="참여프로젝트" color="#009300" />
      </Link>
    </div>
  );
}
