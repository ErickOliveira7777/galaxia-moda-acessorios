import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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

        {/* 🔙 Botão voltar */}
      <button onClick={() => navigate(-1)}>⬅ Voltar</button>

      <br /><br />
      
      <img src={product.image} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>R$ {(product.price * 5).toFixed(2)}</h3>
    </div>
  );
}