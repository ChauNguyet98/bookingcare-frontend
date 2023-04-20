import axios from "axios";
import { setupInterceptorsTo } from "./http-interceptor";

export const http = setupInterceptorsTo(
  axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
);
