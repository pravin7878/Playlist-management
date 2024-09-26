import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import AllRouts from "../Routes/AllRouts";

export default function Main() {
  return (
    <main className="flex flex-col h-full rounded-2xl">
      <Header />
      <h1 className="mt-5 mb-5">Product Playlist</h1>
      <div className="bg-darklight rounded-xl p-3 h-[80%] overflow-y-auto scroll-smooth">
        <AllRouts />
      </div>
    </main>
  );
}
