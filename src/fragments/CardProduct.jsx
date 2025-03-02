import React from "react";

import Button from "../elements/Button";

function CardProduct({ children, className }) {
  return (
    <>
      <div className={`flexc ${className}`}>
        <div
          className={`w-full max-w-sm p-5 bg-gray-700 border border-gray-700 rounded-lg shadow shadow-gray-500`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

CardProduct.Header = ({ image, alt }) => {
  return (
    <>
      <a href="#">
        <img src={image} alt={alt} className="rounded-t-lg" />
      </a>
    </>
  );
};
CardProduct.Body = ({ children, title }) => {
  return (
    <>
      <div className="pt-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h5>
          <p className="mt-1 text-sm text-white">{children}</p>
        </a>
      </div>
    </>
  );
};

CardProduct.Footer = ({ value, handle, price }) => {
  return (
    <>
      <div className="mt-5 flexc !justify-between">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button
          onClick={(event) => {
            handle.AddToCart(value);
          }}
          className={`bg-blue-600`}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default CardProduct;
