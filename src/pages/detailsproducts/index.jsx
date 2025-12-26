import { useParams, useNavigate } from "react-router";
import useProducts from "../../hooks/useProducts";
import { useAuth } from "../../context/auth";
import "./index.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { items, loading } = useProducts();

  const { cart, addToCart, removeFromCart } = useAuth();


  const product = items.find((p) => String(p.id) === String(id));


  if (loading) return <p className="loading">Cargando...</p>;

  if (!product) return <p className="not-found">Producto no encontrado</p>;


  const itemInCart = cart.find((p) => p.id === product.id);
  const quantity = itemInCart?.quantity || 0;


  const handleAddToCart = () => {
    addToCart(product);
  };


  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

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
            onClick={handleAddToCart}
            className="detail-btn-agregar"
            disabled={quantity > 0}
          >
            {quantity > 0 ? "Ya agregado" : "Agregar al carrito"}
          </button>

          <button
            onClick={handleRemoveFromCart}
            className="detail-btn-quitar"
            disabled={quantity === 0}
          >
            Quitar del carrito
          </button>

          <p>Cantidad agregada: {quantity}</p>

          {product.details && (
            <div className="detail-extra">
              <h3>Detalles</h3>

              {Array.isArray(product.details) ? (
                <ul>
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              ) : typeof product.details === "object" ? (
                <ul>
                  {Object.entries(product.details).map(([k, v]) => (
                    <li key={k}>
                      <strong>{k}: </strong>
                      {v}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{product.details}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
