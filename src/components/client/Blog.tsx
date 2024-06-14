"use client";
import React from "react";
import Card from "../Card";
import {
  DataType,
  PaginationType,
  ResponseDataType,
} from "@/utils/typeinterface";
import Pagination from "../Pagination";

type Props = {
  data: DataType[];
  pagination: PaginationType;
};

function Blog({ data, pagination }: Props) {
  const [dataBlog, setDataBlog] = React.useState<DataType[]>(data);

  // async function getData() {
  //   try {
  //     const response = await API.get("/api/post?page=1");
  //     if (response.status === 200) {
  //       setData(response.data.data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // React.useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data &&
          data.map((item: DataType) => <Card key={item.id} data={item} />)}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination pagination={pagination} path="/blog" />
      </div>
    </div>
  );
}

export default Blog;
