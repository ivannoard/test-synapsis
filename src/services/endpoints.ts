import API from "./axiosInstance";

async function getPosts() {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/posts`
  );
  return response.data;
}

async function getUsers() {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/users`
  );
  return response.data;
}

async function getComments() {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/comments`
  );
  return response.data;
}

async function getDetailPost(post_id: number) {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/posts/${post_id}`
  );
  return response.data;
}

async function getDetailUser(user_id: number) {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/users/${user_id}`
  );
  return response.data;
}
async function getDetailComment(user_id: number) {
  const response = await API.get(
    `${process.env.NEXT_PUBLIC_URL}/public/v2/users/${user_id}`
  );
  return response.data;
}

const API_ENDPOINT = {
  getPosts,
  getUsers,
  getComments,
  getDetailPost,
  getDetailUser,
  getDetailComment,
};

export default API_ENDPOINT;
