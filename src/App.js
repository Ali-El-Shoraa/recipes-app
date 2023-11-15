import Header from "./components/Header";
import Home from "./components/Home";
import Cuisine from "./pages/Cuisine";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-app/" element={<Home />} />
          <Route path="/recipes-app/cuisine/:name" element={<Cuisine />} />
          <Route path="/recipes-app/recipe/:id" element={<Recipe />} />
          <Route path="/recipes-app/searched/:name" element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
