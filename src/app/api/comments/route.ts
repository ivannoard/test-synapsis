import API from "@/services/axiosInstance";
import axios from "axios";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
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
