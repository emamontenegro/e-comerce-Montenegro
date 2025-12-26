import { actualizarProducto, eliminarProducto } from "../services/firebase/products";

const useAdminProducts = () => {
  const update = async (product) => {
    await actualizarProducto(product.id, {
      price: 99999,
      stock: 10,
    });
  };

  const remove = async (id) => {
    await eliminarProducto(id);
  };

  return { update, remove };
};

export default useAdminProducts;
