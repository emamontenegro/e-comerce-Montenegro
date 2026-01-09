import { Link, useParams } from "react-router";
import listcategory from "../../../services/categoryarray.js";
import "./index.css";

const CategoryList = () => {
  const { categoryId, subcategoryId } = useParams();

  return (
    <div className="category-list">
      {listcategory.map((category) => (
        <div key={category.slug} className="category-item">

          <Link
            className={categoryId === category.slug ? "active" : ""}
            to={`/category/${category.slug}`}
          >
            {category.name}
          </Link>

          {categoryId === category.slug && (
            <div className="subcategory-list">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub}
                  to={`/category/${category.slug}/${sub}`}
                  className={
                    subcategoryId === sub
                      ? "subcategory-item active"
                      : "subcategory-item"
                  }
                >
                  {sub}
                </Link>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default CategoryList;
