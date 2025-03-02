import React from "react";
import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";

function ProductsPage() {
  //
  //
  //

  const datas = [
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
  ];

  //
  //
  //
  return (
    <>
      <App className={`min-h-screen`}>
        <div className="grid grid-cols-1 gap-8 bg-red-500 lg:grid-cols-3 md:grid-cols-2">
          {/*  */}

          {datas.map(({ image, title, description, price }, index) => (
            <React.Fragment key={index}>
              <CardProduct>
                {/*  */}
                {/*  */}
                {/*  */}

                <CardProduct.Header image={image.url} alt={image.name} />
                <CardProduct.Body title={title}>{description}</CardProduct.Body>
                <CardProduct.Footer price={price} />

                {/*  */}
                {/*  */}
                {/*  */}
              </CardProduct>
            </React.Fragment>
          ))}

          {/*  */}
        </div>
      </App>
    </>
  );
}

export default ProductsPage;
