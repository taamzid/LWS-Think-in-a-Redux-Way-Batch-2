import { ADDBOOK, DELETED, LOADED, TOGGLEFEATURED } from "./actionTypes";
import initialState from "./initialState";

const addProductsId = (addProducts) => {
  const maxId = addProducts.reduce(
    (maxId, addProduct) => Math.max(addProduct.id, maxId),
    -1
  );
  return maxId + 1;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDBOOK:
      const newBook = {
        ...action.payload,
        id: addProductsId(state),
      };
      return [...state, newBook];
    case DELETED:
      return state.filter((book) => book.id !== action.payload);
    case TOGGLEFEATURED:
      const updatedBooks = state.map((book) =>
        book.id === action.payload
          ? { ...book, featured: !book.featured }
          : book
      );
      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};

export default bookReducer;
