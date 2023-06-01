import { ADDPRODUCTS, DECREASEQUANTITY } from "./actionTypes";

export const addProducts = (payload) => {
  return {
    type: ADDPRODUCTS,
    payload,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: DECREASEQUANTITY,
    payload: product,
  };
};
