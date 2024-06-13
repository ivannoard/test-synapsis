"use client";
import { BookText, Menu, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const [isShowMobile, setIsShowMobile] = React.useState(false);
  const router = useRouter();
  const menus = [
    {
      name: "Blog",
      icon: <BookText size={20} />,
    },
    {
      name: "User",
      icon: <User size={20} />,
    },
  ];

  function handleChange(e: any) {
    const value = e.target.value;
    if (e.key === "Enter" || e.keyCode === 13) {
      console.log(value);
      router.push(`/user?name=${value}`);
    }
  }

  return (
    <>
      <div className="w-full shadow-md sticky top-0 bg-white z-[30]">
        <div className="container mx-auto p-5 flex items-center">
          <div className="w-8/12">
            <Link href={"/"}>
              <h4 className="text-slate-500">Synapsis Blog</h4>
            </Link>
          </div>
          <div
            className="lg:hidden w-4/12"
            onClick={() => setIsShowMobile(true)}
          >
            <Menu size={20} className="block ml-auto" />
          </div>
          <div className="hidden lg:flex w-4/12 items-center gap-4 justify-end">
            <div className="search">
              <input
                type="text"
                className="w-full px-5 py-2 border border-gray-300 rounded-lg"
                placeholder="Search user"
                onKeyUp={handleChange}
              />
            </div>
            <div className="menus flex gap-4 ">
              {menus.map((item) => (
                <Link
                  href={`/${item.name.toLowerCase()}`}
                  key={item.name}
                  className="flex items-center gap-2"
                >
                  {item.icon}{" "}
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                </Link>
              ))}
              {/* <button>Logout</button>
              <button>Signin</button> */}
            </div>
          </div>
          {isShowMobile && (
            <>
              <div
                className="fixed min-h-screen w-full bg-black bg-opacity-30 left-0 top-0 z-[9]"
                onClick={() => setIsShowMobile(false)}
              />
              <div className="fixed min-h-screen lg:hidden w-8/12 bg-white shadow-md border left-0 top-0 z-[10] p-4">
                <div className="header pb-2 border-b-2">
                  <h4 className="font-semibold text-center">Synapsis</h4>
                </div>
                <div className="input mt-4">
                  <input
                    type="text"
                    className="rounded-md py-1 border w-full"
                  />
                </div>
                <div className="menus mt-4 pb-8 border-b-2">
                  <div className="flex flex-col gap-4">
                    {menus.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-2"
                        onClick={() => {
                          setIsShowMobile(false);
                          router.push(`/${item.name.toLowerCase()}`);
                        }}
                      >
                        {item.icon}{" "}
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
