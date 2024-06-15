"use client";
import { DataType, PaginationType } from "@/utils/typeinterface";
import React from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import CardSkeleton from "../CardSkeleton";

type Props = {
  data: DataType[];
  pagination: PaginationType;
};

function Home({ data, pagination }: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-4 col-span-12 lg:col-span-9">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data && data.length > 0
            ? data.map((item: DataType) => <Card key={item.id} data={item} />)
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <CardSkeleton key={item} />
              ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination pagination={pagination} path="/" />
        </div>
      </div>
    </>
  );
}

export default Home;
