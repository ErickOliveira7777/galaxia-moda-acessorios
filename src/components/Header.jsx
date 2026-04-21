import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      
      {/* Logo */}
      <h1>🌌 Galáxia Moda e Acessórios</h1>

      {/* Navegação */}
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/Products">Produtos</Link>
        <Link to="/contact">Contato</Link>

        {/* 🌙 Dark Mode */}
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* Carrinho */}
      <Link to="/cart" className="cart" style={{ color: "#38bdf8" }}>
        🛒 Carrinho ({totalItems})
      </Link>

    </header>
  );
}