import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import "./App.css";
import "./styles/global.css";
import { useCart } from "./context/CartContext";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </>
  );
}

export default App;