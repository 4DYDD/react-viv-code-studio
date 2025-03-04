import React, { useEffect, useRef, useState } from "react";
import App from "../layouts/App";
import SuperButton from "../elements/SuperButton";

function testbutton() {
  return (
    <App className={`flexc min-h-screen`}>
      <div>awerjawoierjiawoeior</div>
      <SuperButton
        onPressed={`text-red-500`}
        className={`rounded-lg w-36 h-14`}
      >
        halo gais
      </SuperButton>
    </App>
  );
}

export default testbutton;
