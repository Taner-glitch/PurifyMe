import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/accounts';

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register/`, {
    username: userData.username,
    email: userData.email,
    password: userData.password,
    password2: userData.password2
  });
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login/`, {
    username: userData.username,  
    password: userData.password
  });
  
  const { access, refresh } = response.data;
  localStorage.setItem('accessToken', access);
  localStorage.setItem('refreshToken', refresh);
  return response.data;
};

export const getMe = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await axios.get(`${API_BASE_URL}/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};