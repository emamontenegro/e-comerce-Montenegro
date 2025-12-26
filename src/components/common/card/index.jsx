import { Link } from "react-router";
import { useAuth } from "../../../context/auth";
import "./index.css";

const Card = ({ product }) => {
  const { cart, addToCart } = useAuth();

  const productInCart = cart.find(p => p.id === product.id);
  const quantity = productInCart?.quantity || 0;

  const sinStock = product.stock === 0;
  const stockMaximoAlcanzado = quantity >= product.stock;

  return (
    <div className={`card ${sinStock ? "card-disabled" : ""}`}>
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>

      <h3>{product.title}</h3>

      <p>Precio: ${product.price}</p>

      {sinStock && (
        <p className="no-stock">Sin stock disponible</p>
      )}

      <button
        onClick={() => addToCart(product)}
        className="card-btn-counter"
        disabled={sinStock || stockMaximoAlcanzado}
      >
        {sinStock
          ? "Sin stock"
          : stockMaximoAlcanzado
          ? "Stock máximo"
          : "Agregar"}
      </button>

      {quantity > 0 && (
        <p className="added-quantity">
          Cantidad agregada: {quantity}
        </p>
      )}

      <Link to={`/shop/${product.id}`}>
        <button className="detail-btn">Detalle</button>
      </Link>
    </div>
  );
};

export default Card;
