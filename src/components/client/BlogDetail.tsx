"use client";
import React from "react";
import CardUserProfile from "../CardUserProfile";
import API from "@/services/axiosInstance";
import axios from "axios";

function BlogDetail({ data }) {
  const [commentData, setCommentData] = React.useState([]);

  async function getComments(blog_id) {
    try {
      const response = await axios.get(`/api/comments?post_id=${blog_id}`);
      setCommentData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    getComments(data.id);
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
