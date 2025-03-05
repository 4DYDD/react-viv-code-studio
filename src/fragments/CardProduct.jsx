import React, { useEffect, useRef } from "react";

import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";

import Button from "../elements/Button";

const CardProduct = ({ children, className }) => {
  const theRef = useRef(null);

  useEffect(() => {
    theRef.current?.classList.add("animate-squish-barbar");

    if (theRef.current) {
      setTimeout(() => {
        theRef.current?.classList.add("animate-squish-barbar");
      }, 200);
    }
    // return () => {
    // };
  }, []);

  return (
    <>
      <div ref={theRef} className={`flexc ${className}`}>
        <div
          className={`w-full max-w-sm p-5 bg-gray-700 border border-gray-700 rounded-lg shadow shadow-gray-500`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

CardProduct.Header = ({ image, alt }) => {
  return (
    <>
      <a
        href="#"
        className="p-5 !overflow-hidden rounded-t-lg flexc h-48 bg-white w-80 mx-auto relative"
      >
        <img src={image} alt={alt} className="w-1/2 transcenter" />
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
            {title.substring(0, 20)}
          </h5>
          <p className="mt-1 text-sm text-white">
            {children.substring(0, 100)}
          </p>
        </a>
      </div>
    </>
  );
};

CardProduct.Footer = ({ value, handle, price }) => {
  return (
    <>
      <div className="mt-5 flexc !justify-between">
        <span className="text-xl font-bold text-white">
          {toIndonesiaCurrency(price, "usd")}
        </span>
        <Button
          onClick={(event) => {
            handle.AddToCart(value);
          }}
          className={`bg-blue-600 scale-100 active:scale-95 transall`}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default CardProduct;
