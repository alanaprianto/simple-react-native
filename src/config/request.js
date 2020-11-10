import axios from "axios";

import config from "./index";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = config.apiUrl;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
export default {
  get: (url, params) => axiosInstance({ method: "get", url, params }),
  post: (url, data) => axiosInstance({ method: "post", url, data }),
  put: (url, data) => axiosInstance({ method: "put", url, data }),
  delete: (url) => axiosInstance({ method: "delete", url }),
  setToken: (token) => {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
    }
  }
};
