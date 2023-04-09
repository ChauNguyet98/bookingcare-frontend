import http from "../common/http-common";

const get = (url: string, params: any) => {
  return http.get(url, { params: params });
};

const getArrayBuffer = (url: string, params: any) => {
  return http.get(url, {
    params: params,
    responseType: "arraybuffer",
    // observe: "response",
  });
};

const post = (url: string, data: any) => {
  return http.post(url, JSON.stringify(data));
};

const put = (url: string, data: any) => {
  return http.post(url, data);
};

const del = (url: string) => {
  return http.delete(url);
};

const ApiService = {
  get,
  getArrayBuffer,
  post,
  put,
  del,
};

export default ApiService;
