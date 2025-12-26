import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import useProducts from "../../../hooks/useProducts";
import "./index.css";
import { Link } from "react-router";

const OfferCarousel = () => {
  const { items: products, loading } = useProducts();
  const { addToCart } = useAuth();
  const offers = products.filter(p => p.offer === true);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (offers.length === 0) return;

    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === offers.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [offers.length]);

  if (loading || offers.length === 0) return null;

  const next = () => {
    setCurrent(current === offers.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? offers.length - 1 : current - 1);
  };

  const product = offers[current];
  const discount = 0.15;
  const discountedPrice = Math.round(product.price * (1 - discount));

  return (
    <div className="offer-carousel">
      <button className="carousel-btn left" onClick={prev}>
        ‹
      </button>

      <div className="carousel-card">
        <img src={product.image} alt={product.title} />
        <div className="carousel-info">
          <h3>{product.title}</h3>

          <div className="price-container">
            <span className="old-price">${product.price}</span>
            <span className="price">${discountedPrice}</span>
          </div>

          <div className="carousel-actions">
            <Link to={`/shop/${product.id}`} className="btn-detail-link">
               VER DETALLE
            </Link>
            <button 
              className="btn-add-cart" 
              onClick={() => addToCart({ ...product, price: discountedPrice })}
            >
              COMPRAR
            </button>
          </div>
        </div>

        <span className="badge">15% OFF</span>
      </div>

      <button className="carousel-btn right" onClick={next}>
        ›
      </button>
    </div>
  );
};

export default OfferCarousel;