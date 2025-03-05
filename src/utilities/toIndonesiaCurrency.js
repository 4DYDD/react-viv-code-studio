const toIndonesiaCurrency = (number, from = "") => {
  return (number * (from ? 10000 : 1))
    .toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })
    .replace(/,00$/, "");
};

export default toIndonesiaCurrency;
