/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [turn, setTurn] = useState(1); // 0 = computer, 1 = player
  const [selected, setSelected] = useState(null);
  const [image, setImage] = useState("rock");
  const [myscore, setMyScore] = useState(0);
  const [compscore, setCompScore] = useState(0);
  const [state, setState] = useState({
    computer: null,
    player: null,
  });

  const decide = (computer) => {
    if (computer == selected) {
      setState({
        ...state,
        player: 0,
        computer: 0,
      });
      setTimeout(() => {
        setState({
          ...state,
          player: null,
          computer: null,
        });
        setSelected(null);
        setTurn(1);
      }, 1000);
      return;
    } else if (computer == "rock" && selected == "paper") {
      setState({
        ...state,
        player: 1,
        computer: 0,
      });
      setMyScore(myscore + 1);
    } else if (computer == "rock" && selected == "scissors") {
      setState({
        ...state,
        player: 0,
        computer: 1,
      });
      setCompScore(compscore + 1);
    } else if (computer == "paper" && selected == "rock") {
      setState({
        ...state,
        player: 0,
        computer: 1,
      });
      setCompScore(compscore + 1);
    } else if (computer == "paper" && selected == "scissors") {
      setState({
        ...state,
        player: 1,
        computer: 0,
      });
      setMyScore(myscore + 1);
    } else if (computer == "scissors" && selected == "rock") {
      setState({
        ...state,
        player: 1,
        computer: 0,
      });
      setMyScore(myscore + 1);
    } else if (computer == "scissors" && selected == "paper") {
      setState({
        ...state,
        player: 0,
        computer: 1,
      });
      setCompScore(compscore + 1);
    }

    setTimeout(() => {
      setState({
        ...state,
        player: null,
        computer: null,
      });
      setSelected(null);
      setTurn(1);
    }, 1500);
  };

  useEffect(() => {
    let images = ["rock", "paper", "scissors"];
    let start = 0;
    let timer = 0;

    if (turn == 0) {
      let interval = setInterval(() => {
        if (timer == 20) {
          clearInterval(interval);
          let random = Math.floor(Math.random() * 3);
          let option = images[random];
          setImage(images[random]);
          decide(option);
          return;
        }
        timer++;
        setImage(images[start]);
        if (start == 2) start = 0;
        else start++;
      }, 100);
    }
  }, [turn]);

  useEffect(() => {
    if (selected != null) {
      setTurn(0);
    }
  }, [selected]);

  return (
    <main className="fixed flex flex-col justify-center inset-0 h-full w-full bg-gradient-to-b from-yellow-100/80 to-transparent pb-12">
      <div className="mb-28">
        <div>
          <div className="mb-8">
            <p className="text-center">
              Computer: {compscore} --- You: {myscore}
            </p>
          </div>
          <h1 className="text-center font-bold text-4xl font-jost text-zinc-800">
            {turn == 0 ? "Computers" : "Your"} turn
          </h1>
          <p className="font-jost text-center text-zinc-600 mt-4">
            `` You can select in the next turn.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              disabled={turn == 1}
              onClick={() => setSelected("rock")}
              className={`h-24 w-24 border-2 disabled:opacity-0 disabled:shadow-none bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100  ${
                state.computer == 1
                  ? "border-green-500"
                  : state.computer == 0
                  ? "border-red-500"
                  : "border-transparent"
              } `}
            >
              <img
                src={
                  image == "rock"
                    ? "/rock.png"
                    : image == "paper"
                    ? "/paper.png"
                    : "/scissor.png"
                }
                alt=""
                className="h-10"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          disabled={selected != "rock" && selected != null}
          onClick={() => setSelected("rock")}
          className={`h-24 w-24 border-2 disabled:opacity-50 disabled:shadow-none bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100 
         ${
           state.player == 1 && selected == "rock"
             ? "border-green-500"
             : state.player == 0 && selected == "rock"
             ? "border-red-500"
             : "border-transparent"
         } `}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
            alt=""
            className="h-10"
          />
        </button>
      </div>
      <div className="flex mt-2 items-center justify-center space-x-6">
        <button
          disabled={selected != "paper" && selected != null}
          onClick={() => {
            setSelected("paper");
          }}
          className={`h-24 w-24 border-2 disabled:opacity-50 disabled:shadow-none bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100 
          ${
            state.player == 1 && selected == "paper"
              ? "border-green-500"
              : state.player == 0 && selected == "paper"
              ? "border-red-500"
              : "border-transparent"
          }`}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
            alt=""
            className="h-10"
          />
        </button>
        <button
          disabled={selected != "scissors" && selected != null}
          onClick={() => setSelected("scissors")}
          className={`h-24 w-24 border-2 disabled:opacity-50 disabled:shadow-none bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100 
           ${
             state.player == 1 && selected == "scissors"
               ? "border-green-500"
               : state.player == 0 && selected == "scissors"
               ? "border-red-500"
               : "border-transparent"
           }`}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3153/3153026.png"
            alt=""
            className="h-10"
          />
        </button>
      </div>
    </main>
  );
}
