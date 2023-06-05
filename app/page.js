/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userChoice, setUserChoice] = useState(null);
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);
  const [computerChoice, setComputerChoice] = useState(null);
  const [options, setOptions] = useState([
    {
      name: "rock",
      image: "/rock.png",
    },
    {
      name: "paper",
      image: "/paper.png",
    },
    {
      name: "scissor",
      image: "/scissor.png",
    },
  ]);

  const [history, setHistory] = useState([]);

  let decide = (userChoice, computerChoice) => {
    if (userChoice == null) {
      console.log("user choice is null");
      setTimeout(() => {
        setStop(false);
        setCounter(0);
        setUserChoice(null);
        setComputerChoice(null);
      }, 1000);
      return;
    } else {
      console.log(userChoice.name, computerChoice.name);
      setTimeout(() => {
        setStop(false);
        setCounter(0);
        setUserChoice(null);
        setComputerChoice(null);
      }, 1000);
    }
  };

  useEffect(() => {
    if (stop == false) {
      const interval = setInterval(() => {
        if (counter >= 5) {
          setStop(true);
          clearInterval(interval);
          let random = Math.floor(Math.random() * 3);
          setComputerChoice(options[random]);
          decide(userChoice, options[random]);
          return;
        }
        setCounter(counter + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [counter]);
  return (
    <main className="fixed  space-y-4 justify-center inset-0 h-full w-full bg-gradient-to-b from-yellow-100/80 to-transparent pb-12 overflow-auto">
      <div className="h-[70%]">
        <button
          className={`h-28 w-28 mx-auto flex items-center justify-center rounded-full`}
        >
          {computerChoice ? (
            <img src={computerChoice.image} alt="" className="h-12" />
          ) : (
            <div className="text-4xl font-light font-jost">{counter}</div>
          )}
        </button>
        <div className="flex items-center space-x-6 justify-center">
          {options.map((option, i) => {
            return (
              <button
                className={`h-28 w-28 flex items-center justify-center border border-black rounded-full ${
                  userChoice == option ? "bg-white" : "bg-transparent"
                }`}
                onClick={() => setUserChoice(option)}
                key={i}
              >
                <img src={option.image} alt="" className="h-12" />
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            setCounter(0);
            setStop(false);
            setUserChoice(null);
          }}
        >
          Pause
        </button>
      </div>

      <div className="h-auto">
        <p>Moves history</p>
      </div>
    </main>
  );
}
