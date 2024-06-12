"use client";
import { Card, SideNav } from "@/components";
import Image from "next/image";
import React from "react";

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-4 col-span-12 lg:col-span-9">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
    // <div className="p-10 grid grid-cols-12 gap-4">
    //   <div className="col-span-9 grid grid-cols-4 gap-4">

    //   </div>
    //   <div className="col-span-3">
    //     <SideNav />
    //   </div>
    // </div>
  );
}

export default Home;
