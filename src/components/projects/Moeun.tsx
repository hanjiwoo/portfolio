import React from "react";

export default function Moeun() {
  return (
    <div className=" bg-green-200 flex flex-col gap-[20px]">
      {" "}
      <img src="/moeum.png" alt="리플레이" width={400} height={800} />
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
        <h4 className="text-[20px] ">1.착한가게 오픈API 통신</h4>
        <p>
          Tanstack-Query , fetch 사용 / 공공데이터포털에서 제공하는 착한가게
          오픈 API 통신으로 전국의 착한가게 정보를 얻어 쿼리의 캐시데이터로써
          저장된 착한가게 데이터를 유저에게 제공
        </p>{" "}
        <h4 className="text-[20px] ">2.가게후기 , 커뮤니티 게시글 및 댓글</h4>
        <p>
          DB - firebase , Tanstack-Query / 가게후기 , 커뮤니티게시글 및 댓글과
          같은 CRUD기능 들을 firebase 제공 메소드로 구현 , Tanstack-Query사용 /
        </p>{" "}
        <h4 className="text-[20px] ">3. 카카오맵 API </h4>
        <p>
          유저들에게 직관적인 지도와 로드뷰를 보여주는것이 가게의 위치파악에
          유리 gelocation을 통해 가져온 위치데이터(위도,경도)로 주변위치
          착한가게 제공 , 검색기능을 통해 검색한 장소 인근에 착한가게 제공 ,
          위치가 특정되면 그 위치 정보가 redux-toolkit에 저장되고 , 전체맵
          페이지로 넘어갈시 toolkit에 저장된 위치데이터 기반으로 주변 가게위
          맵마커를 보여줌 , 특정가게 하나의 정보가 담이 디테일 페이지에서는
          해당가게의 로드뷰와 미니맵을 보여줄수 있도록 구현
        </p>{" "}
        <h4 className="text-[20px] ">4. 좋아요 기능 구현</h4>
        <p>
          가게의 좋아요 갯수확인을 통해 가게의 신뢰도 증가 / 클릭시 유저ID와
          가게ID를 담은 POST가 create되고 재클릭시 DB에 유저 ID 가게ID가
          일치하는 좋아요가 있다면 좋아요가 취소되도록 구현 / 연속클릭시 오류가
          나는 부분은 첫 클릭 이후 firebase와의 통신이 마무리 되기 전까지 해당
          좋아요 버튼을 클릭불가 상태로 설정하여 해결
        </p>{" "}
        <h4 className="text-[20px] ">
          5. redux-toolkit을 이용한 로그인유저정보 전역관리
        </h4>
        <p>
          회원가입이후 로그인한 유저정보를 toolkit의 전역상태 관리 state에서
          관리하여 , 프로젝트 파일 전역에서 로그인유무와 회원정보를 이용 다른
          서비스를 제공하도록 구현
        </p>{" "}
        <h4 className="text-[20px] ">
          6.firebase의 storage를 이용 이미지파일 업로드 및 다운로드
        </h4>
        <p>
          게시글을 남길수 있는 커뮤니티 페이지에서 게시글에 대한 몰입도를
          증가시키기위해 이미지파일 업로드 기능을 구현
        </p>{" "}
        <h4 className="text-[20px] ">
          7 회원가입 및 로그인 유저의 회원정보 변경
        </h4>
        <p>
          로그인유저의 닉네임 프로필사진 비밀번호등을 교체할수 있는
          마이페이지내의 기능구현
        </p>{" "}
        <h4 className="text-[20px] ">8. firebase를 통한 pagenation 적용</h4>
        <p>
          커뮤니티 페이지에서 유저들이 작성한 게시글들을 좀더 정돈되서 제공할수
          있도록 pagenation구현
        </p>{" "}
        <h4 className="text-[20px] ">
          {" "}
          9 next-auth를 이용한 카카오로그인 구현
        </h4>
        <p>
          유저들의 편의 제공을 위해 많은 사람들이 이용하는 카카오로그인을
          구현하여 번거로운 회원가입 없이도 빠르게 사이트를 이용하실수 있도록 함
        </p>{" "}
        <h4 className="text-[20px] ">
          {" "}
          10 puppeteer를 이용한 wep-scrapping(크롤링)으로 이미지 url을 가진
          DB구축
        </h4>
        <p>
          UI를 높여서 유저들의 몰입감을 채우기위해 착한가게들의 정보가 담긴
          착한가게카드에 각각의 가게에 대한 사진을 보여줄수 있도록
          wep-scrapping을 통한 이미지URl DB를 생성 해당 DB는 깃헙에 json형식으로
          보관
        </p>
      </div>
    </div>
  );
}
