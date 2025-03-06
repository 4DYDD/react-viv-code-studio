import { useEffect, useState } from "react";

export const useLogin = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const myToken = localStorage.getItem("token") || null;
    if (myToken) {
      setToken(myToken);
    } else {
      window.location.href = "/loginPage";
    }
  }, []);

  return token;
};
