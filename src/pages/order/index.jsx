import "./index.css";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getOrderById } from "../../services/firebase/orders";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrderById(id).then(setOrder);
  }, [id]);

  if (!order) return <p>Cargando orden...</p>;

  return (
    <div className="order">
      <h1 className="order-title">
        Gracias por tu compra ✅
      </h1>

      <p>
        <strong>Orden:</strong> {id}
      </p>

      <p>
        <strong>Total:</strong> ${order.total}
      </p>

      <ul className="order-list">
        {order.items.map((item) => (
          <li key={item.id}>
            {item.title} x{item.quantity}
          </li>
        ))}
      </ul>

      <button
        className="order-btn"
        onClick={() => navigate("/shop")}
      >
        Seguir comprando
      </button>
    </div>
  );
};

export default Order;
