import React from "react";

import { Link } from "react-router-dom";

import App from "../layouts/App";

function Default() {
  return (
    <>
      <App className={`flexc min-h-screen`}>
        <div className="text-3xl font-bold">Hello World</div>
      </App>
    </>
  );
}

export default Default;
