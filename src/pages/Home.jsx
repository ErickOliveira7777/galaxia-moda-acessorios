// 

import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}