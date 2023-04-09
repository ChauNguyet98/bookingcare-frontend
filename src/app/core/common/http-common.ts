import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
