"use client";
import { usePathname } from "next/navigation";
import React from "react";
import CardHeader from "./CardHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardUserProfile from "./CardUserProfile";

function HeaderLayout() {
  const router = usePathname();
  const useHeader = ["/"];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {useHeader.includes(router) && (
        <>
          <div className="grid grid-cols-12 mb-8 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <div className="min-h-[400px] bg-red-500 rounded-md"></div>
              <CardUserProfile size="lg" />
              <p className="line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia odio vero ullam fugiat totam necessitatibus voluptas.
                Hic laboriosam veniam laudantium debitis ex molestias repellat
                eius rerum? Soluta nam non consequatur facilis quisquam tempora
                veniam obcaecati sapiente consectetur dicta cumque odio fugiat
                perferendis, fuga, harum corrupti eveniet. Culpa mollitia
                consequuntur ex!
              </p>
            </div>
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <CardHeader key={item} />
              ))}
            </div>
          </div>
          <div className="carousel lg:hidden">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="">
                  <CardHeader />
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
