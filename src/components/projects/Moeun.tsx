import Image from "next/image";
import React from "react";
import photo from "../../assets/moeum.png";
export default function Moeun() {
  return (
    <div className=" bg-green-200 flex flex-col gap-[20px]">
      {" "}
      <Image src={photo} alt="리플레이" width={400} height={800} />
      <div className="flex flex-col">
        {" "}
        <h2 className="text-[30px] ">모두의모음(모음)</h2>
        <strong className="text-blue-500">
          <a href="https://www.moeum.store/" target="_blank">
            https://www.moeum.store/ (보러가기)
          </a>
        </strong>
        <strong className="text-blue-500">
          <a href="https://mo-eum.vercel.app/" target="_blank">
            https://mo-eum.vercel.app/ (보러가기)
          </a>
        </strong>
        <p>
          주변의 가격이 저렴한 음식점을 소개시켜드리고 , 얇은지갑을 지켜드리는
          사이트
        </p>
      </div>
      <div className="bg-orange-200 flex flex-col gap-[10px]">
        <h3 className="text-[30px] ">구현한기능</h3>
        <p>
          {" "}
          - 착한가게 오픈API 통신 리액트 쿼리를 사용 , 공공데이터포털에서
          제공하는 착한가게 오픈 API 통신으로 전국의 착한가게 정보를 얻어 쿼리의
          캐시데이터로써 저장된 착한가게 데이터를 유저에게 제공
        </p>{" "}
        <p>
          - firebase와 tanstackQuery를 이용한 CRUD firebase와의 비동기 통신에
          tanstackQuery를 이용 하고 CRUD 기능을 구현하여 특정한 착한가게에 대한
          후기 좋아요 게시글등을 남길수 있는 기능제공 - 카카오맵 API 적용
        </p>{" "}
        <p>
          해당사이트를 이용하는 유저들에게 로드뷰나 지도같은 좀더 상세한 정보를
          알려주기위해 카카오맵 API적용 맵페이지에서는 원하는 장소 인근의 모든
          착한가게를 한꺼번에 볼수있는 지도를 제공하고 디테일페이지에서는 원하는
          가게 한곳의 지리적위치와 로드뷰를 확인할수 있음 - 좋아요 기능 구현
        </p>{" "}
        <p>
          특정가게에 좋아요를 남길수 있는 기능을 두어서 가게별로 좋아요 갯수를
          유저들이 확인할수 있게하여 가게에 대한 신뢰도를 높임 - 유저의 현재위치
          정보를 통한 주소검색
        </p>{" "}
        <p>
          javascript의 내장기능인 navigator를 이용 유저의 현재위치를 파악하고
          보다 빠르게 그 근처의 착한가게 정보를 빠르게 제공하여 UX를 높임 -
          리덕스툴킷을 이용한 유저정보 전역관리
        </p>{" "}
        <p>
          회원가입후 로그인한 유저를 위한 추가 기능을 제공하기 위해 유저정보를
          툴킷으로 전역관리함 - firebase의 storage를 이용 이미지파일 업로드 및
          다운로드
        </p>{" "}
        <p>
          게시글을 남길수 있는 커뮤니티 페이지에서 게시글에 대한 몰입도를
          증가시키기위해 이미지파일 업로드 기능을 구현 - 회원가입 및 로그인
          유저의 회원정보 변경
        </p>{" "}
        <p>
          경우에 따라 유저정보를 바꿀수 있도록 마이페이지에 회원정보변경기능
          구현 - firebase를 통한 pagenation 적용
        </p>{" "}
        <p>
          커뮤니티 페이지에서 유저들이 작성한 게시글들을 좀더 정돈되서 제공할수
          있도록 pagenation구현 - next-auth를 이용한 카카오로그인 구현
        </p>{" "}
        <p>
          유저들의 편의 제공을 위해 많은 사람들이 이용하는 카카오로그인을
          구현하여 번거로운 회원가입 없이도 빠르게 사이트를 이용하실수 있도록 함
          - puppeteer를 이용한 wep-scrapping(크롤링)으로 이미지 url을 가진
          DB구축
        </p>{" "}
        <p>
          UI를 높여서 유저들의 몰입감을 채우기위해 착한가게들의 정보가 담긴
          착한가게카드에 각각의 가게에 대한 사진을 보여줄수 있도록
          wep-scrapping을 통한 이미지URl DB를 생성 해당 DB는 깃헙에 json형식으로
          보관
        </p>{" "}
        <p></p>
      </div>{" "}
    </div>
  );
}
