import { ADDBOOK, DELETEBOOK } from "./actionTypes";

export const addBook = (payload) => {
  return {
    type: ADDBOOK,
    payload,
  };
};

export const deleteBook = (index) => {
  return {
    type: DELETEBOOK,
    payload: index,
  };
};
