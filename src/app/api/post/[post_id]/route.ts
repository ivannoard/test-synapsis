import axios from "axios";
import { NextRequest } from "next/server";

type ResponseDataType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
  category: string;
};

export async function GET(
  req: NextRequest,
  { params: { post_id } }: { params: { post_id: string } }
) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/posts/${post_id}`
  );

  // response.data.data.forEach((element: ResponseDataType) => {
  //   element.category = getRandomCategory();
  // });

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
  });
}
