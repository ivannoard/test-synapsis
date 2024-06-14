"use client";
import { Modal } from "@/components";
import API from "@/services/axiosInstance";
import { PaginationType } from "@/utils/typeinterface";
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
import Pagination from "../Pagination";
import toast from "react-hot-toast";

type UserType = {
  id?: number;
  email: string;
  gender: string;
  name: string;
  status: string;
};

type Props = {
  data: UserType[];
  pagination: PaginationType;
};

function User({ data, pagination }: Props) {
  const route = useSearchParams();
  const router = useRouter();
  const query = route.get("name");
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);
  const [isShowEditModal, setIsShowEditModal] = React.useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = React.useState(false);
  const [isShowModalAllPost, setIsShowModalAllPost] = React.useState(false);
  const [activeData, setActiveData] = React.useState<UserType>(data[0]);
  const [addData, setAddData] = React.useState({});
  const [updateData, setUpdateData] = React.useState({} as UserType);
  const [listPosts, setListPosts] = React.useState<{ title: string }[]>([]);
  const [isLoadPost, setIsLoadPost] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function handleChange(e: any) {
    setAddData({
      ...addData,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdateChange(e: any) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmitAddUser(e: any) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await API.post("/api/users", addData);
      if (response.status === 200) {
        router.refresh();
        setIsShowAddModal(false);
        setIsLoading(false);
        toast.success("Successfully add new user!");
      }
    } catch (e) {
      router.refresh();
      setIsLoading(false);
      toast.error("An error occured!");
      console.log(e);
    }
  }

  async function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await API.delete(`/api/users/${activeData.id}`);
      if (response.status === 200) {
        // updateData();
        // setIsShowDeleteModal(false);
        router.refresh();
        setActiveData(data[0]);
        setIsShowDeleteModal(false);
        setIsLoading(false);
        toast.success("Successfully delete user!");
      }
    } catch (e) {
      console.log(e);
      router.refresh();
      setIsLoading(false);
      toast.error("An error occured!");
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        name: updateData.name ? updateData?.name : activeData.name,
        email: updateData.email ? updateData?.email : activeData.email,
        status: updateData.status ? updateData?.status : activeData.status,
        gender: updateData.gender ? updateData?.gender : activeData.gender,
      };
      console.log(data);
      const response = await API.put(`/api/users/${activeData.id}`, data);
      if (response.status === 200) {
        router.refresh();
        setIsShowEditModal(false);
        setIsLoading(false);
        toast.success("Successfully update user!");
      }
    } catch (e) {
      console.log(e);
      router.refresh();
      setIsLoading(false);
      toast.error("An error occured!");
    }
  }

  async function getUserPost(id: number) {
    setIsLoadPost(true);
    try {
      const response = await API.get(`/api/users/${id}/posts`);
      if (response.status === 200) {
        setIsLoadPost(false);
        setListPosts(response.data.data);
        // toast.success("Successfully get user posts!");
      }
    } catch (e) {
      console.log(e);
      toast.error("An error occured!");
    }
  }

  React.useEffect(() => {
    setActiveData(data[0]);
  }, [data]);

  React.useEffect(() => {
    if (isShowModalAllPost) {
      getUserPost(activeData.id as number);
    }
    return () => {
      setListPosts([]);
    };
  }, [isShowModalAllPost, activeData]);

  return (
    <>
      {isShowAddModal && (
        <Modal
          name={"Add New User"}
          isOpen={isShowAddModal}
          onClick={() => setIsShowAddModal(false)}
        >
          <form className="flex flex-col gap-2" onSubmit={handleSubmitAddUser}>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="name"
                onChange={handleChange}
                placeholder="Input a name. . ."
              />
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="email"
                onChange={handleChange}
                placeholder="Input an email. . ."
              />
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="border rounded-md py-2 px-3 appearance-none"
                onChange={handleChange}
              >
                <option disabled>Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="gender"
                onChange={handleChange}
              /> */}
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="border rounded-md py-2 px-3 appearance-none"
                onChange={handleChange}
              >
                <option disabled>Choose Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md font-semibold"
              disabled={isLoading}
            >
              Add New User
            </button>
          </form>
        </Modal>
      )}
      {isShowEditModal && (
        <Modal
          isOpen={isShowEditModal}
          onClick={() => setIsShowEditModal(false)}
          name={"Edit User"}
        >
          <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="name"
                defaultValue={activeData.name}
                onChange={handleUpdateChange}
              />
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="email"
                defaultValue={activeData.email}
                onChange={handleUpdateChange}
              />
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="border rounded-md py-2 px-3 appearance-none"
                onChange={handleUpdateChange}
                defaultValue={activeData.gender}
              >
                <option disabled>Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {/* <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="gender"
                defaultValue={activeData.gender}
                onChange={handleUpdateChange}
              /> */}
            </div>
            <div className="field-group flex flex-col gap-1">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="border rounded-md py-2 px-3 appearance-none"
                onChange={handleUpdateChange}
                defaultValue={activeData.status}
              >
                <option disabled>Choose Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {/* <input
                type="text"
                className="border rounded-md py-1 px-3"
                name="status"
                defaultValue={activeData.status}
                onChange={handleUpdateChange}
              /> */}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md font-semibold"
              disabled={isLoading}
            >
              Update User
            </button>
          </form>
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
            <button
              className="py-1 rounded-md bg-white border text-red-500 border-red-500 w-1/6 hover:bg-red-600 hover:text-white transition"
              onClick={() => setIsShowDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="py-1 rounded-md bg-red-500 text-white border border-red-500 w-1/6 hover:bg-red-600 transition"
            >
              Yes
            </button>
          </div>
        </Modal>
      )}
      {isShowModalAllPost && (
        <Modal
          isOpen={isShowModalAllPost}
          onClick={() => setIsShowModalAllPost(false)}
          name={`${activeData.name}'s Posts`}
        >
          <div className="flex flex-col gap-4">
            {!isLoadPost &&
              listPosts.length > 0 &&
              listPosts.map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-md py-2 px-4 border shadow-md"
                >
                  <h4>{item.title}</h4>
                </div>
              ))}
            {!isLoadPost && listPosts.length === 0 && (
              <p className="text-xl text-center font-semibold">
                No posts available
              </p>
            )}
            {isLoadPost && (
              <p className="text-xl text-center font-semibold">Loading</p>
            )}
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
              <h1 className="font-semibold text-3xl">{activeData?.name}</h1>
              <h4>{activeData?.email}</h4>
              <p>{activeData?.status}</p>
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
            <p
              onClick={() => setIsShowModalAllPost(true)}
              className="text-left lg:text-center block mx-auto text-sm underline cursor-pointer"
            >
              See All Posts
            </p>
            <div className="buttons hidden lg:flex justify-center items-center gap-4 mt-4">
              <button
                className="py-1 rounded-md bg-yellow-500 text-white border w-1/4"
                onClick={() => setIsShowEditModal(true)}
              >
                Edit
              </button>
              <button
                className="py-1 rounded-md bg-red-500 text-white border w-1/4"
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
              className="px-8 py-1.5 border rounded-md bg-black text-white font-semibold"
              onClick={() => setIsShowAddModal(true)}
            >
              + Add User
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-8 gap-4 mt-8">
            {data &&
              data.map((item) => (
                <div
                  className="col-span-1"
                  key={item.id}
                  onClick={() => setActiveData(item)}
                >
                  <div className="flex justify-center items-center flex-col gap-2">
                    <div className="image bg-red-500 w-[150px] h-[150px] rounded-full" />
                    <p className="font-semibold text-center">{item.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Pagination pagination={pagination} path="/user" />
        </div>
      </div>
    </>
  );
}

export default User;
