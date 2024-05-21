"use client";

import { me } from "@/actions/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const data = await me();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    };
    checkUserLoggedIn();
  }, []);

  const loginContext = (user) => {
    setUser(user);
    console.log(user, "Auth Context");
  };

  return (
    <AuthContext.Provider value={{ user, loginContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
