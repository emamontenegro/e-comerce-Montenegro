import { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { useFilter } from "../../../hooks/search";
import ItemList from "./itemList";


const ItemListContainer = () => {
  const { items, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const { query, setQuery, filteredData } = useFilter(items || []);

  if (loading) return <p>Cargando productos...</p>;

  const filteredProducts = filteredData.filter(product => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;

    const subcategoryMatch = selectedSubcategory
      ? product.subcategory === selectedSubcategory
      : true;

    return categoryMatch && subcategoryMatch;
  });

  return (
    <ItemList items={filteredProducts} />
  );
};

export default ItemListContainer;
