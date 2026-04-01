import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link
      to={`/product/${product.id}`}
      className="card"
      style={{ display: "block", margin: "10px", padding: "10px", border: "1px solid white" }}
    >
      <img src={product.thumbnail} width="100" />
      <h3>{product.title}</h3>
      <p>R$ {(product.price * 5).toFixed(2)}</p>
    </Link>
  );
}