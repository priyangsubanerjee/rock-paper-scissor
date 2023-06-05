/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [options, setOptions] = useState([
    {
      name: "rock",
      img: "/rock.png",
      beats: "scissor",
    },
    {
      name: "paper",
      img: "/paper.png",
      beats: "rock",
    },
    {
      name: "scissor",
      img: "/scissor.png",
      beats: "paper",
    },
  ]);
  return (
    <main className="fixed inset-0 h-full w-full bg-gradient-to-b from-yellow-100 to-yellow-100">
      <div className="h-1/2 relative border-b border-yellow-700/30">
        <div className="absolute top-5 inset-x-0">
          <div className="flex justify-center items-center space-x-3">
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
                className="h-10"
                alt=""
              />
            </button>
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3153/3153026.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 translate-y-1/2 bg-red-500/50 w-full h-12 inset-x-0"></div>
      </div>
      <div className="h-1/2 relative">
        <div className="absolute bottom-5 inset-x-0">
          <div className="flex justify-center items-center">
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
                className="h-10"
                alt=""
              />
            </button>
            <button className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3153/3153026.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
