import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import "./styles/App.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;