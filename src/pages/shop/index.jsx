import Card from "../../components/common/card";
import CategoryList from "../../components/common/categorieslist";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { items: products, loading } = useProducts();

  const handleSelectCategory = (slug) => setSelectedCategory(slug);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main className="shop-page">
      <h1>Shop</h1>

      <CategoryList
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;



