import { Home } from "@/components";
import { getRandomCategory } from "@/utils";
import { ResponseDataType } from "@/utils/typeinterface";
import axios from "axios";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/posts?page=${
      searchParams.page ? Number(searchParams.page) : 1
    }&limit=12`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );
  const pagination = {
    page: response.headers["x-pagination-page"],
    limit: response.headers["x-pagination-limit"],
    pages: response.headers["x-pagination-pages"],
    total: response.headers["x-pagination-total"],
  };
  response.data.forEach((element: ResponseDataType) => {
    element.category = getRandomCategory();
  });

  return <Home data={response.data} pagination={pagination} />;
}
