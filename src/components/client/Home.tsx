"use client";
import { DataType, PaginationType } from "@/utils/typeinterface";
import React from "react";
import Card from "../Card";
import Pagination from "../Pagination";

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
          {data &&
            data.map((item: DataType) => <Card key={item.id} data={item} />)}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination pagination={pagination} path="/" />
        </div>
      </div>
    </>
  );
}

export default Home;
