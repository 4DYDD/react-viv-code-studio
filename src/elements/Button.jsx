import React from "react";

function Button({ children, className, onClick = () => {} }) {
  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        className={`px-3 py-2 text-white shadow rounded-lg ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
