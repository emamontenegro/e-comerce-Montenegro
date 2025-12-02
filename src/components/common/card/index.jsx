import { Link } from "react-router";
import './index.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>price: ${product.price}</p>
      <button className="add-cart-btn">Agregar</button>
      <Link to={`/shop/${product.id}`}>
        <button className="detail-btn">Detalle</button>
      </Link>
    </div>
  );
};

export default Card;
