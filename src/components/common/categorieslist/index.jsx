import listcategory from "../categoryarray.js";
import './index.css'

const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
      {listcategory.map((category) => (
        <div key={category.slug} className="category-item">
          <button
            className={selectedCategory === category.slug ? "active" : ""}
            onClick={() => onSelectCategory(category.slug)}
          >
            {category.name}
          </button>

          <div className="subcategory-list">
            {category.subcategories.map((sub) => (
              <span key={sub} className="subcategory-item">
                {sub}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;



