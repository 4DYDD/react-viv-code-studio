import React from "react";
import findProduct from "../utilities/findProduct";
import toIndonesiaCurrency from "../utilities/toIndonesiaCurrency";
import { useSelector } from "react-redux";

function TableCart({ products, handle }) {
  const cart = useSelector((state) => state.cart.data);

  const totalPrice = cart
    .map((value) => value.totalPrice)
    .reduce((prev, value) => prev + value, 0);

  return (
    <>
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
            {cart.map((value, index) => {
              const theProduct = findProduct(products, value.id);
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
            <tr className="px-5 [&>td]:py-2 bg-slate-400">
              <td colSpan={2}>Total Price</td>
              <td colSpan={4}>{toIndonesiaCurrency(totalPrice, "usd")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableCart;
