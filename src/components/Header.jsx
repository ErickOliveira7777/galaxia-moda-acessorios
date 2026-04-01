import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  
  const { cart = [] } = useCart() || {};

  const totalItems = (cart || []).reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <header className="header">
      <div>
          {/* Logo */}
        <h1>🌌 Galáxia Moda e Acessórios</h1>
      </div>
      <div>
          {/* Carrinho*/}
        <Link to="/cart" className="cart">
          🛒 ({totalItems})
        </Link> 
      </div>
      <div>
          {/* Navegação */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Produtos</Link>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}