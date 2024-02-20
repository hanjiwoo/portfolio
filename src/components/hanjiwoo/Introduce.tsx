import Image from "next/image";
import React from "react";

export default function Introduce() {
  return (
    <div className=" bg-green-200 flex gap-[20px]">
      <img src="/나의스아진.jpg" alt="내사진" width={400} height={900} />{" "}
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
          코딩을 사랑하는 남자입니다. 내일배움캠프의 빠른진도 속에서 지치고
          힘들기 보다는 코드의 신비함을 보며 감탄하고 기쁠때가 많았습니다.
          어쩌다가 프로젝트 업무가 제게 과중될때에도 업무 과중으로 인한
          스트레스보다 내가 이코드를 쳐볼수 있다는 기쁨과 충족감으로 오히려
          좋았습니다. 코드를 만들어 볼수록 제 실력이 늘고 있다는 그 고양감에
          웃으며 코딩을 했습니다. 저는 여기서 배움을 멈추지 않을것이고 그 배움을
          통해 성장하여 제가 들어갈 회사에 당당하고 역량이 출중한 개발자가 되고
          싶습니다.
        </p>
      </div>
    </div>
  );
}
