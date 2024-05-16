import axios from 'axios';
import { getBaseUrl } from '../utils/getBaseUrl';
import { UserInfo } from '../utils/UserInfo';
const userInfo = UserInfo();
const config = {
  headers: {
    Authorization: `Bearer ${userInfo?.token}`,
  },
};
// Make the login request
const login = async (email, password) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/admin/login`, {
      email,
      password,
    });
    return response.data; // Return the response data
  } catch (error) {
    // Handle login error
    console.error('Login error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

export { login };
