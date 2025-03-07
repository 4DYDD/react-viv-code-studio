import React from "react";

function Button({ children, className, onClick = () => {} }) {
  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        className={`px-4 py-2 text-white shadow rounded-lg scale-100 active:scale-95 transall ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
