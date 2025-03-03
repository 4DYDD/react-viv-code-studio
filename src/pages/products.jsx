import React, { Fragment, useEffect, useState } from "react";

import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";
import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";

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
    },
  ];

  const findDatas = (id) => {
    const imDatas = datas.slice();
    const theDatas = imDatas.find((valuenya) => valuenya.id === id);
    return theDatas;
  };

  const [datas, setDatas] = useState(myDatas);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setDatas(myDatas);
  // }, []);

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
      const theDatas = findDatas(value.id);

      if (cart.find((valuenya) => valuenya.id === theDatas.id)) {
        const updatedCart = newCart.map((valuenya) => {
          const newQuantity = valuenya.quantity + 1;
          const newTotalPrice = theDatas.price * newQuantity;

          return valuenya.id === theDatas.id
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
            id: theDatas.id,
            quantity: 1,
            totalPrice: theDatas.price,
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
    },
  };

  //
  //
  //
  return (
    <>
      <App className={`min-h-screen`}>
        <div className="grid w-full grid-cols-1 gap-4 bg-red-500 lg:grid-cols-3 md:grid-cols-2">
          {/*  */}

          {datas.map(({ id, image, title, description, price }, index) => (
            <Fragment key={index}>
              <CardProduct className={`my-5`}>
                {/*  */}
                {/*  */}
                {/*  */}

                <CardProduct.Header image={image.url} alt={image.name} />
                <CardProduct.Body title={title}>{description}</CardProduct.Body>
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
          ))}

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
            <thead className="[&>th]:bg-slate-400 [&>th]:px-5 [&>th]:py-2">
              <th className="rounded-tl-md">Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="bg-red-500 rounded-tr-md">Opsi</th>
            </thead>
            <tbody className="bg-white">
              {cart.map((value, index) => {
                const theDatas = findDatas(value.id);
                return (
                  <tr
                    key={index}
                    className="text-slate-500 [&>td]:px-5 [&>td]:py-1.5"
                  >
                    <td>{value.id}</td>
                    <td className="text-left">{theDatas.title}</td>
                    <td className="text-left">
                      {toIndonesiaCurrency(theDatas.price)}
                    </td>
                    <td>{value.quantity}</td>
                    <td className="text-left">
                      {toIndonesiaCurrency(value.totalPrice)}
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
            </tbody>
          </table>
        </div>
      </App>
    </>
  );
}

export default ProductsPage;
