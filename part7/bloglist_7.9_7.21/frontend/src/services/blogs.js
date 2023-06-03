import axios from 'axios';
const baseUrl = '/api/blogs';

const setHeaders = () => {
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    return {
        headers: { Authorization: `Bearer ${userData.token}` },
    };
};

const getAll = async () => {
    const headers = setHeaders();
    const request = await axios.get(baseUrl, headers);
    return request.data;
};

const addBlog = async (blog) => {
    const headers = setHeaders();
    const request = await axios.post(baseUrl, blog, headers);
    return request.data;
};

const deleteBlog = async (id) => {
    const headers = setHeaders();
    const request = await axios.delete(`${baseUrl}/${id}`, headers);
    return request.data;
};

const likeBlog = async (id) => {
    const headers = setHeaders();
    const request = await axios.put(`${baseUrl}/${id}`, { like: true }, headers);
    return request.data;
};

export default { getAll, addBlog, deleteBlog, likeBlog };
