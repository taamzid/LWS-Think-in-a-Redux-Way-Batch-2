import { ADDBOOK, DELETED, LOADED, TOGGLEFEATURED } from "./actionTypes";

export const addProducts = (payload) => {
  return {
    type: ADDBOOK,
    payload,
  };
};

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};

export const toggleFeatured = (bookId) => {
  return {
    type: TOGGLEFEATURED,
    payload: bookId,
  };
};
