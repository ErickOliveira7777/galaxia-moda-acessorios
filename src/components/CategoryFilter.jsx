import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function CategoryFilter({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={() => onSelect("all")}>Todos</button>

      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}