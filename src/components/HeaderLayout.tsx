"use client";
import API from "@/services/axiosInstance";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardHeader from "./CardHeader";
import CardUserProfile from "./CardUserProfile";
import axios from "axios";
import { DataType } from "@/utils/typeinterface";
import Image from "next/image";

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
      console.log(response);
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
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-4">
              {data &&
                data
                  .slice(1, 6)
                  .map((item) => <CardHeader key={item.id} data={item} />)}
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
