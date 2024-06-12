import React from "react";

function CardHeader() {
  return (
    <div className="card flex gap-2">
      <div className="rounded-md bg-red-500 min-w-[100px] lg:min-w-[150px] h-[100px]"></div>
      <div className="header-content">
        <h4 className="font-semibold line-clamp-1">
          Lorem ipsum dolor sit amet.
        </h4>
        {/* <div className="header-content-bio my-2">
                <p className="text-[12px] font-semibold">Author - Category</p>
                <p className="text-sm text-gray-500">12 Juni 2024</p>
              </div> */}
        <p className="text-[13px] line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia odio
          vero ullam fugiat totam necessitatibus voluptas. Hic laboriosam veniam
          laudantium debitis ex molestias repellat eius rerum? Soluta nam non
          consequatur facilis quisquam tempora veniam obcaecati sapiente
          consectetur dicta cumque odio fugiat perferendis, fuga, harum corrupti
          eveniet. Culpa mollitia consequuntur ex!
        </p>
      </div>
    </div>
  );
}

export default CardHeader;
