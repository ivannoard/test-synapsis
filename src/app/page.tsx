import { Home } from "@/components";
import { getRandomCategory } from "@/utils";
import { ResponseDataType } from "@/utils/typeinterface";
import axios from "axios";

export default async function page() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/posts?page=2`
  );
  response.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });
  return <Home data={response.data} />;
}
