import "./index.css";

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="cart-info">
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>

        <div className="cart-quantity">
          <button onClick={() => onDecrease(item.id)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>

        <p>
          Subtotal: ${item.price * item.quantity}
        </p>
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
