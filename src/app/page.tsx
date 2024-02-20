import Banner from "@/components/home/Banner";
import Post from "@/components/home/Post";
import Utube from "@/components/home/Utube";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-[100px]">
      <Banner />

      <Utube />
      <Post />
    </main>
  );
}
