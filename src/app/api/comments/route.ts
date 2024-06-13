import API from "@/services/axiosInstance";
import axios from "axios";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string);
  const id = searchParams.get("post_id");
  const response = await API.get(`/public/v2/posts/${id}/comments`);
  console.log(response);

  return Response.json({
    message: "Successfully retrieved data!",
    data: response.data,
    // pagination: {
    //   page: Number(response.headers["x-pagination-page"]),
    //   limit: Number(response.headers["x-pagination-limit"]),
    //   total: Number(response.headers["x-pagination-total"]),
    //   pages: Number(response.headers["x-pagination-pages"]),
    // },
  });
}
