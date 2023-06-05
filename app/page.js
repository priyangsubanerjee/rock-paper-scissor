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

  const [counter, setCounter] = useState(5);
  const [shuffle, setShuffle] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [computersChoice, setComputersChoice] = useState(null);
  const [usersChoice, setUsersChoice] = useState(null);

  const decide = (computersChoice) => {
    console.log(computersChoice, usersChoice);
  };

  useEffect(() => {
    if (usersChoice !== null) {
      setShuffle(true);
      setCounter(0);
    }
  }, [usersChoice]);

  useEffect(() => {
    if (shuffle) {
      if (iterations > 20) {
        setIterations(0);
        setShuffle(false);
        let random = Math.floor(Math.random() * 3);
        setComputersChoice(options[random]);
        setCounter(random);
        decide(options[random]);
        return;
      }
      const interval = setInterval(() => {
        if (counter === 2) {
          setCounter(0);
        } else {
          setCounter((prev) => prev + 1);
        }
        setIterations((prev) => prev + 1);
      }, 200);
      return () => clearInterval(interval);
    } else {
      return;
    }
  }, [counter, shuffle]);
  return (
    <main className="fixed inset-0 h-full w-full bg-gradient-to-b from-yellow-100 to-yellow-100">
      <div className="h-1/2 relative border-b border-yellow-700/30">
        <div className="absolute top-5 inset-x-0">
          <div className="flex justify-center items-center space-x-3">
            <button
              style={{
                opacity: counter === 1 ? 1 : 0.5,
              }}
              className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
                className="h-10"
                alt=""
              />
            </button>
            <button
              style={{
                opacity: counter === 2 ? 1 : 0.5,
              }}
              className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3153/3153026.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              style={{
                opacity: counter === 0 ? 1 : 0.5,
              }}
              className="h-24 w-24 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
        </div>

        {iterations}
        <div className="absolute bottom-0 translate-y-1/2 bg-red-500/50 w-full h-12 inset-x-0"></div>
      </div>
      <div className="h-1/2 relative">
        <div className="absolute bottom-5 inset-x-0">
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setUsersChoice(options[0]);
              }}
              disabled={usersChoice !== null && usersChoice !== options[0]}
              className="h-24 w-24 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <button
              onClick={() => {
                setUsersChoice(options[1]);
              }}
              disabled={usersChoice !== null && usersChoice !== options[1]}
              className="h-24 w-24 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
                className="h-10"
                alt=""
              />
            </button>
            <button
              onClick={() => {
                setUsersChoice(options[2]);
              }}
              disabled={usersChoice !== null && usersChoice !== options[2]}
              className="h-24 w-24 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100"
            >
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
