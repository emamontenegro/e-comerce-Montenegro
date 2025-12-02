import Card from "../../components/common/card";
import CategoryList from "../../components/common/categorieslist";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import './index.css'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { items: products, loading } = useProducts();

  const handleSelectCategory = (slug) => setSelectedCategory(slug);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
      <h2 className="shop">Shop</h2>
      <div className="shop-layout">

        <aside className="sidebar">
          <h3>Categorías</h3>
          <CategoryList 
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory} />            
        </aside>

        <main className="product-grid">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Shop;



