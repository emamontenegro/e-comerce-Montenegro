import './index.css';

const Searcher = ({ filter, setFilter }) => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Buscar por nombre o categoría..." 
        className="search-input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Searcher;