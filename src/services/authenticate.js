import axios from 'axios';
import { getBaseUrl } from '../utils/getBaseUrl';
import { UserInfo } from '../utils/UserInfo';
const token = UserInfo();
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const login = async (email, password) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/admin/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const getUserDashboardStats = async () => {
  try {
    const response = await axios.get(`${getBaseUrl()}/dashboard_stats`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

export { login, getUserDashboardStats };
