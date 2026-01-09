import { useParams } from "react-router";
import useProducts from "../../../hooks/useProducts";
import { useAuth } from "../../../context/auth";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { items, loading } = useProducts();
  const { cart, addToCart, removeFromCart } = useAuth();

  const product = items.find(p => String(p.id) === String(id));
  const itemInCart = cart.find(p => p.id === product?.id);
  const quantity = itemInCart?.quantity || 0;

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <ItemDetail
      product={product}
      quantity={quantity}
      onAdd={() => addToCart(product)}
      onRemove={() => removeFromCart(product.id)}
    />
  );
};

export default ItemDetailContainer;
