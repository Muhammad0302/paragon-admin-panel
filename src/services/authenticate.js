import axios from 'axios';
import { getBaseUrl, getBaseUrlSwati } from '../utils/getBaseUrl';
import { UserInfo, UserInfoSwathi } from '../utils/UserInfo';
const token = UserInfo();
const swathiToken = UserInfoSwathi();
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const configSwathi = {
  headers: {
    Authorization: `Bearer ${swathiToken}`,
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
const loginSwathi = async (email, password) => {
  try {
    const response = await axios.post(`${getBaseUrlSwati()}/admin/login`, {
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
const getUserDashboardStatsSwati = async () => {
  try {
    const response = await axios.get(`${getBaseUrlSwati()}/dashboard_stats`, configSwathi);
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

const getAllUsersSwathi = async () => {
  try {
    const response = await axios.get(`${getBaseUrlSwati()}/users`, configSwathi);
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
const addUserSwati = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrlSwati()}/register`, data, configSwathi);
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
const deleteUserSwathi = async (id) => {
  try {
    const response = await axios.delete(`${getBaseUrlSwati()}/deleteUser/${id}`, configSwathi);
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
const changeStatusSwathi = async (id, data) => {
  try {
    const response = await axios.post(
      `${getBaseUrlSwati()}/updateUserStatus/${id}`,
      data,
      configSwathi
    );
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
const getAllPackagesSwathi = async () => {
  try {
    const response = await axios.get(`${getBaseUrlSwati()}/packages`, configSwathi);
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
const addPackageSwathi = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrlSwati()}/packages/create`, data, configSwathi);
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
const deletePackageSwathi = async (id) => {
  try {
    const response = await axios.delete(
      `${getBaseUrlSwati()}/packages/destroy/${id}`,
      configSwathi
    );
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

const updatePackageSwathi = async (id, data) => {
  try {
    const response = await axios.post(
      `${getBaseUrlSwati()}/packages/update/${id}`,
      data,
      configSwathi
    );
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
const changeStatusPackageSwathi = async (id, status) => {
  try {
    console.log('The status field is', status);
    const response = await axios.post(
      `${getBaseUrl()}/packages/updateStatus/${id}`,
      { status: status },
      configSwathi
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
const addSubscriptionSwathi = async (data) => {
  try {
    const response = await axios.post(
      `${getBaseUrlSwati()}/subcriptions/create`,
      data,
      configSwathi
    );
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
const getAllSubscribePackagesSwathi = async () => {
  try {
    const response = await axios.get(`${getBaseUrlSwati()}/subcriptions`, configSwathi);
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
const deleteSubscriptionSwathi = async (id) => {
  try {
    const response = await axios.delete(
      `${getBaseUrlSwati()}/subcriptions/destroy/${id}`,
      configSwathi
    );
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
const updateUserSwathi = async (data) => {
  try {
    const response = await axios.post(`${getBaseUrlSwati()}/updateUser`, data, configSwathi);
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
const approveSubscriptionSwathi = async (id) => {
  try {
    const response = await axios.post(
      `${getBaseUrlSwati()}/subcriptions/approveSubscription/${id}`,
      { status: 1 },
      configSwathi
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
  getUserDashboardStatsSwati,
  getAllUsersSwathi,
  addUserSwati,
  getAllSubscribePackagesSwathi,
  getAllPackagesSwathi,
  deleteUserSwathi,
  addSubscriptionSwathi,
  deleteSubscriptionSwathi,
  approveSubscriptionSwathi,
  updateUserSwathi,
  deletePackageSwathi,
  changeStatusPackageSwathi,
  addPackageSwathi,
  loginSwathi,
  changeStatusSwathi,
  updatePackageSwathi,
};
