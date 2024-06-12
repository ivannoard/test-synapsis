import React from "react";

interface Props {
  size: string;
}

function CardUserProfile({ size }: Props) {
  return (
    <>
      {size === "sm" && (
        <div className="header-content">
          <h4 className="font-semibold line-clamp-1">Title</h4>
          <p className="text-[12px]">
            <span>Author -</span> Category
          </p>
          <p className="text-[10px] text-gray-500">12 Juni 2024</p>
        </div>
      )}
      {size === "lg" && (
        <div className="header-content mt-4">
          <h4 className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet.
          </h4>
          <div className="header-content-bio my-2">
            <p className="text-lg font-semibold">Author - Category</p>
            <p className="text-sm text-gray-500">12 Juni 2024</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardUserProfile;
