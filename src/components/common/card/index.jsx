const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.info}</p>
      <p>price: ${product.price}</p>
      <button>Agregar</button>
      <button>Detalle</button>
    </div>
  );
};

export default Card;
