import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
 // const { addToCart } = useCart();
 // const cartContext = useCart();
 // console.log("CART CONTEXT:", cartContext);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <button onClick={() => addToCart(product)}>
          🛒 Adicionar ao carrinho
        </button>

        {/* 🔙 Botão voltar */}
        <button onClick={() => navigate(-1)} style= {{marginLeft: "20px"}}>
          ⬅ Voltar
        </button>
      </div>
      

      <br /><br />
      
      <img src={product.thumbnail} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>R$ {(product.price * 5).toFixed(2)}</h3>
    </div>
  );
}