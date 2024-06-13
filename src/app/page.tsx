import { Home } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import { ResponseDataType } from "@/utils/typeinterface";
import axios from "axios";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function page() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/posts?page=2`
  );
  console.log(response);
  response.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });
  return <Home data={response.data} />;
}
