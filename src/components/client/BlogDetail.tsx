"use client";
import API from "@/services/axiosInstance";
import { DataType } from "@/utils/typeinterface";
import React from "react";
import CardUserProfile from "../CardUserProfile";
import { useRouter } from "next/navigation";

type CommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  data: DataType;
};

function BlogDetail({ data }: Props) {
  const router = useRouter();
  const [commentData, setCommentData] = React.useState<CommentType[]>([]);

  async function getComments(blog_id: number) {
    try {
      const response = await API.get(`/api/comments?post_id=${blog_id}`);
      setCommentData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    getComments(data.id as number);
  }, [data.id]);

  return (
    <>
      <div className="col-span-12 flex justify-center">
        <div className="lg:w-9/12 mx-auto">
          <div className="image">
            <div className="w-full h-[450px] rounded-md bg-blue-500"></div>
          </div>
          <div className="lg:w-10/12 mx-auto mt-4">
            <CardUserProfile size="lg" data={data} />
            <div className="mt-4">
              <p>{data.body}</p>
            </div>
          </div>
          <div className="mt-4 lg:w-10/12 mx-auto border p-4 rounded-md">
            <div className="pb-2 border-b-2">
              <h4 className="font-semibold">
                Comments ({commentData?.length})
              </h4>
            </div>
            {commentData?.map((item) => (
              <div className="card-comment bg-white mt-4" key={item.id}>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-[10px] text-gray-300">{item.email}</p>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
