/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="fixed flex flex-col justify-end inset-0 h-full w-full bg-yellow-100 pb-12">
      <div className="flex justify-center">
        <button className="h-24 w-24 bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4405/4405457.png"
            alt=""
            className="h-10"
          />
        </button>
      </div>
      <div className="flex mt-2 items-center justify-center space-x-6">
        <button className="h-24 w-24 bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7083/7083532.png"
            alt=""
            className="h-10"
          />
        </button>
        <button className="h-24 w-24 bg-white flex items-center justify-center shadow-xl rounded-full shadow-yellow-300/50 active:shadow-none active:translate-y-1 transition-all duration-100">
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
