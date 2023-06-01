import { addProducts } from "../actions";

export const addBook = (book) => async (dispatch) => {
  const response = await fetch("http://localhost:9000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const newBook = await response.json();

  dispatch(addProducts(newBook));
};
