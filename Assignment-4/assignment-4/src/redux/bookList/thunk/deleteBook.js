import { deleted } from "../actions";

const deleteTodo = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(deleted(bookId));
  };
};

export default deleteTodo;
