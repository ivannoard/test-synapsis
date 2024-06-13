import { Home } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import { ResponseDataType } from "@/utils/typeinterface";
import axios from "axios";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function page() {
  const response = await API.get(`/api/post?page=2`);
  response.data.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });
  return <Home data={response.data.data} />;
}
