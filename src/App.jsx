import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import { getProducts } from "./services/api";
import "./styles/global.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <ProductGrid products={products} />
    </>
  );
}

export default App;
