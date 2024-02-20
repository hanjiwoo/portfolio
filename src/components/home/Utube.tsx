import React from "react";

export default function Utube() {
  return (
    <div className="bg-red-300">
      <video width="640" height="360" controls>
        <source src="/미란이영상.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
