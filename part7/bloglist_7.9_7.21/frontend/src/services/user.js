import axios from 'axios';
const baseUrl = '/api/users';

const getUsers = async () => {
    try {
        const request = await axios.get(baseUrl);
        return request.data;
    } catch (error) {
        return error.response.data;
    }
};

const getUserPerId = async (id) => {
    try {
        const request = await axios.get(`${baseUrl}/${id}`);
        return request.data;
    } catch (error) {
        return error.response.data;
    }
};

export default { getUsers, getUserPerId };
