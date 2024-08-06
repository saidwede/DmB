import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // replace with your API base URL
  timeout: 1000, // optional
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers if needed
  },
  withCredentials: true,
});

export default axiosInstance;
