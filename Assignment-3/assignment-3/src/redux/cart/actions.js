import { ADDPRODUCTSTOCART, DELETEPRODUCTSFROMCART } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADDPRODUCTSTOCART,
    payload: product,
  };
};

export const deleteFromCart = (product) => {
  return {
    type: DELETEPRODUCTSFROMCART,
    payload: product,
  };
};
