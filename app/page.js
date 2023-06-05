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
  const [currState, setCurrState] = useState({
    player: null,
    computer: null,
  });
  const [draws, setDraws] = useState(0);

  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });

  useEffect(() => {
    if (draws >= 3) {
      setScore((prev) => ({
        ...prev,
        player: prev.player + 1,
      }));
    }
  }, [draws]);

  const decide = (computersChoice) => {
    console.log(computersChoice, usersChoice);
    if (computersChoice === usersChoice) {
      setDraws((prev) => prev + 1);
      setCurrState({
        player: 0,
        computer: 0,
      });
    } else if (computersChoice.beats === usersChoice.name) {
      setScore((prev) => ({
        ...prev,
        computer: prev.computer + 1,
      }));
      setCurrState({
        player: 0,
        computer: 1,
      });
    } else if (usersChoice.beats === computersChoice.name) {
      setScore((prev) => ({
        ...prev,
        player: prev.player + 1,
      }));
      setCurrState({
        player: 1,
        computer: 0,
      });
    }
    setTimeout(() => {
      setDraws(0);
      setUsersChoice(null);
      setComputersChoice(null);
      setCounter(5);
      setIterations(0);
      setShuffle(false);
      setCurrState({
        player: null,
        computer: null,
      });
    }, 1000);
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
      }, 150);
      return () => clearInterval(interval);
    } else {
      return;
    }
  }, [counter, shuffle]);
  return (
    <main className="fixed inset-0 h-full w-full bg-gradient-to-b from-yellow-100 to-yellow-100">
      <div className="h-1/2 relative border-b border-yellow-700/30">
        <div className="absolute top-10 inset-x-0">
          <div className="flex justify-center items-center space-x-3">
            <button
              style={{
                opacity: counter === 1 ? 1 : 0.5,
              }}
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.computer === 1 && computersChoice == options[1]
                  ? "border-green-500"
                  : currState.computer === 0 && computersChoice == options[1]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
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
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.computer === 1 && computersChoice == options[2]
                  ? "border-green-500"
                  : currState.computer === 0 && computersChoice == options[2]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
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
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.computer === 1 && computersChoice == options[0]
                  ? "border-green-500"
                  : currState.computer === 0 && computersChoice == options[0]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
                className="h-10"
                alt=""
              />
            </button>
          </div>
        </div>

        <div>
          you: {score.player} | computer: {score.computer}
        </div>
        <div className="absolute flex items-center justify-center bottom-0 translate-y-1/2 w-full h-12 inset-x-0">
          <span className="bg-yellow-100 px-6 font-jost">
            {currState.player === 1
              ? "You win"
              : currState.computer === 1
              ? "You lose"
              : currState.player === 0 && currState.computer === 0
              ? "Draw"
              : "Tap an option below to start"}
          </span>
        </div>
      </div>
      <div className="h-1/2 relative">
        <div className="absolute bottom-8 inset-x-0">
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setUsersChoice(options[0]);
              }}
              disabled={usersChoice !== null && usersChoice !== options[0]}
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.player === 1 && usersChoice == options[0]
                  ? "border-green-500"
                  : currState.player === 0 && usersChoice == options[0]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
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
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.player === 1 && usersChoice == options[1]
                  ? "border-green-500"
                  : currState.player === 0 && usersChoice == options[1]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
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
              className={`h-24 w-24 border-2 disabled:opacity-50 flex items-center justify-center bg-white rounded-full shadow-lg shadow-yellow-200 active:shadow-none active:translate-y-1 transition-all duration-100 ${
                currState.player === 1 && usersChoice == options[2]
                  ? "border-green-500"
                  : currState.player === 0 && usersChoice == options[2]
                  ? "border-red-500"
                  : "border-transparent"
              }`}
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
