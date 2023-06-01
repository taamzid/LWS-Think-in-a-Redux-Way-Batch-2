import { Provider } from "react-redux";
import NavBar from "./components/Nav/NavBar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
}

export default App;
