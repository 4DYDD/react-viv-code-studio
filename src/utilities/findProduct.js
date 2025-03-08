const findProduct = (products, id) => {
  const imProducts = products.slice();
  const theProduct = imProducts.find((valuenya) => valuenya.id === id);
  return theProduct;
};

export default findProduct;
