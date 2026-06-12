import { useCallback, useEffect, useState } from "react";
import * as authAPI from "../../api/authService";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null,
  );

  useEffect(() => {
    if (token && !user) {
      try {
        const stored = JSON.parse(localStorage.getItem("user"));
        setUser(stored);
      } catch {}
    }
  }, [token, user]);

  const login = useCallback(async ({ username, password }) => {
    const data = await authAPI.login({ username, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    return data;
  }, []);

  const signup = useCallback(async ({ username, password }) => {
    const data = await authAPI.signup({ username, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    return data;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }, []);

  return {
    user,
    token,
    isAuthenticated: !!token,
    login,
    signup,
    logout,
  };
};
