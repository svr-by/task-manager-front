import axios from 'axios';

import { getLocalValue } from '@/services/storageService';
import { SERVER_URL } from './server';

const authAPI = axios.create({ baseURL: SERVER_URL, withCredentials: true });
const API = axios.create({ baseURL: SERVER_URL });

API.interceptors.request.use((config) => {
  const token = getLocalValue('token');
  if (config.headers && token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export { authAPI, API };
