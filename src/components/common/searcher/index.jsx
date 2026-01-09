import './index.css';
import searchIcon from '../../../assets/icons/search.svg';

const Searcher = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button className="search-btn" onClick={onSearch}>
        <img src={searchIcon} className='img-search' alt="Buscar" />
      </button>
    </div>
  );
};

export default Searcher;
