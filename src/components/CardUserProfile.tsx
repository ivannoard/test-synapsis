"use client";
import { getRandomCategory } from "@/utils";
import { CardProps } from "@/utils/typeinterface";
import React from "react";

function CardUserProfile({ size, data }: CardProps) {
  return (
    <>
      {size === "sm" && (
        <div className="header-content">
          <h4 className="font-semibold line-clamp-1">{data?.title}</h4>
          <p className="text-[12px]">
            <span>{data?.category} -</span> {new Date().getFullYear()}
          </p>
          {/* <p className="text-[10px] text-gray-500">12 Juni 2024</p> */}
        </div>
      )}
      {size === "lg" && (
        <div className="header-content mt-4">
          <h4 className="font-semibold text-3xl">{data?.title}</h4>
          <div className="header-content-bio my-2">
            <p className="text-lg font-semibold">
              {data?.category} - {new Date().getFullYear()}
            </p>
            {/* <p className="text-sm text-gray-500">12 Juni 2024</p> */}
          </div>
        </div>
      )}
    </>
  );
}

export default CardUserProfile;
