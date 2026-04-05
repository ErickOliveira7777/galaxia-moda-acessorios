import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setLoading(true);

    if (category === "all") {
      await loadProducts();
    } else {
      const data = await getProductsByCategory(category);
      setProducts(data);
      setLoading(false);
    }
  }

  // 🔍 FILTRO DE BUSCA
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <CategoryFilter 
        onSelect={(cat) => {
          handleFilter(cat);
          setMenuOpen(false);
        }} 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Conteúdo */}
      <div style={{ flex: 1, padding: "20px" }}>
        <div style={{ display: "flex"}}>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {menuOpen && (
            <div className="overlay" onClick={() => setMenuOpen(false)} />
          )}
        
          {/* Barra de busca */}
          <SearchBar value={search} onChange={setSearch} />
        </div>
        {/* Produtos */}
        <div className="grid">
          {loading ? (
            <p>Carregando produtos...</p>
          ) : filteredProducts.length === 0 ? (
            <p>❌ Nenhum produto encontrado</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}