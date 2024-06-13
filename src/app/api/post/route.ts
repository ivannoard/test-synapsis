import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import { NextRequest } from "next/server";

type ResponseDataType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
  category: string;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string);
  const page = searchParams.get("page");

  const response = await API.get(`/public/v2/posts`, {
    params: {
      page,
    },
  });

  response.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });

  // const unsplash = await axios.get(
  //   `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=10&topics=blog`
  // );

  // if (unsplash.status === 200) {
  //   for (let i = 0; i < response.data.length; i++) {
  //     response.data[i].image = unsplash.data[i].urls.full;
  //   }
  // }

  return Response.json({
    message: "Successfully retrieved data!",
    data: response.data,
    pagination: {
      page: Number(response.headers["x-pagination-page"]),
      limit: Number(response.headers["x-pagination-limit"]),
      total: Number(response.headers["x-pagination-total"]),
      pages: Number(response.headers["x-pagination-pages"]),
    },
  });
}
