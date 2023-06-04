import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rock paper scissor game",
  description: "Built with nextjs and tailwindcss by @priyangsubanerjee",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="theme-color" content="rgb(254 249 195)" />
      </head>
      <body className={`${inter.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
