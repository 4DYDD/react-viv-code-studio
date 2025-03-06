import React, { useEffect, useState } from "react";
import "../App.css";
import { login } from "../services/auth-service";

function loginPage() {
  const sanitizeInput = (input) => {
    // Escape karakter khusus HTML
    return String(input)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const [token, setToken] = useState();

  useEffect(() => {
    const myToken = localStorage.getItem("token") || null;
    if (myToken) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const usernameInput = event.target.username.value.trim();
    const passwordInput = event.target.password.value.trim();

    const safeUsername = sanitizeInput(usernameInput);
    const safePassword = passwordInput; // Password tidak perlu di-escape karena tidak ditampilkan

    const data = {
      username: safeUsername,
      password: safePassword,
    };

    login(data, (status, res) => {
      if (status) {
        console.log("login berhasil", res);
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        console.log("login gagal", res);
      }
    });
  };

  return (
    <>
      <div className="flex h-screen bg-indigo-700 font-inter">
        <div className="w-full max-w-xs p-5 m-auto bg-indigo-100 rounded">
          <header>
            <img
              className="w-20 mx-auto mb-5"
              src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            />
          </header>

          <form
            onSubmit={(event) => {
              handleLogin(event);
            }}
          >
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700"
                type="submit"
              />
            </div>
          </form>
          <footer>
            <a
              className="float-left text-sm text-indigo-700 hover:text-pink-700"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              className="float-right text-sm text-indigo-700 hover:text-pink-700"
              href="#"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default loginPage;
