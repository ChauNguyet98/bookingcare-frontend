import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { store } from "../../store/store";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // console.log("request");
  // console.info(config);

  const token = store.getState().login.token;
  if (token) {
    config.headers["x-token"] = token;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.log("request error");
  // console.error(error);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.log("response");
  // console.info(response);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.log("response error");
  // console.error(error);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
