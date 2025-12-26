import Card from "../../components/common/card";
import CategoryList from "../../components/common/categorieslist";
import Searcher from "../../components/common/searcher";
import useProducts from "../../hooks/useProducts";
import { useFilter } from "../../hooks/search";
import { useState } from "react";
import "./index.css";

const Shop = () => {

  const { items, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const { query, setQuery, filteredData } = useFilter(items || []);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = filteredData.filter((product) => {
    
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;

    const subcategoryMatch = selectedSubcategory
      ? product.subcategory === selectedSubcategory
      : true;

    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="div-shop">
      <h2 className="shop-title">Tienda</h2>

      <Searcher filter={query} setFilter={setQuery} />

      <div className="shop-layout">
        <aside className="sidebar">
          <h3>Categorías</h3>
          <CategoryList
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            onSelectCategory={setSelectedCategory}
            onSelectSubcategory={setSelectedSubcategory}
          />
        </aside>

        <section className="shop">
          <div className="products-card">
            {filteredProducts.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;