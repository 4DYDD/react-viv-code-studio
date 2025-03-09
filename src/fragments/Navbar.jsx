import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { getUsername, logout } from "../services/auth-service";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";
import Button from "../elements/Button";

function Navbar() {
  const token = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <>
      <nav
        className={`fixed top-0 z-20 w-full  ${
          isDarkMode ? "bg-gray-900" : "bg-gray-500"
        } border-b border-gray-600 start-0`}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {/* NANTI BUAT KONDISI DISINI */}
            {isDarkMode ? (
              <Button
                onClick={() => {
                  setIsDarkMode(false);
                }}
                className="text-white bg-black me-5"
              >
                dark
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setIsDarkMode(true);
                }}
                className="text-black bg-white me-5"
              >
                light
              </Button>
            )}
            {token && (
              <>
                <span className="mr-5 text-sm text-slate-400 flexc">
                  username : {getUsername(token)}
                </span>
                <Link
                  onClick={() => {
                    logout();
                  }}
                  to={`/loginPage`}
                  className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </Link>
              </>
            )}

            {!token && (
              <Link
                to={`/loginPage`}
                className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 text-sm font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 text-white rounded-sm md:bg-transparent md:p-0 md:hover:text-blue-500"
                  aria-current="page"
                >
                  Default
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="block px-3 py-2 text-white rounded-sm md:bg-transparent md:p-0 md:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/testbutton"}
                  className="block px-3 py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Test Button
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block px-3 py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/profilePage"}
                  className="block px-3 py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
