
import listcategory from '../../../services/categoryarray.js';
import './index.css'

const CategoryList = ({ selectedCategory, selectedSubcategory, onSelectCategory, onSelectSubcategory }) => {
  return (
    <div className="category-list">
      {listcategory.map((category) => (
        <div key={category.slug} className="category-item">

          <button
            className={selectedCategory === category.slug ? "active" : ""}
            onClick={() => {
              if (selectedCategory === category.slug) {
                onSelectCategory(null);
                onSelectSubcategory(null);
              } else {
                onSelectCategory(category.slug);
                onSelectSubcategory(null);
              }
            }}
          >
            {category.name}
          </button>

          {selectedCategory === category.slug && (
            <div className="subcategory-list">
              {category.subcategories.map((sub) => (
                <button
                  key={sub}
                  className={
                    selectedSubcategory === sub
                      ? "subcategory-item active"
                      : "subcategory-item"
                  }
                  onClick={() => onSelectSubcategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default CategoryList;
