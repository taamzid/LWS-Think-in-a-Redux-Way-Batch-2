import { combineReducers } from "redux";
import bookReducer from "./bookList/bookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
