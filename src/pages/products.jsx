import React from "react";
import shoes from "/images/shoes.jpg";

import App from "../layouts/App";
import CardProduct from "../fragments/CardProduct";

function ProductsPage() {
  return (
    <>
      <App className={`min-h-screen !flex-row`}>
        <CardProduct className={`mx-5`}>
          <CardProduct.Header image={shoes} alt={`sepatu`} />

          <CardProduct.Body title={`Sepatu Baru`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            accusantium necessitatibus ullam sapiente, recusandae iste officiis
            odit qui enim.
          </CardProduct.Body>

          <CardProduct.Footer price={`Rp 1.000.000`} />
        </CardProduct>

        <CardProduct className={`mx-5`}>
          <CardProduct.Header image={shoes} alt={`sepatu`} />

          <CardProduct.Body title={`Sepatu Baru`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            accusantium necessitatibus ullam sapiente, recusandae iste officiis
            odit qui enim.
          </CardProduct.Body>

          <CardProduct.Footer price={`Rp 1.000.000`} />
        </CardProduct>
      </App>
    </>
  );
}

export default ProductsPage;
