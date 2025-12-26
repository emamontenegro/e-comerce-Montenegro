import "./index.css";
import { useAuth } from "../../context/auth";
import { useState } from "react";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useAuth();

  const [compraExitosa, setCompraExitosa] = useState(false);
  const [compraResumen, setCompraResumen] = useState(null);

  const totalProductos = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleBuy = () => {
    const orderId = `ORD-${Math.floor(
      Math.random() * 1000000
    )}`;

    const resumen = {
      orderId,
      items: cart,
      total,
      fecha: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "lastPurchase",
      JSON.stringify(resumen)
    );

    setCompraResumen(resumen);
    setCompraExitosa(true);
    clearCart();
  };

  if (cart.length === 0 && !compraExitosa) {
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

      {!compraExitosa && (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>

                <div className="cart-quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Subtotal: $
                  {item.price * item.quantity}
                </p>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h2>Resumen de compra</h2>

        {compraExitosa && compraResumen ? (
          <>
            <p className="success-msg">
              Compra realizada con éxito ✅
            </p>

            <p>
              <strong>Número de orden:</strong>{" "}
              {compraResumen.orderId}
            </p>

            <p>
              <strong>Fecha:</strong>{" "}
              {compraResumen.fecha}
            </p>

            <ul className="purchase-list">
              {compraResumen.items.map((item) => (
                <li key={item.id}>
                  {item.title} x{item.quantity} — $
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>

            <p>
              <strong>Total pagado:</strong> $
              {compraResumen.total}
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Productos:</strong>{" "}
              {totalProductos}
            </p>

            <p>
              <strong>Total:</strong> ${total}
            </p>

            <button
              className="buy-btn"
              onClick={handleBuy}
            >
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
