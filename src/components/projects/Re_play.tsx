import React from "react";

export default function Re_play() {
  return (
    <div className=" bg-green-200 flex flex-col gap-[20px]">
      {" "}
      <img src="/리플레이.png" alt="리플레이" width={400} height={900} />
      <div className="">
        <h2 className="text-[30px] ">리플레이</h2>
        <strong className="text-blue-500">
          <a href="https://plus-team.vercel.app" target="_blank">
            https://plus-team.vercel.app (보러가기)
          </a>
        </strong>
        <p>혼자서 혹은 친구와 즐길수 있는 플래쉬게임들을 담은 사이트</p>
      </div>
      <div className="bg-orange-200 flex flex-col gap-[10px]">
        <h3 className="text-[30px] ">구현한기능</h3>
        <h4 className="text-[20px] ">
          1.로그인유저에게 게임에 대한 평가를 남길수 있는 CRUD제공
        </h4>
        <p>
          main화면에서 게임CARD클릭시 detail페이지로 넘어가면 해당 게임에 대한
          가벼운 설명과 게임에 대한 평가를 남길수 있는 CRUD 제공 , 로그인한
          유저만 이용가능하고 자신이 쓴 게시글에 대한 update와 delete가 가능하게
          구현
        </p>{" "}
        <h4 className="text-[20px] ">2.틱택토게임</h4>
        <p>
          2명의 유저가 이용하는 게임으로 O와 X를 번갈아 가며 한번씩 9개의 빈칸에
          작성하여 가로세로 대각선준 한줄의 빙고를 만들면 우승하는 게임 /
          즉각적인 랜더링을 위해서는 useState 랜더링없이 데이터의 저장을 위한
          useRef훅을 가장많이 이용하여 게임구현
        </p>{" "}
        <h4 className="text-[20px] ">3.메모리카드게임(포켓몬스터)</h4>
        <p>
          똑같은 그림이 그려진 두장의 카드 8쌍 총 16개의 카드를 뒤집어 놓고
          두개씩 뒤집으며 같은 그림의 1쌍을 찾아내는 게임 / useState ,
          useEffect의 사용과 state변화에 따른 CSS변화를 중점으로 게임구현
        </p>{" "}
      </div>
    </div>
  );
}
