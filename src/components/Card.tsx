"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import CardUserProfile from "./CardUserProfile";

function Card() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/blog/1`)}
        className={`cursor-pointer bg-white rounded-md shadow-md overflow-hidden`}
      >
        <div className="bg-blue-500 w-full min-h-[200px] image"></div>
        <div className="card-content p-3">
          <div className="card-header flex items-center gap-2 mb-1">
            {/* <div className="w-[35px] h-[35px] bg-red-500 rounded-full"></div> */}
            <CardUserProfile size="sm" />
          </div>
          <p className="line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            aspernatur sequi voluptatem. Porro id blanditiis vitae
            exercitationem inventore perferendis in.
          </p>
          {/* <p className="text-right text-sm text-blue-500 cursor-pointer">
            Read more
          </p> */}
        </div>
        {/* <Button onClick={onClick} /> */}
      </div>
    </>
  );
}

export default Card;
