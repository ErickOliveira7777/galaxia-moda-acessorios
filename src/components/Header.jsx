import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      
      {/* Logo */}
      <h1>🌌 Galáxia Moda e Acessórios</h1>

      {/* Navegação */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Produtos</Link>
        <a href="#">Contato</a>
      </nav>

      {/* Carrinho */}
      <Link to="/cart" className="cart">
        🛒 Carrinho ({totalItems})
      </Link>

    </header>
  );
}