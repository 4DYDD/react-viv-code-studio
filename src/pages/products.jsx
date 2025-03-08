import React, { Fragment, useEffect, useRef, useState } from "react";

import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";
import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";
import { getProducts } from "../services/product-service";
import TableCart from "../fragments/TableCart";
import { useSelector } from "react-redux";

function ProductsPage() {
  //
  //
  //

  // const myDatas = [
  //   {
  //     id: 1,
  //     image: {
  //       url: shoes,
  //       name: "Sepatu",
  //     },
  //     title: "Sepatu Lama",
  //     description: `Still me nevermore the scarce raven if entrance what, then. Shall
  //                 lenore to both said sat said, the no fiend wandering on uncertain
  //                 from. I then and from the i guessing shrieked. The followed hopes i
  //                 my and i. Velvet soul shore as madam repeating.`,
  //     price: 500000,
  //     theRef: useRef(null),
  //   },
  //   {
  //     id: 2,
  //     image: {
  //       url: shoes,
  //       name: "Sepatu",
  //     },
  //     title: "Sepatu Baru",
  //     description: `Still me nevermore the scarce raven if entrance what, then. Shall
  //                 lenore to both said sat said, the no fiend wandering on uncertain
  //                 from. I then and from the i guessing shrieked. The followed hopes i
  //                 my and i. Velvet soul shore as madam repeating.`,
  //     price: 1000000,
  //     theRef: useRef(null),
  //   },
  //   {
  //     id: 3,
  //     image: {
  //       url: shoes,
  //       name: "Sepatu",
  //     },
  //     title: "Sepatu Ajah",
  //     description: `Still me nevermore the scarce raven if entrance what, then. Shall
  //                 lenore to both said sat said, the no fiend wandering on uncertain
  //                 from. I then and from the i guessing shrieked. The followed hopes i
  //                 my and i. Velvet soul shore as madam repeating.`,
  //     price: 100000,
  //     theRef: useRef(null),
  //   },
  // ];

  // const findDatas = (id) => {
  //   const imDatas = datas.slice();
  //   const theDatas = imDatas.find((valuenya) => valuenya.id === id);
  //   return theDatas;
  // };

  const handleSetProducts = (datanya) => {
    let newProducts = datanya.slice();
    newProducts = newProducts.filter((value, index) => index < 6);

    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const handle = {
    AddToCart: function (value) {
      const newCart = cart.slice();
      const theProduct = findProduct(products, value.id);

      if (cart.find((valuenya) => valuenya.id === theProduct.id)) {
        const updatedCart = newCart.map((valuenya) => {
          const newQuantity = valuenya.quantity + 1;
          const newTotalPrice = theProduct.price * newQuantity;

          return valuenya.id === theProduct.id
            ? {
                ...valuenya,
                quantity: newQuantity,
                totalPrice: newTotalPrice,
              }
            : valuenya;
        });

        setCart(updatedCart);
      } else {
        setCart([
          {
            id: theProduct.id,
            quantity: 1,
            totalPrice: theProduct.price,
          },
          ...cart,
        ]);
      }
    },
    DeleteCartList: function (id) {
      const newCart = cart.slice();
      const updatedCart = newCart.filter((value) => value.id !== id);
      setCart(updatedCart);

      if (updatedCart.length < 1) {
        localStorage.removeItem("cart");
      }
    },
  };

  // const [datas, setDatas] = useState(myDatas);
  // const [cart, setCart] = useState([]);

  const cart = useSelector((state) => state.cart.data);
  const [products, setProducts] = useState([]);

  const haveCart = cart.length > 0;
  const haveProducts = products.length > 0;

  const totalPrice = cart
    .map((value) => value.totalPrice)
    .reduce((prev, value) => prev + value, 0);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      getProducts((data) => {
        console.log(JSON.parse(JSON.stringify(data)));
        const datanya = JSON.parse(JSON.stringify(data));

        handleSetProducts(datanya);
      });
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //
  //
  //
  return (
    <>
      <App className={`min-h-screen pt-24 pb-12`}>
        <div className="grid w-full grid-cols-1 gap-4 lg:w-[65%] lg:grid-cols-3 md:grid-cols-2">
          {/*  */}

          {haveProducts &&
            products.map(({ id, image, title, description, price }, index) => {
              return (
                <Fragment key={index}>
                  <CardProduct className={`my-2`}>
                    {/*  */}
                    {/*  */}
                    {/*  */}

                    <CardProduct.Header
                      image={image}
                      alt={`gambarnya`}
                      id={id}
                    />
                    <CardProduct.Body title={title}>
                      {description}
                    </CardProduct.Body>
                    <CardProduct.Footer id={id} handle={handle} price={price} />

                    {/*  */}
                    {/*  */}
                    {/*  */}
                  </CardProduct>
                </Fragment>
              );
            })}

          {/*  */}
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {haveCart && <TableCart products={products} handle={handle} />}
      </App>
    </>
  );
}

export default ProductsPage;
