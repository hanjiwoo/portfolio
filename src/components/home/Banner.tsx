import Image from "next/image";
import React from "react";
import catcat from "../../assets/미란이3.jpg";
import catcat2 from "../../assets/미란이1copy.jpg";
import catcat3 from "../../assets/미란이문앞.jpg";
import catcat4 from "../../assets/미란이벌떡.jpg";
import catcat5 from "../../assets/미란이빨래.jpg";
export default function Banner() {
  return (
    <section className="flex">
      <Image src={catcat} height={300} alt="고양이사진" />
      {/* <Image src={catcat2} height={300} alt="고양이사진" />
      <Image src={catcat3} height={300} alt="고양이사진" />
      <Image src={catcat4} height={300} alt="고양이사진" />
      <Image src={catcat5} height={300} alt="고양이사진" /> */}
    </section>
  );
}
