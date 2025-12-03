import Card from "../../components/common/card";
import CategoryList from "../../components/common/categorieslist";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import "./index.css";

const Shop = () => {
  const { items, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = items.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;

    const subcategoryMatch = selectedSubcategory
      ? product.subcategory === selectedSubcategory
      : true;

    return categoryMatch && subcategoryMatch;
  });

  return (
    <>

      <h2 className="shop-title">Tienda</h2>

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
          <div className="product-grid">
            {filteredProducts.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Shop;
