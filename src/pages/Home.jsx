import CategoryFilter from "../components/CategoryFilter";
import { getByCategory, getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function loadProducts(category) {
    if (category === "all") {
      const data = await getProducts();
      setProducts(data);
    } else {
      const data = await getByCategory(category);
      setProducts(data);
    }
  }

  useEffect(() => {
    loadProducts("all");
  }, []);

  return (
    <>
      <Header />
      <CategoryFilter onSelect={loadProducts} />
      <ProductGrid products={products} />
    </>
  );
}