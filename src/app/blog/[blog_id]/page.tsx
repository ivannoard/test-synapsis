import { BlogDetail } from "@/components";
import { getRandomCategory } from "@/utils";
import axios from "axios";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function page({
  params,
}: {
  params: { blog_id: string };
}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/posts/${Number(params.blog_id)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );
  response.data.category = getRandomCategory();
  return <BlogDetail data={response.data} />;
}
