import React from "react";

import Button from "../elements/Button";

function CardProduct({ children }) {
  return (
    <>
      <div className="flexc">
        <div className="w-full max-w-sm p-5 bg-gray-700 border border-gray-700 rounded-lg shadow">
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

CardProduct.Footer = ({ price }) => {
  return (
    <>
      <div className="mt-5 flexc !justify-between">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button className={`bg-blue-600`}>Add to Cart</Button>
      </div>
    </>
  );
};

export default CardProduct;
