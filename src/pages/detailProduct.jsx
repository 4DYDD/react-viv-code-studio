import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product-service";
import App from "../layouts/App";
import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";
import Button from "../elements/Button";
import Rating from "react-rating";

function detailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
      console.log(data);
    });
  }, [id]);

  return (
    <>
      <App className={`min-h-screen antialiased`}>
        {Object.keys(product).length > 0 && (
          <div className="p-2 py-10 rounded-xl border border-gray-300 shadow lg:w-[70rem] shadow-gray-400">
            <div className="flexc">
              {/*  */}
              {/*  */}
              {/*  */}

              {/* GAMBARNYA */}
              <div className="flex-[1] flexc">
                <div className="size-[30rem] flexc overflow-hidden">
                  <img className="w-[50%]" src={product.image} alt="" />
                </div>
              </div>
              {/* GAMBARNYA */}

              {/* KETERANGANNYA */}
              <div className="flex-[2]">
                <Button className="bg-gray-600 text-[0.8rem]">
                  # {product.category}
                </Button>
                <div className="text-[3rem] font-bold pe-5">
                  {product.title}
                </div>
                <div className="text-[1rem] text-slate-500 pe-10">
                  {product.description}
                </div>
                <div className="mt-2 mb-5 flexc !justify-start gap-2">
                  <Rating
                    className="text-[1.5rem] text-yellow-500"
                    start={0}
                    stop={5}
                    initialRating={product.rating.rate}
                    readonly
                    emptySymbol={<i class="fa-regular fa-star"></i>}
                    fullSymbol={[1, 2, 3, 4, 5].map(() => (
                      <i class="fa-solid fa-star"></i>
                    ))}
                  />
                  <span className="text-slate-400">
                    {product.rating.rate} / 5.0 {`(${product.rating.count})`}
                  </span>
                </div>
                <div className="flexc !justify-start text-[2rem] gap-5 font-bold mb-5">
                  <div>{toIndonesiaCurrency(product.price, "usd")}</div>
                  <Button
                    className={`text-[1.1rem] px-5 bg-blue-500 shadow shadow-gray-400 gap-3 flexc`}
                  >
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    <span>Buy Now</span>
                  </Button>
                  <Button
                    className={`text-[1.1rem] px-5 bg-white text-blue-500 shadow shadow-gray-400 border border-gray-300 gap-3 flexc`}
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
              {/* KETERANGANNYA */}

              {/*  */}
              {/*  */}
              {/*  */}
            </div>
          </div>
        )}
      </App>
    </>
  );
}

export default detailProductPage;
