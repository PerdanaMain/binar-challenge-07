import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/landing";
import Search from "./components/page/search-car";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getcars" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
