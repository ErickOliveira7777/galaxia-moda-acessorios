import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </CartProvider>
);