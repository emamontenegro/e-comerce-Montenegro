import { useNavigate } from "react-router";
import "./index.css";

const ItemDetail = ({ product, quantity, onAdd, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="detail-content">
        <img src={product.image} alt={product.title} />

        <div className="detail-info">
          <h1>{product.title}</h1>
          <p>{product.info}</p>
          <h2>${product.price}</h2>

          <button
            onClick={onAdd}
            className="detail-btn-agregar"
            disabled={quantity > 0}
          >
            {quantity > 0 ? "Ya agregado" : "Agregar al carrito"}
          </button>

          <button
            onClick={onRemove}
            className="detail-btn-quitar"
            disabled={quantity === 0}
          >
            Quitar del carrito
          </button>

          <p>Cantidad agregada: {quantity}</p>

          {product.details && (
            <div className="detail-extra">
              <h3>Detalles</h3>
              <ul>
                {Array.isArray(product.details)
                  ? product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))
                  : Object.entries(product.details).map(([k, v]) => (
                      <li key={k}>
                        <strong>{k}:</strong> {v}
                      </li>
                    ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
