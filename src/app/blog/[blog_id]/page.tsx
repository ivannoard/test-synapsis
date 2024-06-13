import { BlogDetail, CardUserProfile } from "@/components";
import API from "@/services/axiosInstance";
import { getRandomCategory } from "@/utils";
import axios from "axios";
import React from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function page({
  params,
}: {
  params: { blog_id: string };
}) {
  const response = await API.get(`/api/post/${Number(params.blog_id)}`);
  console.log("blog ID ===================", response);
  response.data.data.category = getRandomCategory();
  return <BlogDetail data={response.data.data} />;
}
