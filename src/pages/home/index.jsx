import Card from "../../components/common/card";
import AboutUs from "../../components/common/homeAbouts";
import useProducts from "../../hooks/useProducts";
import './index.css';

const Home = () => {
  const { items: products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>

      <AboutUs />

      <div className="product-grid">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
