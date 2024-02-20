import Image from "next/image";
import React from "react";
import catcat2 from "../../assets/미란이1copy.jpg";
import catcat3 from "../../assets/미란이문앞.jpg";
import catcat4 from "../../assets/미란이벌떡.jpg";
import catcat5 from "../../assets/미란이빨래.jpg";
export default function Banner() {
  return (
    <section className="flex w-[100vw] h-[300px] justify-center items-center overflow-hidden">
      <div className="relative flex justify-center items-center">
        <h1
          style={{ userSelect: "none" }}
          className="text-[100px] absolute z-1 text-white "
        >
          한 지 우{" "}
        </h1>
        <img src="/flowerBanner.jpg" className="h-[600px]" alt="flowerBanner" />
      </div>
    </section>
  );
}
