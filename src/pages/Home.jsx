import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  }

  async function handleFilter(category) {
    
    if (category === "all") {
      loadProducts();
    } else {
      const data = await getProductsByCategory(category);
      setProducts(data);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <CategoryFilter onSelect={handleFilter} />

      {/* Produtos */}
      <div className="grid">
        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}