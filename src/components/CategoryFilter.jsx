import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function CategoryFilter({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="sidebar" style={{ padding: "20px" }}>
      <button onClick={() => onSelect("all")}>Todos</button>

      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}