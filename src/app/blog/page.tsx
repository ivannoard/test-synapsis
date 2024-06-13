import { Blog, Card } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import { DataType } from "@/utils/typeinterface";
import axios from "axios";
import React from "react";

export default async function page() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/posts?page=1`
  );
  response.data.forEach((element) => {
    element.category = getRandomCategory();
  });
  return <Blog data={response.data} />;
}
