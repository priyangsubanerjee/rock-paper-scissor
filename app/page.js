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
    <main className="fixed inset-0 h-full w-full bg-gradient-to-b from-yellow-100 to-transparent">
      <div className="fixed bottom-12 inset-x-0 space-x-5 flex justify-center items-center">
        {options.map((option) => (
          <button
            key={option.name}
            className="bg-white rounded-full h-24 w-24  shadow-xl shadow-yellow-100 flex items-center justify-center"
          >
            <Image alt={option.name} src={option.img} width={40} height={40} />
          </button>
        ))}
      </div>
    </main>
  );
}
