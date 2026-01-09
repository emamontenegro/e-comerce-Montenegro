import Cart from '../../../pages/cart';
import './index.css';

const PreOrder = ({ cart, total }) => {
  return (
    <div className="pre-order-container">
      <h3 className="pre-order-title">Resumen de Productos</h3>
      
      <div className="pre-order-list">
        {cart.map((item) => (
          <div key={item.id} className="pre-order-item">
            <div className="pre-order-info">
              <span className="pre-order-qty">{item.quantity}x</span>
              <span className="pre-order-name">{item.name}</span>
            </div>
            <span className="pre-order-price">
              ${(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="pre-order-divider"></div>

      <div className="pre-order-total">
        <span>Total a abonar:</span>
        <span className="total-highlight">${total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PreOrder;