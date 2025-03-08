import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        const newQuantity = itemInCart.quantity + 1;
        const newTotalPrice = action.payload.price * newQuantity;

        itemInCart.quantity = newQuantity;
        itemInCart.totalPrice = newTotalPrice;
      } else {
        state.data.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
          totalPrice: action.payload.price,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
