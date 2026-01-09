import "./index.css";
import { useAuth } from "../../context/auth";
import CartItem from "../../components/common/cartitem";
import CheckoutForm from "../../components/common/checkoutform";
import PreOrder from "../../components/common/preorder";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useAuth();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="divcart">
        <h1 className="cart-title">Carrito de Compras</h1>
        <p className="text-cart">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="divcart">
      <h1 className="cart-title">Carrito de Compras</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Resumen de compra</h2>
        <PreOrder cart={cart} total={total} />

        <CheckoutForm
          cart={cart}
          total={total}
          onSuccess={clearCart}
        />
      </div>
    </div>
  );
};

export default Cart;
