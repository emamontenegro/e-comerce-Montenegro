import { useParams, useNavigate } from "react-router";
import useProducts from "../../hooks/useProducts";
import "./index.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, loading } = useProducts();

  if (loading) return <p className="loading">Cargando...</p>;

  const product = items.find((p) => String(p.id) === String(id));

  if (!product) return <p className="not-found">Producto no encontrado</p>;

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
          <button className="add-cart-btn"> Agregar al carrito </button>

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
