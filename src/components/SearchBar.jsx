export default function SearchBar({ value, onChange }) {
  return (
    <input className="searchBar"
      type="text"
      placeholder="🔍 Buscar produtos..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}