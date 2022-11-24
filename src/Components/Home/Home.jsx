import React from "react";
import Index from "../Indexpage/Index";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="dic" id="flex">
        <Sidebar />
        <Index />
      </div>
    </>
  );
}
