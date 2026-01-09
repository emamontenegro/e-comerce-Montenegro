import { useParams } from "react-router";
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import CategoryList from "../../components/common/categorieslist";
import Card from "../../components/common/card";
import Searcher from "../../components/common/searcher";
import "./index.css";

const Shop = () => {
  const { categoryId, subcategoryId } = useParams();
  const { items, loading } = useProducts();

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = items.filter((product) => {
    if (categoryId && product.category !== categoryId) return false;
    if (subcategoryId && product.subcategory !== subcategoryId) return false;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.subcategory?.toLowerCase().includes(term)
      );
    }

    return true;
  });

  return (
    <div className="div-shop">
      <h2 className="shop-title">Tienda</h2>

      <Searcher
        value={searchInput}
        onChange={setSearchInput}
        onSearch={() => setSearchTerm(searchInput)}
      />

      <div className="shop-layout">
        <aside className="sidebar">
          <h3>Categorías</h3>
          <CategoryList />
        </aside>

        <section className="shop">
          <div className="products-card">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Card key={item.id} product={item} />
              ))
            ) : (
              <p>No se encontraron productos</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
