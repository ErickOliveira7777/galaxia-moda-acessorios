import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    total,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#fff" }} >🛒 Carrinho vazio</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>🛒 Seu Carrinho</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h4>{item.title}</h4>

          {/* Quantidade */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={() => decreaseQuantity(item.id)}>➖</button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>➕</button>
          </div>

          {/* Preço */}
          <p>
            R$ {(item.price * item.quantity * 5).toFixed(2)}
          </p>

          {/* Remover */}
          <button
            onClick={() => removeFromCart(item.id)}
            style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px" }}
          >
            ❌ Remover
          </button>
        </div>
      ))}

      {/* Total */}
      <h3 style={{ marginTop: "20px" }}>
        Total: R$ {(total * 5).toFixed(2)}
      </h3>

      {/* Limpar */}
      <button
        onClick={clearCart}
        style={{
          marginTop: "10px",
          background: "#111",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        🧹 Limpar carrinho
      </button>
    </div>
  );
}