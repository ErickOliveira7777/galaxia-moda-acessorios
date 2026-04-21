import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="price">
        R$ {(product.price * 5).toFixed(2)}
      </p>
    </Link>
  );
}

