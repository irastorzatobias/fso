import axios from "axios";
const baseUrl = "/api/blogs";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("userToken")}` || null,
};

const getAll = async () => {
  const request = await axios.get(baseUrl, { headers });
  return request.data;
};

const addBlog = async (blog) => {
  const request = await axios.post(baseUrl, blog, { headers });
  return request.data;
};

const deleteBlog = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`, { headers });
  return request.data;
};

const likeBlog = async (id) => {
  const request = await axios.put(
    `${baseUrl}/${id}`,
    { like: true },
    { headers }
  );
  return request.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addBlog, deleteBlog, likeBlog };
