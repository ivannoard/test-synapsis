"use client";
import API from "@/services/axiosInstance";
import { DataType } from "@/utils/typeinterface";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardHeader from "./CardHeader";
import CardUserProfile from "./CardUserProfile";

function HeaderLayout() {
  const router = useRouter();
  const route = usePathname();
  const useHeader = ["/"];
  const [data, setData] = React.useState<DataType[]>([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  async function getData() {
    try {
      const response = await API.get(`/api/post?page=1`);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    if (route === "/") {
      getData();
    }
  }, [route]);

  return (
    <>
      {useHeader.includes(route) && (
        <>
          <div className="grid grid-cols-12 mb-8 gap-4">
            <div className="col-span-12 lg:col-span-9 cursor-pointer">
              {data.length > 0 ? (
                <div className="header-content">
                  <div
                    className="min-h-[400px] bg-red-500 rounded-md overflow-hidden"
                    onClick={() => router.push(`/blog/${data[0]?.id}`)}
                  >
                    {/* <Image
                  src={data[0]?.image}
                  alt={data[0]?.title}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full h-[400px] object-cover"
                /> */}
                  </div>
                  <CardUserProfile size="lg" data={data[0]} />
                  <p className="line-clamp-3">{data[0]?.body}</p>
                </div>
              ) : (
                <div className="header-skeleton-content-container animate-pulse">
                  <div className="min-h-[400px] bg-gray-200 rounded-md" />
                  <div className="header-skeleton-content mt-4 flex flex-col gap-2">
                    <div className="bg-gray-200 w-full h-[24px] rounded-md" />
                    <div className="w-1/4 bg-gray-200 h-[20px] rounded-md"></div>
                    <div className="skeleton-header-body flex flex-col gap-2">
                      <div className="bg-gray-200 w-10/12 h-[20px] rounded-md" />
                      <div className="bg-gray-200 w-9/12 h-[20px] rounded-md" />
                      <div className="bg-gray-200 w-7/12 h-[20px] rounded-md" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-4">
              {data.length > 0
                ? data
                    .slice(1, 6)
                    .map((item) => <CardHeader key={item.id} data={item} />)
                : [1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="skeleton-card flex gap-2 animate-pulse"
                    >
                      <div className="rounded-md bg-gray-200 min-w-[100px] lg:min-w-[150px] h-[100px] overflow-hidden" />
                      <div className="skeleton-header-content w-full h-full gap-2 flex flex-col">
                        <div className="w-full bg-gray-200 rounded-md h-[20px]" />
                        <div className="w-8/12 bg-gray-200 rounded-md h-[20px]" />
                        <div className="w-1/2 bg-gray-200 rounded-md h-[20px]" />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <div className="carousel lg:hidden">
            <Slider {...settings}>
              {data &&
                data.slice(1, 6).map((item) => (
                  <div key={item.id} className="">
                    <CardHeader data={item} />
                  </div>
                ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderLayout;
