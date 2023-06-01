import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Nav from "./components/nav/Nav";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/videos/:videoId" element={<Video />} /> */}
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
