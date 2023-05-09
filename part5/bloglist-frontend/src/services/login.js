import axios from "axios";
const baseUrl = "/api/login";

const userLogin = async (username, password) => {
  try {
      const request = await axios.post(baseUrl, { username, password });
      return request.data;
  } catch (error) {
      return error.response.data;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { userLogin };
