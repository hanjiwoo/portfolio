"use client";
import React, { useEffect, useState } from "react";

export default function Utube() {
  const [videoGO, setVideoGo] = useState(false);
  useEffect(() => {
    setVideoGo(true);
  }, []);
  return (
    <div className="bg-red-300">
      {videoGO && (
        <>
          <video width="640" height="360" controls>
            <source src="/미란이영상.mp4" type="video/mp4" />
          </video>
          <h1>고양이 구경하세요</h1>
        </>
      )}
    </div>
  );
}
