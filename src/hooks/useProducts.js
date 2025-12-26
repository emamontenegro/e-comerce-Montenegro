import { useState, useEffect } from "react";
import { obtenerProductos,obtenerProductoPorId } from "../services/firebase/products";

const useProducts = (id = null) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (id) {
          const data = await obtenerProductoPorId(id);
          setItem(data);
        } else {
          const data = await obtenerProductos();
          setItems(data);
        }
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return { items, item, loading };
};

export default useProducts;
