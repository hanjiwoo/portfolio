"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { colorArray } from "./ColorArray";

export default function Mainbody() {
  const ref: RefObject<HTMLCanvasElement> = useRef(null);
  const contextRef = useRef<CanvasRenderingContext2D | null | undefined>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [pickColor, setPickColor] = useState("#000000");
  const [mode, setMode] = useState("pen");
  const textRef = useRef<string>();
  const fontRef = useRef<HTMLInputElement>(null);
  const drawStart = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    contextRef.current?.beginPath();
    if (mode === "pen") {
      contextRef.current?.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
    if (mode === "paint") {
      contextRef.current?.fillRect(0, 0, 1000, 1000);
    }
    if (mode === "eraser") {
      contextRef.current?.save();
      if (contextRef.current) {
        contextRef.current.strokeStyle = "white";
        setIsDrawing(true);
      }
    }
  };
  const drawEnd = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (mode === "eraser") {
      contextRef.current?.restore();
    }
    setIsDrawing(false);
  };

  const drawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (!isDrawing) {
      return;
    }
    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  };
  const colorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    if (contextRef.current) {
      setPickColor(e.target.value);
      contextRef.current.strokeStyle = e.target.value;
      contextRef.current.fillStyle = e.target.value;
    }
  };
  const colorChange2 = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(e.currentTarget.dataset);
    if (e.currentTarget.dataset.color && contextRef.current) {
      setPickColor(e.currentTarget.dataset.color);
      contextRef.current.strokeStyle = e.currentTarget.dataset.color;
      contextRef.current.fillStyle = e.currentTarget.dataset.color;
    }
  };
  const weightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (contextRef.current) {
      contextRef.current.lineWidth = +e.target.value;
    }
  };
  const modeChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMode(e.currentTarget.id);
  };
  const resetBtn = () => {
    const yesNo = confirm("그림을 다 지울까요?");
    if (yesNo) {
      contextRef.current?.reset();
    }
  };
  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const 이미지 = URL.createObjectURL(e.target.files[0]);
      // console.log(이미지);
      const imgimg = document.createElement("img");
      imgimg.src = 이미지;
      imgimg.onload = () => {
        contextRef.current?.drawImage(imgimg, 0, 0, 1000, 1000);
      };
    }
  };
  const textPutting = (e: React.ChangeEvent<HTMLInputElement>) => {
    textRef.current = e.target.value;
  };
  const textPutting2 = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (textRef.current && contextRef.current) {
      contextRef.current?.save();
      contextRef.current.lineWidth = 2;
      contextRef.current?.fillText(
        textRef.current,
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
      );
      contextRef.current.restore();
    }
  };
  const fontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (contextRef.current && e.target.value) {
      contextRef.current.font = `${e.target.value}px roboto`;
    }
  };
  const saveImage = () => {
    const url = ref.current?.toDataURL();
    const anchor = document.createElement("a");
    if (url) {
      anchor.href = url;
      anchor.download = "한지우.png";
      anchor.click();
    }
  };
  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      canvas.width = 1000;
      canvas.height = 1000;
      // canvas.style.width = `${window.innerWidth}px`;
      // canvas.style.height = `${window.innerHeight}px`;
    }

    const ctx = canvas?.getContext("2d");
    if (ctx) {
      // ctx?.scale(1, 1);
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      contextRef.current = ctx;
    }
  }, []);

  return (
    <div className="flex flex-row justify-center gap-5 items-center bg-black ">
      <div className="bg-blue-100 w-[300px] h-[800px] flex flex-col items-center">
        <h1>색상선택</h1>
        <div className="bg-white flex items-center rounded-lg cursor-pointer">
          <input
            value={pickColor}
            onChange={(e) => colorChange(e)}
            type="color"
          />
        </div>
        <section className="flex">
          {colorArray.map((color) => {
            return (
              <div
                onClick={(e) => colorChange2(e)}
                key={color}
                data-color={color}
                style={{
                  background: color,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              ></div>
            );
          })}
        </section>
        <h2>굵기선택</h2>
        <input
          type="range"
          onChange={(e) => weightChange(e)}
          max={10}
          min={1}
        />
        <h2>모드</h2>
        <div className="flex gap-1">
          <button
            onClick={(e) => modeChange(e)}
            id="pen"
            className={`bg-yellow-500 rounded-xl ${
              mode === "pen" && "border-red-500 border-8"
            }`}
          >
            🖍연필 모드
          </button>
          <button
            onClick={(e) => modeChange(e)}
            id="paint"
            className={`bg-yellow-500 rounded-xl ${
              mode === "paint" && "border-red-500 border-8"
            }`}
          >
            🎨페인트 모드
          </button>{" "}
          <button
            onClick={(e) => modeChange(e)}
            id="eraser"
            className={`bg-yellow-500 rounded-xl ${
              mode === "eraser" && "border-red-500 border-8"
            }`}
          >
            ✂지우개 모드
          </button>
        </div>
        <h2>리셋버튼</h2>
        <button
          onClick={resetBtn}
          className="bg-green-500 text-white p-[5px] rounded-xl w-[200px]"
        >
          ⛏RESET{" "}
        </button>
      </div>
      <canvas
        ref={ref}
        onMouseDown={(e) => drawStart(e)}
        onMouseUp={(e) => drawEnd(e)}
        onMouseMove={(e) => drawing(e)}
        onMouseLeave={(e) => drawEnd(e)}
        onDoubleClick={(e) => textPutting2(e)}
        style={{ background: "white" }}
      ></canvas>{" "}
      <div className="bg-blue-100 w-[300px] h-[800px] flex flex-col items-center">
        <h2>이미지 가져오기</h2>{" "}
        <label
          className="bg-purple-500 text-white rounded-xl w-[200px] text-center cursor-pointer"
          htmlFor="file"
        >
          📁UPLOAD
        </label>
        <input
          onChange={(e) => getImage(e)}
          id="file"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
        <h2>텍스트 넣기</h2>
        <input
          onChange={(e) => textPutting(e)}
          className="w-[200px] text-center"
          placeholder="작성후 그림에 더블클릭 하세요"
        />
        <h2>텍스트 크기</h2>
        <div className="flex">
          <input
            onChange={(e) => fontChange(e)}
            type="range"
            max="50"
            min="20"
          />
        </div>{" "}
        <h2>이미지 저장하기</h2>
        <button
          onClick={saveImage}
          className="bg-red-500 text-white rounded-xl w-[200px]"
        >
          🖼DOWNLOAD
        </button>
      </div>
    </div>
  );
}
