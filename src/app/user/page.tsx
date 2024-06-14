import { User } from "@/components";
import axios from "axios";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { name, page } = searchParams;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/public/v2/users${
      name ? `?name=${name}&` : ""
    }?page=${page}`,
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
  return <User data={response.data} pagination={pagination} />;
}
