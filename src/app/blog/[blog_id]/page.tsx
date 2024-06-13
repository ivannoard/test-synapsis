import { BlogDetail, CardUserProfile } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import axios from "axios";
import React from "react";

export default async function page({
  params,
}: {
  params: { blog_id: string };
}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/posts/${Number(params.blog_id)}`
  );
  response.data.category = getRandomCategory();
  return <BlogDetail data={response.data} />;
}
