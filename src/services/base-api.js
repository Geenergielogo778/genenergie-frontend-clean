// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
// import { BASE_URL } from "@root/config";
// import { TAGS } from "./tags";
// import toast from "react-hot-toast";


const TAGS = [];
const BASE_URL = "";

// Create baseQuery instance
const baseQuery = async (args, api, extraOptions) => {
  const response = await fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = "";

      if (token) {
        headers.set("ngrok-skip-browser-warning", "69420")
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);
  // if (response.error && typeof response.error.status === 'number' && response.error.status > 300) {
  //   response.error.data && toast.error((response.error.data as ErrorInterface).message);
  // };
  return response
};

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});