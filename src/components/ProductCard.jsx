export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">
        R$ {(product.price * 5).toFixed(2)}
      </p>
    </div>
  );
}