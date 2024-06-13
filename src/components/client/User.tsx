"use client";
import { Modal } from "@/components";
import {
  Facebook,
  Instagram,
  Linkedin,
  Pencil,
  Trash,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
function User() {
  const route = useSearchParams();
  const query = route.get("name");
  const [menuActive, setMenuActive] = React.useState(null);
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);
  const [isShowEditModal, setIsShowEditModal] = React.useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = React.useState(false);

  console.log(query);

  return (
    <>
      {isShowAddModal && (
        <Modal
          name={"Add New User"}
          isOpen={isShowAddModal}
          onClick={() => setIsShowAddModal(false)}
        >
          add
        </Modal>
      )}
      {isShowEditModal && (
        <Modal
          isOpen={isShowEditModal}
          onClick={() => setIsShowEditModal(false)}
          name={"Edit User"}
        >
          edit
        </Modal>
      )}
      {isShowDeleteModal && (
        <Modal
          isOpen={isShowDeleteModal}
          onClick={() => setIsShowDeleteModal(false)}
          name={"Delete User"}
        >
          <h4 className="text-xl my-4">
            Are yout sure want to delete this user?
          </h4>
          <div className="buttons flex w-full justify-end gap-4">
            <button className="py-1 rounded-md bg-white border text-red-500 border-red-500 w-1/6 hover:bg-red-600 hover:text-white transition">
              Cancel
            </button>
            <button className="py-1 rounded-md bg-red-500 text-white border border-red-500 w-1/6 hover:bg-red-600 transition">
              Yes
            </button>
          </div>
        </Modal>
      )}
      <div className="col-span-12">
        <div className="profile min-h-[200px] grid grid-cols-12 gap-4 pb-8 border-b-4">
          <div className="user col-span-12 lg:col-span-9 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="image w-full flex justify-center lg:block lg:w-auto">
              <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-yellow-500"></div>
            </div>
            <div className="user-info lg:pt-10">
              <h1 className="font-semibold text-3xl">John Doe</h1>
              <h4>Creator since 2022</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci natus corrupti atque ipsum ratione optio similique,
                vero quis. Distinctio, architecto esse. Sed quasi aspernatur
                sapiente, quidem officia autem tempora deleniti exercitationem
                vel soluta amet facilis commodi fuga dolorum! Sunt natus non
                magni doloremque fuga ea id maiores, pariatur libero neque.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 user-menu-button pt-10">
            <div className="flex justify-between items-center lg:justify-center">
              <h1 className="font-semibold text-xl text-left lg:text-center">
                Additional Info
              </h1>
              <div className="buttons flex items-center gap-2 lg:hidden">
                <div
                  onClick={() => setIsShowEditModal(true)}
                  className="w-[30px] h-[30px] bg-yellow-500 rounded-md flex items-center justify-center text-white"
                >
                  <Pencil size={20} />
                </div>
                <div
                  onClick={() => setIsShowDeleteModal(true)}
                  className="w-[30px] h-[30px] bg-red-500 rounded-md flex items-center justify-center text-white"
                >
                  <Trash size={20} />
                </div>
              </div>
            </div>
            <div className="social-media flex gap-4 justify-start lg:justify-center items-center my-4">
              <Instagram />
              <Linkedin />
              <Facebook />
              <Twitter />
            </div>
            <Link
              href="#"
              className="text-left lg:text-center block mx-auto text-sm underline"
            >
              See All Posts
            </Link>
            <div className="buttons hidden lg:flex justify-center items-center gap-4 mt-4">
              <button
                className="py-1 rounded-md bg-white border w-1/4"
                onClick={() => setIsShowEditModal(true)}
              >
                Edit
              </button>
              <button
                className="py-1 rounded-md bg-white border w-1/4"
                onClick={() => setIsShowDeleteModal(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex w-full justify-between items-center">
            <h4 className="font-semibold text-xl">Other Users</h4>
            <button
              className="px-8 py-1.5 border rounded-md bg-slate-900 text-white font-semibold"
              onClick={() => setIsShowAddModal(true)}
            >
              + Add User
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-8 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <div className="col-span-1" key={item}>
                <div className="flex justify-center items-center flex-col gap-2">
                  <div className="image bg-red-500 w-[150px] h-[150px] rounded-full" />
                  <p className="font-semibold">John Doe</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
