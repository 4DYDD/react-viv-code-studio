import React, { Fragment, useEffect, useRef, useState } from "react";

import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";
import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";
import { getProducts } from "../services/product-service";

function ProductsPage() {
  //
  //
  //

  const myDatas = [
    {
      id: 1,
      image: {
        url: shoes,
        name: "Sepatu",
      },
      title: "Sepatu Lama",
      description: `Still me nevermore the scarce raven if entrance what, then. Shall
                  lenore to both said sat said, the no fiend wandering on uncertain
                  from. I then and from the i guessing shrieked. The followed hopes i
                  my and i. Velvet soul shore as madam repeating.`,
      price: 500000,
      theRef: useRef(null),
    },
    {
      id: 2,
      image: {
        url: shoes,
        name: "Sepatu",
      },
      title: "Sepatu Baru",
      description: `Still me nevermore the scarce raven if entrance what, then. Shall
                  lenore to both said sat said, the no fiend wandering on uncertain
                  from. I then and from the i guessing shrieked. The followed hopes i
                  my and i. Velvet soul shore as madam repeating.`,
      price: 1000000,
      theRef: useRef(null),
    },
    {
      id: 3,
      image: {
        url: shoes,
        name: "Sepatu",
      },
      title: "Sepatu Ajah",
      description: `Still me nevermore the scarce raven if entrance what, then. Shall
                  lenore to both said sat said, the no fiend wandering on uncertain
                  from. I then and from the i guessing shrieked. The followed hopes i
                  my and i. Velvet soul shore as madam repeating.`,
      price: 100000,
      theRef: useRef(null),
    },
  ];

  const findDatas = (id) => {
    const imDatas = datas.slice();
    const theDatas = imDatas.find((valuenya) => valuenya.id === id);
    return theDatas;
  };

  const findProduct = (id) => {
    const imProducts = products.slice();
    const theProduct = imProducts.find((valuenya) => valuenya.id === id);
    return theProduct;
  };

  const handleSetProducts = (datanya) => {
    const newProducts = datanya.slice();

    setProducts(newProducts);
    setShowProducts(true);
  };

  const [datas, setDatas] = useState(myDatas);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  const haveProducts = products.length > 0;
  const totalPrice = cart
    .map((value) => value.totalPrice)
    .reduce((prev, value) => prev + value, 0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      console.log(JSON.parse(JSON.stringify(data)));
      const datanya = JSON.parse(JSON.stringify(data));

      handleSetProducts(datanya);
    });
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handle = {
    AddToCart: function (value) {
      // if (!localStorage.getItem("cart")) {
      // localStorage.setItem(
      //   "cart",
      //   JSON.stringify({
      //     id: value.id,
      //     title: value.title,
      //     price: value.price,
      //   })
      // );

      // setCart(JSON.parse(localStorage.getItem("cart")));
      // }

      const newCart = cart.slice();
      // const theDatas = findDatas(value.id);
      const theProduct = findProduct(value.id);
      console.log(theProduct);

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
      // if (localStorage.getItem("cart")) {
      //   localStorage.removeItem("cart");
      //   setCart({});
      // }

      const newCart = cart.slice();
      const updatedCart = newCart.filter((value) => value.id !== id);
      setCart(updatedCart);

      if (updatedCart.length < 1) {
        localStorage.removeItem("cart");
      }
    },
  };

  //
  //
  //
  return (
    <>
      <App className={`min-h-screen`}>
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {/*  */}

          {haveProducts &&
            showProducts &&
            products.map(({ id, image, title, description, price }, index) => {
              return (
                <Fragment key={index}>
                  <CardProduct className={`my-5`}>
                    {/*  */}
                    {/*  */}
                    {/*  */}

                    <CardProduct.Header image={image} alt={`gambarnya`} />
                    <CardProduct.Body title={title}>
                      {description}
                    </CardProduct.Body>
                    <CardProduct.Footer
                      value={{ id }}
                      handle={handle}
                      price={price}
                    />

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

        <div className="flex-col w-full my-10 text-center flexc">
          <table className="border-separate table-auto border-spacing-0.5 bg-slate-600 rounded-lg shadow shadow-gray-400">
            <thead className="[&_th]:bg-slate-400 [&_th]:px-5 [&_th]:py-2">
              <tr>
                <th className="rounded-tl-md">Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th className="bg-red-500 rounded-tr-md">Opsi</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {cart.length > 0 &&
                cart.map((value, index) => {
                  const theProduct = findProduct(value.id);
                  return (
                    <tr
                      key={index}
                      className="text-slate-500 [&>td]:px-5 [&>td]:py-1.5"
                    >
                      <td>{value.id}</td>
                      <td className="text-left">
                        {theProduct?.title.substring(0, 20)}
                      </td>
                      <td className="text-left">
                        {toIndonesiaCurrency(theProduct?.price, "usd")}
                      </td>
                      <td>{value.quantity}</td>
                      <td className="text-left">
                        {toIndonesiaCurrency(value.totalPrice, "usd")}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handle.DeleteCartList(value.id);
                          }}
                          className="px-4 py-2 text-white scale-100 bg-red-500 rounded-lg shadow transall active:scale-95"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={2}>Total Price</td>
                <td colSpan={4}>{toIndonesiaCurrency(totalPrice, "usd")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </App>
    </>
  );
}

export default ProductsPage;
