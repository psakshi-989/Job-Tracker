import axios from "axios";
import { API_BASE_URL } from "../core/constants/jobConstants";

const authAPI = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: { "Content-Type": "application/json" },
});

export const signup = async ({ username, password }) => {
  const response = await authAPI.post("/signup", { username, password });
  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await authAPI.post("/login", { username, password });
  return response.data;
};
