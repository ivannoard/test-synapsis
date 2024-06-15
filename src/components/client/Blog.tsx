"use client";
import { DataType, PaginationType } from "@/utils/typeinterface";
import Card from "../Card";
import Pagination from "../Pagination";
import CardSkeleton from "../CardSkeleton";

type Props = {
  data: DataType[];
  pagination: PaginationType;
};

function Blog({ data, pagination }: Props) {
  console.log(data);
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data && data.length > 0
          ? data.map((item: DataType) => <Card key={item.id} data={item} />)
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <CardSkeleton key={item} />
            ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination pagination={pagination} path="/blog" />
      </div>
    </div>
  );
}

export default Blog;
