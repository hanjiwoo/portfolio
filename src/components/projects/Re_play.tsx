import React from "react";
import photo from "../../assets/리플레이.png";
import Image from "next/image";

export default function Re_play() {
  return (
    <div className=" bg-green-200 flex flex-col gap-[20px]">
      {" "}
      <Image src={photo} alt="리플레이" width={400} height={900} />
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
        <p>
          - 디테일페이지 구현 사이트의 게임을 이용하고 그에 대한 후기를 유저들이
          남길수 있는 기능제공 로그인한 유저만 별점과 해당 게임에 대한 후기를
          남길수 있다.{" "}
        </p>
        <p>
          자신이 작성한 후기에 대해서만 수정 삭제가 가능하도록 구현 기능 구현을
          위해 firebase와 useQuery를 사용 - 메인페이지에 좋아요 기능 구현
          사이트에서 여러가지 게임을 제공하고 있다.{" "}
        </p>
        <p>
          그중에서 어떤 게임이 인기가 많은 게임을 알수 있도록 각 게임 POST별로
          좋아요를 부여했다. firebase 와 useQuery를 사용 - 메모리게임 동일한
          그림을 가진 카드 두장씩 8쌍인 총 16장의 카드가 있다.
        </p>
        <p>
          {" "}
          뒷면인 상태의 16장의 카드를 2개씩 뒤집어서 같은 쌍을 찾아내는 게임구현
          useState , useEffect 등 리액트훅을 사용하여 게임구현 - 틱택토게임
          2인용 게임으로 번갈아 가며 O와X 를 그려나가며 동일한 표시로 한줄을
          먼저 채우는 사람이 승리하는 게임 useState , useRef 등 리액트훅을
          사용하여 게임구현
        </p>
        <p></p>
      </div>
    </div>
  );
}
