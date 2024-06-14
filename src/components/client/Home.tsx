"use client";
import React from "react";
import Card from "../Card";
import { DataType, PaginationType } from "@/utils/typeinterface";
import ReactPaginate from "react-paginate";
import Pagination from "../Pagination";

type Props = {
  data: DataType[];
  pagination: PaginationType;
};

function Home({ data, pagination }: Props) {
  // async function getData() {
  //   try {
  //     const response = await axios.get("/api/post?page=2");
  //     if (response.status === 200) {
  //       setData(response.data.data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // React.useEffect(() => {
  //   getData();
  // }, []);
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
