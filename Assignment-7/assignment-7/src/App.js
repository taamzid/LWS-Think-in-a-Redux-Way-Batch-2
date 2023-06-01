import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddJob from "./components/add/AddJob";
import Aside from "./components/aside/Aside";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Nav />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addjob" element={<AddJob />}></Route>
        <Route path="/edit/:id" element={<Jobs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
