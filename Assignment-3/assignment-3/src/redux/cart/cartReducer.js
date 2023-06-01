import { ADDPRODUCTSTOCART, DELETEPRODUCTSFROMCART } from "./actionTypes";

import cartInitialState from "./cartInitialState";

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADDPRODUCTSTOCART:
      const itemToAdd = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.name === itemToAdd.prodName
      );
      if (existingItemIndex !== -1) {
        return state.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + itemToAdd.quantity,
            };
          }
          return item;
        });
      }
      return [
        ...state,
        {
          ...itemToAdd,
        },
      ];

    case DELETEPRODUCTSFROMCART:
      const remainingProducts = state.filter(
        (product) => product.prodName !== action.payload.prodName
      );
      return remainingProducts;

    default:
      return state;
  }
};

export default cartReducer;
