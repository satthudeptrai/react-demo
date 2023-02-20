import axios from 'axios';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const setupAxios = () => {
  axios.defaults.baseURL = `https://pokeapi.co/api/v2`;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  axios.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  });

  // Thêm một bộ đón chặn response
  axios.interceptors.response.use((response) => {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  }, function (error) {
    if (error?.response?.status !== 200) {
      // history.push('/error');
    }
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });
}