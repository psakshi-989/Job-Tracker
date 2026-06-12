import axios from "axios";
import { JOBS_ENDPOINT } from "../core/constants/jobConstants";

const jobAPI = axios.create({
  baseURL: JOBS_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT from localStorage to each request if present
jobAPI.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch (e) {
    // ignore
  }
  return config;
});

// If a request returns 401, clear auth and reload so user is redirected to login
jobAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // reload app to ensure auth state resets
        if (typeof window !== "undefined") window.location.reload();
      }
    } catch (e) {
      // ignore
    }
    return Promise.reject(error);
  },
);

export const getAllJobs = async () => {
  try {
    const response = await jobAPI.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await jobAPI.post("/", jobData);
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const updateJob = async (id, jobData) => {
  try {
    console.log("API updateJob called with:", id, jobData);
    const response = await jobAPI.put(`/${id}`, jobData);
    console.log("API updateJob response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating job ${id}:`, error);
    throw error;
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await jobAPI.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting job ${id}:`, error);
    throw error;
  }
};
