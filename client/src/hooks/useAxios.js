import axios from "axios";

const useAxios = () => {
  const BASE_URL = import.meta.env.VITE_API_BASEURL;

  const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {},
  });

  const _get = (url, config = {}) => {
    return axiosClient.get(url, config);
  };

  const _post = (url, data = {}, config = {}) => {
    return axiosClient.post(url, data, config);
  };

  const _put = (url, data = {}, config = {}) => {
    return axiosClient.put(url, data, config);
  };

  const _delete = (url, config = {}) => {
    return axiosClient.delete(url, config);
  };

  return { _get, _post, _put, _delete };
};

export default useAxios;
