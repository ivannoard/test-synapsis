import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full shadow-md sticky top-0 bg-white">
        <div className="container mx-auto p-5 flex items-center">
          <div className="w-8/12">
            <h4 className="text-slate-500">Synapsis Blog</h4>
          </div>
          <div className="flex w-4/12 items-center gap-4 justify-end">
            <div className="search">
              <input
                type="text"
                className="w-full px-5 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="menus flex gap-4 ">
              <Link href={"/blog"}>Blog Posts</Link>
              <Link href={"/user"}>Users</Link>
              <button>Logout</button>
              <button>Signin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
