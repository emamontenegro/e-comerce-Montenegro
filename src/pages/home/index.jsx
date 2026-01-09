import AboutUs from "../../components/common/homeAbouts";
import OfferCarousel from "../../components/common/offerCarousel";
import useProducts from "../../hooks/useProducts";
import "./index.css";

const Home = () => {
  const { items: products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  const ofertas = products.filter(p => p.offer).slice(0, 5);

  return (
    <div className="div-home">
      <AboutUs />

      {ofertas.length > 0 && (
        <>
          <h2 className="home-section-title">
            Productos en oferta
          </h2>

          <OfferCarousel products={ofertas} />
        </>
      )}

    </div>
  );
};

export default Home;
