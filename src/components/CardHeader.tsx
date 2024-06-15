"use client";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    id?: number;
    title: string;
    body: string;
    image: string;
  };
}

function CardHeader(props: Props) {
  const router = useRouter();
  return (
    <>
      {props.data && (
        <div
          className="card flex gap-2 cursor-pointer"
          onClick={() => router.push(`/blog/${props.data.id}`)}
        >
          <div className="rounded-md bg-red-500 min-w-[100px] lg:min-w-[150px] h-[100px] overflow-hidden">
            {/* <Image
          src={props.data?.image}
          alt={props.data?.title}
          width={100}
          height={100}
          loading="lazy"
          className="w-full h-[100px] min-h-[100px] object-cover"
        /> */}
          </div>
          <div className="header-content">
            <h4 className="font-semibold line-clamp-1">{props.data?.title}</h4>
            {/* <div className="header-content-bio my-2">
                <p className="text-[12px] font-semibold">Author - Category</p>
                <p className="text-sm text-gray-500">12 Juni 2024</p>
              </div> */}
            <p className="text-[13px] line-clamp-3">{props.data?.body}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardHeader;
