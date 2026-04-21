import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function CategoryFilter({ onSelect, isOpen, onClose }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  const handleSelect = (slug) => {
    setSelected(slug);
    onSelect(slug);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2 className="sidebar-title">Categorias</h2>
      </div>
      <ul className="category-list">
        <li>
          <button
            className={selected === "all" ? "active" : ""}
            onClick={() => handleSelect("all")}
          >
            🛍️ Todos
          </button>
        </li>

        {categories.map((cat) => (
          <li key={cat.slug}>
            <button
              className={selected === cat.slug ? "active" : ""}
              onClick={() => handleSelect(cat.slug)}
            >
              📦 {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}