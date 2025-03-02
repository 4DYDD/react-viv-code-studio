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

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(
      JSON.parse(JSON.stringify(localStorage.getItem("datas"))) || myDatas
    );
  }, []);

  const handle = {
    AddToCart: function (value) {
      if (!localStorage.getItem("datas")) {
        localStorage.setItem(
          "datas",
          JSON.stringify([
            {
              id: value.id,
              title: value.title,
              price: value.price,
            },
          ])
        );

        setDatas(JSON.parse(JSON.stringify(localStorage.getItem("datas"))));
      }
    },
    DeleteCartList: function (id) {
      // const storageDatas = localStorage.getItem("datas")
      const newDatas = datas.filter((valuenya) => valuenya.id !== id);
      localStorage.removeItem("datas");
      localStorage.setItem("datas", newDatas);
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
            <div>
              {JSON.parse(JSON.stringify(localStorage.getItem("datas")))?.id ||
                "kosong"}
            </div>
            <div>
              {JSON.parse(JSON.stringify(localStorage.getItem("datas")))
                ?.title || "kosong"}
            </div>
            <div>
              {JSON.parse(JSON.stringify(localStorage.getItem("datas")))
                ?.price || "kosong"}
            </div>
            <div>
              {localStorage.getItem("datas") ? (
                <button
                  onClick={handle.DeleteCartList(
                    JSON.parse(JSON.stringify(localStorage.getItem("datas")))
                      ?.id
                  )}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg shadow"
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
