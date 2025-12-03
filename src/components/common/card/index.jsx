import { Link } from "react-router";
import useProductCounter from "../../../hooks/useProductCounter";
import './index.css';

const Card = ({ product }) => {
  const { count, add } = useProductCounter(0);
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>price: ${product.price}</p>
      <button onClick={add} className="card-btn-counter">Agregar</button>
      <p>Cantidad agregada: {count}</p>
      <Link to={`/shop/${product.id}`}>
        <button className="detail-btn">Detalle</button>
      </Link>
    </div>
  );
};

export default Card;
