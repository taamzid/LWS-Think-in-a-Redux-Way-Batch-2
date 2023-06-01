import { ADDBOOK, DELETEBOOK } from "./actionTypes";

const initialState = [{}];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];

    case DELETEBOOK:
      return state.filter((book, index) => index - 1 !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
