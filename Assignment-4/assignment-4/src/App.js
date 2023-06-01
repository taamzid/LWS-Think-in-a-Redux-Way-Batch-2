import { Provider } from "react-redux";
import BookList from "./components/book/BookList";
import Nav from "./components/nav/Nav";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <BookList />
    </Provider>
  );
}

export default App;
