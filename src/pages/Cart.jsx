import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  if (cart.length === 0) {
    return <h2>🛒 Carrinho vazio</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Seu Carrinho</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <h4>{item.title}</h4>
          <p>Qtd: {item.quantity}</p>
          <p>R$ {(item.price * item.quantity * 5).toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id)}>
            ❌ Remover
          </button>
        </div>
      ))}

      <h3>Total: R$ {(total * 5).toFixed(2)}</h3>

      <button onClick={clearCart}>
        🧹 Limpar carrinho
      </button>
    </div>
  );
}