"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import CardUserProfile from "./CardUserProfile";
import { CardProps } from "@/utils/typeinterface";
import Image from "next/image";

function Card({ data }: CardProps) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/blog/${data.id}`)}
        className={`cursor-pointer bg-white rounded-md shadow-md overflow-hidden`}
      >
        <div className="bg-blue-500 w-full min-h-[200px] image">
          {/* <Image
            src={data?.image}
            alt={data?.title}
            width={100}
            height={100}
            className="w-full h-[200px] min-h-[200px] object-cover"
            loading="lazy"
            placeholder="blur"
          /> */}
        </div>
        <div className="card-content p-3">
          <div className="card-header flex items-center gap-2 mb-1">
            {/* <div className="w-[35px] h-[35px] bg-red-500 rounded-full"></div> */}
            <CardUserProfile size="sm" data={data} />
          </div>
          <p className="line-clamp-3 text-sm">{data.body}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
