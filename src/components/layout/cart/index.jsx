import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../../context/auth";
import "./index.css";

const Cartitem = () => {
  const { cart } = useAuth();

  const itemCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="cart-icon">
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </div>
  );
};

export default Cartitem;
