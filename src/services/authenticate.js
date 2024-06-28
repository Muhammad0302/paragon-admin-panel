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
const getAllUsers = async () => {
  try {
    const response = await axios.get(`${getBaseUrl()}/users`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const addUser = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/register`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${getBaseUrl()}/deleteUser/${id}`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const changeStatus = async (id, data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/updateUserStatus/${id}`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const getAllPackages = async () => {
  try {
    const response = await axios.get(`${getBaseUrl()}/packages`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const addPackage = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/packages/create`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const deletePackage = async (id) => {
  try {
    const response = await axios.delete(`${getBaseUrl()}/packages/destroy/${id}`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const updatePackage = async (id, data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/packages/update/${id}`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const changeStatusPackage = async (id, status) => {
  try {
    console.log('The status field is', status);
    const response = await axios.post(
      `${getBaseUrl()}/packages/updateStatus/${id}`,
      { status: status },
      config
    );
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const addSubscription = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/subcriptions/create`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const getAllSubscribePackages = async () => {
  try {
    const response = await axios.get(`${getBaseUrl()}/subcriptions`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const deleteSubscription = async (id) => {
  try {
    const response = await axios.delete(`${getBaseUrl()}/subcriptions/destroy/${id}`, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

const updateUser = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrl()}/updateUser`, data, config);
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};
const approveSubscription = async (id) => {
  try {
    const response = await axios.post(
      `${getBaseUrl()}/subcriptions/approveSubscription/${id}`,
      { status: 1 },
      config
    );
    return response.data;
  } catch (error) {
    console.error('error:', error.message);
    throw error; // Throw the error to be caught by the caller
  }
};

export {
  login,
  getUserDashboardStats,
  getAllUsers,
  addUser,
  deleteUser,
  changeStatus,
  getAllPackages,
  addPackage,
  changeStatusPackage,
  deletePackage,
  addSubscription,
  getAllSubscribePackages,
  deleteSubscription,
  updateUser,
  updatePackage,
  approveSubscription,
};
