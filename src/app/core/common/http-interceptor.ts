import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import { store } from "../../store/store";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = store.getState().login.token;
  if (token) {
    config.headers["x-token"] = token;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response?.status === 201) {
    toast.success("Created successful!");
  } else if (response.data.message) {
    toast.success(response.data.message);
  }

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const dataError: any = error?.response?.data;
  if (
    error?.response?.status === 500 ||
    error?.response?.status === 404 ||
    error?.response?.status === 403 ||
    error?.response?.status === 401
  ) {
    if (dataError && dataError.error && dataError.error.message) {
      toast.error(dataError.error.message);
    } else {
      toast.error(error.response.statusText);
    }
  }

  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
