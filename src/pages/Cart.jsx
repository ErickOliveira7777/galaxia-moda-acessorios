import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    total,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [msg, setMsg] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      
      {/* ✅ MENSAGEM */}
      {msg && (
        <p
          style={{
            background: "#22c55e",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {msg}
        </p>
      )}

      {/* 🛒 CARRINHO VAZIO */}
      {cart.length === 0 ? (
        <Link 
          to="/" className="link-cart"
          style={{ textDecoration: "none", color: "#272e26ff" }}
        >
          <h2>🛒 Carrinho vazio</h2>
          <p style={{ marginTop: "5px" }}>
            👉 Clique aqui para adicionar produtos
          </p>
        </Link>
      ) : (
        <>
          <h2 style={{ color: "#272e26ff" }}>🛒 Seu Carrinho</h2>

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
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
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
        </>
      )}

      {/* 💰 FINALIZAR COMPRA */}
      {cart.length > 0 && (
        <button
          onClick={() => {
            setMsg("✅ Compra Finalizada com Sucesso!");
            clearCart();

            setTimeout(() => {
              setMsg("");
            }, 2000);
          }}
          style={{
            marginTop: "10px",
            background: "#37d34eff",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          🪙 Finalizar Compra
        </button>
      )}
    </div>
  );
}