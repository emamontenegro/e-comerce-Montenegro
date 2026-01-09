import { useState } from "react";
import { useNavigate } from "react-router";
import { createOrder } from "../../../services/firebase/orders";

const CheckoutForm = ({ cart, total, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleBuy = async () => {
    setLoading(true);
    setError(null);

    try {
      const order = await createOrder({ cart, total });

      onSuccess();

      navigate(`/order/${order.id}`);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al generar la orden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && <p className="error-msg">{error}</p>}

      <button className="buy-btn" onClick={handleBuy} disabled={loading}>
        {loading ? "Procesando compra..." : "Finalizar compra"}
      </button>
    </>
  );
};

export default CheckoutForm;
