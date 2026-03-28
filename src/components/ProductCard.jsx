import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>R$ {(product.price * 5).toFixed(2)}</p>
    </Link>
  );
}