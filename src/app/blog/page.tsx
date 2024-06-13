import { Blog, Card } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import { DataType, ResponseDataType } from "@/utils/typeinterface";
import axios from "axios";
import React from "react";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function page() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/posts?page=1`
  );
  response.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });
  return <Blog data={response.data} />;
}
