console.log("🔥 ESTOU NO CARD DETAIL CERTO");
import { Link } from "react-router-dom";

export default function ProductCardDetail({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} className="cardDetail">
        <div style={{display:"inline-flex", height:"80px"}}>
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>
        </div>
      

      {/* ✅ DESCRIÇÃO */}
      <p className="description">
        {product.description}
      </p>

      <p className="price">
        R$ {(product.price * 5).toFixed(2)}
      </p>
    </Link>
  );
}