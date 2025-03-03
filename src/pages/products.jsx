import React, { Fragment, useEffect, useState } from "react";
import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";

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
      price: "Rp 500.000",
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
      price: "Rp 1.000.000",
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
      price: "Rp 100.000",
    },
  ];

  const [datas, setDatas] = useState(myDatas);
  const [cart, setCart] = useState({});

  // useEffect(() => {
  //   setDatas(myDatas);
  // }, []);

  const handle = {
    AddToCart: function (value) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem(
          "cart",
          JSON.stringify({
            id: value.id,
            title: value.title,
            price: value.price,
          })
        );

        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    },
    DeleteCartList: function (id) {
      if (localStorage.getItem("cart")) {
        localStorage.removeItem("cart");
        setCart({});
      }
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
                  value={{ id, title, price }}
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
          <div className="font-bold">Keranjangmu :</div>
          <div className="flexc w-1/2 !justify-between mt-3">
            <div>{cart?.id || "kosong"}</div>
            <div>{cart?.title || "kosong"}</div>
            <div>{cart?.price || "kosong"}</div>
            <div>
              {localStorage.getItem("cart") ? (
                <button
                  onClick={() => {
                    handle.DeleteCartList(cart?.id);
                  }}
                  className="px-4 py-2 text-white scale-100 bg-red-500 rounded-lg shadow active:scale-95 transall"
                >
                  hapus
                </button>
              ) : (
                "kosong"
              )}
            </div>
          </div>
        </div>
      </App>
    </>
  );
}

export default ProductsPage;
