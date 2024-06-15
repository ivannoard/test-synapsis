import React from "react";

function CardSkeleton() {
  return (
    <div className="card-skeleton rounded-md overflow-hidden bg-white shadow-md">
      <div className="bg-gray-200 w-full min-h-[200px]"></div>
      <div className="skeleton-card-content p-3">
        <div className="w-full bg-gray-200 h-[20px]"></div>
        <div className="w-1/3 bg-gray-200 h-[20px]"></div>
        <div className="w-1/2 bg-gray-200 h-[20px]"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
