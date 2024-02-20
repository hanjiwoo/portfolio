"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-red-500 flex flex-between">
      <Link href="/" className="w-[200px] bg-blue-100">
        홈 버튼
      </Link>
      <Link href="/hanjiwoo" className="w-[200px] bg-pink-300">
        한지우소개
      </Link>
      <Link href="/projects" className="w-[200px] bg-yellow-300">
        참여프로젝트
      </Link>
    </div>
  );
}
