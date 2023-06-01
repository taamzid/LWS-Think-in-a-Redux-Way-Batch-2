import { toggleFeatured } from "../actions";

export const toggleBookFeatured = (id) => {
  return (dispatch, getState) => {
    const { books } = getState().bookReducer;
    const book = books.find((book) => book.id === id);

    if (book) {
      dispatch(toggleFeatured(id));
    }
  };
};
