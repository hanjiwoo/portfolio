import Image from "next/image";
import React from "react";
import photo from "../../assets/나의스아진.jpg";
export default function Introduce() {
  return (
    <div className=" bg-green-200 flex gap-[20px]">
      <Image src={photo} alt="내사진" width={400} height={900} />{" "}
      <div className="">
        <h2 className="text-[30px] ">한지우</h2>
        <strong>생년월일 </strong>
        <p>1990년 4월 16일</p> <strong>학력 </strong>
        <p>경희대학교 물리학과 중퇴</p>
        <strong>부트캠프</strong>
        <p>내일배움캠프(2023.10~2024.2)</p>
        <strong>SKILL</strong>
        <p>javascript , react , next.js , typescript</p>
        <strong>자기소개</strong>
        <p>
          코딩이 즐겁고 열의가 가득한 신입입니다. 심오한 개발의 세계에 더욱
          빠져들고 싶습니다. 감사합니다{" "}
        </p>
      </div>
    </div>
  );
}
