import { Provider } from "react-redux";
import store from "./redux/store";
import Book from "./components/Book";

function App() {
  return (
    <Provider store={store}>
      <Book />
    </Provider>
  );
}

export default App;
